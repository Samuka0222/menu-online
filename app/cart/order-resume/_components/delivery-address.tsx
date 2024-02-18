'use server'

import DeliveryAddressSkeleton from "@/app/_components/skeletons/delivery-address-skeleton";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { MapPinned } from "lucide-react";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

const DeliveryAddress = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('Usuário não encontrado')
  }
  const address = await db.address.findFirst({
    where: {
      userId: (session?.user as any).id
    }
  })

  const formatedZipCode = `
    ${address?.zipCode.slice(0, 5)}-${address?.zipCode.slice(5)}
  `

  return (
    <Suspense fallback={<DeliveryAddressSkeleton />}>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-[#FFF2CC] flex justify-center items-center rounded-xl">
          <MapPinned size={35} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium capitalize text-black">{address!.street}, {address!.number}, {address!.neighborhood}</span>
          <span className="text-lg font-medium capitalize text-black">{address!.city} - {address!.state} / {formatedZipCode}</span>
          {address!.complement !== '' ? <span className="text-lg font-medium capitalize text-black">{address!.complement} </span> : ''}
        </div>
      </div>
    </Suspense>
  );
}

export default DeliveryAddress;