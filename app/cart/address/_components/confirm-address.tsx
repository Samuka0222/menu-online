'use client'

import SaveAddressForm from "@/app/_components/save-address-form";
import { Button } from "@/app/_components/ui/button";
import formatZipCode from "@/app/_helpers/format-zip-code";
import useAddressContext from "@/app/_lib/hooks/useAddressContext";
import { Address } from "@prisma/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ConfirmAddressProps {
  savedAddresses: Address[]
}

const ConfirmAddress = ({ savedAddresses }: ConfirmAddressProps) => {
  const context = useAddressContext();

  if (!context) {
    throw new Error("No context provided for ConfirmAddress")
  };

  const { setAddress } = context;

  const [selectedAddress, setSelectedAddress] = useState(0);
  const router = useRouter();

  const handleSelectNextAddress = () => {
    setSelectedAddress(selectedAddress + 1);
  }

  const handleSelectPreviousAddress = () => {
    setSelectedAddress(selectedAddress - 1);
  }

  const handleConfirmAddress = () => {
    setAddress({
      zipCode: savedAddresses[selectedAddress].zipCode,
      street: savedAddresses[selectedAddress].street,
      neighborhood: savedAddresses[selectedAddress].neighborhood,
      number: savedAddresses[selectedAddress].number,
      city: savedAddresses[selectedAddress].city,
      state: savedAddresses[selectedAddress].state,
      complement: savedAddresses[selectedAddress].complement ? savedAddresses[selectedAddress].complement : '(não informado)',
      id: savedAddresses[selectedAddress].id,
    })
    router.push('/cart/order-resume')
  }

  useEffect(() => {
    console.log(savedAddresses.length)
    console.log(selectedAddress)
    console.log(savedAddresses[selectedAddress])
  }, [savedAddresses, selectedAddress])

  return (
    <>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">CEP:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{formatZipCode(savedAddresses[selectedAddress].zipCode)}</p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">Bairro:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{savedAddresses[selectedAddress].neighborhood}</p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">Número:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{savedAddresses[selectedAddress].number}</p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">Cidade:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{savedAddresses[selectedAddress].city}</p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">UF:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{savedAddresses[selectedAddress].state}</p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <h3 className="font-medium text-base text-gray-600">Complemento:</h3>
        <p className="border border-gray-300 rounded-lg px-3 py-2">{
          savedAddresses[selectedAddress].complement
            ? savedAddresses[selectedAddress].complement
            : "(não informado)"
        }</p>
      </div>

      <div className="w-full flex gap-2 justify-center mt-4">
        <Button onClick={handleSelectPreviousAddress} disabled={selectedAddress === 0} size='icon'>
          <ChevronLeft />
        </Button>
        <Button onClick={handleSelectNextAddress} disabled={selectedAddress === (savedAddresses.length - 1)} size='icon'>
          <ChevronRight />
        </Button>
        <Button onClick={handleConfirmAddress}>
          Confirmar
        </Button>
        <SaveAddressForm trigger={
          <Button>
            Novo Endereço
          </Button>
        }
        />
      </div>
    </>
  );
}

export default ConfirmAddress;