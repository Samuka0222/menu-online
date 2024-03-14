'use server'

import { db } from "@/app/_lib/prisma";
import RestaurantSettingsForm from "./_components/restaurant-settings";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    alert('Você precisa estar logado para acessar essa área')
    return redirect('/')
  }

  const settings = await db.admin.findFirst({
    where: {
      userId: (session?.user as any).id
    }
  });

  return ( 
    <main className="px-6 py-5 flex flex-col justify-center items-center">
      <h1 className="text-xl text-black font-semibold mb-3">Configurações</h1>
      <p className="text-base text-gray-400 mb-5">Personalize as informações do seu restaurante.</p>
      <RestaurantSettingsForm settings={settings!} />
    </main>
   );
}

export default SettingsPage;