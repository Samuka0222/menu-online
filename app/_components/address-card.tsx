'use client'

import { Address } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { deleteAddress } from "../_actions/delete-address";

interface AddressCardProps {
  address: Address,
  index: number
}

const AddressCard = ({ address, index }: AddressCardProps) => {
  const handleDeleteClick = async () => {
    try {
      await deleteAddress(address.id)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <Card>
      <CardHeader className="py-2 flex flex-row justify-between">
        <CardTitle>
          <p className="text-xl font-medium">Endereço {index + 1}: </p>
        </CardTitle>
        <Button variant='destructive' size='icon' onClick={handleDeleteClick}>
          <TrashIcon />
        </Button>
      </CardHeader>
      <CardContent className="pt-2 pb-3">
        <div>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">CEP: </p>
            <p className="font-medium">{address.zipCode.slice(0, 5)}-{address.zipCode.slice(5)}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Rua: </p>
            <p className="font-medium">{address.street}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Número: </p>
            <p className="font-medium">{address.number}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Bairro: </p>
            <p className="font-medium">{address.neighborhood}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Cidade: </p>
            <p className="font-medium">{address.city}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Estado: </p>
            <p className="font-medium">{address.state}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-gray-600">Complemento: </p>
            {
              address.complement
                ? <>
                  <p className="font-medium">{address.complement}</p>
                </>
                : <>
                  <p className="font-medium text-gray-500">(não informado)</p>
                </>
            }
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default AddressCard;