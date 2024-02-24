'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { PlusCircle, UserCircle } from "lucide-react";
import SideMenu from "../_components/side-menu";
import { db } from "../_lib/prisma";
import HomeButton from "../_components/home-button";
import Footer from "../_components/footer";
import AddressCard from "../_components/address-card";
import SaveAddressForm from "../_components/save-address-form";
import LoginButton from "./_components/login-button";

const AddressPage = async () => {
  const session = await getServerSession(authOptions)
  const savedAddress = session?.user
    ? await db.address.findMany({
      where: {
        userId: (session?.user as any).id
      },
      orderBy: {
        favorite: "desc"
      }
    })
    : undefined;

  return (
    <main className="flex flex-col items-center w-full h-screen overflow-y-auto">
      <header className="flex w-full justify-between items-center px-5 pt-6 pb-0 lg:px-20">
        <div>
          {
            session?.user
              ? <>
                <div className="w-full">
                  <h2 className="font-semibold text-black text-xl">Olá, {session.user.name}!</h2>
                </div>
              </>
              : <>
                <div className="flex items-center gap-1">
                  <UserCircle size={30} />
                  <h2 className="font-semibold text-black text-xl">Olá, usuário!</h2>
                </div>
              </>
          }
        </div>
        <div className="flex gap-4 justify-between">
          <HomeButton />
          <SideMenu />
        </div>
      </header>

      <section className="w-full flex flex-col flex-1 justify-center items-center px-5">
        {
          savedAddress
            ? <div className="mt-6 w-full h-full flex flex-col gap-4 justify-center items-center lg:flex-row lg:flex-wrap">
              <h1 className="w-full text-2xl font-bold text-black text-center">Endereços cadastrados:</h1>
              {
                savedAddress.map((address, index) => (
                  <AddressCard key={address.id} address={address} index={index} />
                ))
              }
              <SaveAddressForm trigger={
                <div className="flex flex-col px-3 py-3 justify-center items-center border-2 border-gray-500 rounded-xl mt-4 lg:mt-0 cursor-pointer lg:h-[240px]">
                  <h2 className="font-medium">
                    {
                      savedAddress.length > 0 ? 'Adicionar outro endereço' : 'Adicionar um endereço'
                    }
                  </h2>
                  <PlusCircle />
                </div>
              } />
            </div>
            : <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-lg text-black font-medium">Você precisa fazer o login para acessar seus endereços.</p>
              <LoginButton />
            </div>
        }
      </section>
      <Footer />
    </main>
  );
}

export default AddressPage;