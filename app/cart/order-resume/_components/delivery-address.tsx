'use client'

import formatZipCode from "@/app/_helpers/format-zip-code";
import useAddressContext from "@/app/_lib/hooks/useAddressContext";
import { MapPinned } from "lucide-react";

const DeliveryAddress = () => {
  const context = useAddressContext();

  if (!context) {
    throw new Error("No context provided for DeliveryAddress")
  }

  const { address } = context;

  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 bg-[#FFF2CC] flex justify-center items-center rounded-xl">
        <MapPinned size={35} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-medium capitalize text-black">{address.street}, {address.number}, {address.neighborhood}</span>
        <span className="text-lg font-medium capitalize text-black">{address.city} - {address.state} / {formatZipCode(address.zipCode)}</span>
        {address.complement !== '' ? <span className="text-lg font-medium capitalize text-black">{address.complement} </span> : ''}
      </div>
    </div>
  );
}

export default DeliveryAddress;