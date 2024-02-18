'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { UserCircle } from "lucide-react";
import SideMenu from "../_components/side-menu";

const AddressPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex flex-col items-center px-5 py-6 w-screen h-screen">
      <header className="flex w-full justify-between items-center">
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
        <div>
          <SideMenu />
        </div>
      </header>
    </main>
  );
}

export default AddressPage;