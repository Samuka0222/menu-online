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

const AddressPage = async () => {
  const session = await getServerSession(authOptions)
  const savedAddress = await db.address.findMany({
    where: {
      userId: (session?.user as any).id
    },
    orderBy: {
      favorite: "desc"
    }
  })

  return (
    // TODO: Arrumar o layout da página.
    <main className="flex flex-col items-center w-full h-full">
      <header className="flex w-full justify-between items-center px-5 py-6">
        <div>
          {
            session?.user
              ? <>
                <div className="w-full">
                  <h2 className="font-semibold text-black text-xl">Olá, {session.user.name}!</h2>
                </div>
              </>
              : <>
                {/* Colocar Alert para redirecionar o usuário para a página de Login */}
                <div>
                  <UserCircle size={30} />
                </div>
                <h2 className="font-semibold text-black">Olá, usuário!</h2>
              </>
          }
        </div>
        <div className="flex gap-4 justify-between">
          <HomeButton />
          <SideMenu />
        </div>
      </header>

      <section className="w-full flex flex-col flex-grow justify-center items-center mt-5 px-5 py-6">
        <h1 className="w-full text-2xl font-bold text-black text-left">Endereços cadastrados:</h1>
        <div className="mt-6 w-full flex flex-col gap-4">
          {
            savedAddress.map((address, index) => (
              <AddressCard key={address.id} address={address} index={index} />
            ))
          }
        </div>

        <SaveAddressForm trigger={
          <div className="flex flex-col px-3 py-3 justify-center items-center border-2 border-gray-500 rounded-xl mt-4 cursor-pointer">
            <h2 className="font-medium">{
              savedAddress.length > 0 ? 'Adicionar outro endereço' : 'Adicionar um endereço'
            }</h2>
            <PlusCircle />
          </div>
        } />
      </section>
      <Footer />
    </main>
  );
}

export default AddressPage;