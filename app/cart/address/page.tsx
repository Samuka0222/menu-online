'use server'

import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";
import ConfirmAddress from "./_components/confirm-address";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Confirme seu endereço'
}

const SelectAddressPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('Usuário não encontrado')
  }
  const savedAddresses = await db.address.findMany({
    where: {
      userId: (session?.user as any).id
    }
  })

  if (!savedAddresses) {
    return null
  }

  return (
    <main className="px-5 h-full w-full overflow-y-hidden flex flex-col justify-center">
      <h1 className="text-2xl font-medium text-black mb-2">Endereço de entrega:</h1>
      <div className="flex flex-col w-full px-2 overflow-y-auto mb-2">
        <h2>Confirme o endereço de entrega:</h2>
        <section>
          <ConfirmAddress savedAddresses={savedAddresses} />
        </section>
      </div>
    </main>
  );
}

export default SelectAddressPage;