'use client'

import { Address } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Loader, StarIcon, TrashIcon } from "lucide-react";
import { deleteAddress } from "../_actions/delete-address";
import setFavoriteAddress from "../_actions/set-favorite-address";
import { toast } from "sonner";
import { useState } from "react";

interface AddressCardProps {
  address: Address,
  index: number
}

const AddressCard = ({ address, index }: AddressCardProps) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleFavoriteClick = async () => {
    try {
      await setFavoriteAddress(address.id)
    } catch (err) {
      toast.error('Erro ao favoritar endereço, tente mais tarde.')
    }
  }

  const handleDeleteClick = async () => {
    try {
      setIsLoading(true)
      await deleteAddress(address.id)
    } catch (err) {
      toast.error('Erro ao deletar o endereço, tente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader className="pt-2 pb-0 flex flex-row justify-between items-center">
        <CardTitle>
          <p className="text-xl font-medium">Endereço {index + 1}: </p>
        </CardTitle>
        <div className="flex gap-2">
          {
            address.favorite
              ? <Button variant='outline' size='icon'>
                <StarIcon fill="rgb(255 191 0)" className="text-primary" />
              </Button>

              : <Button variant='outline' size='icon' onClick={handleFavoriteClick}>
                <StarIcon className="text-black" />
              </Button>
          }
          <Button variant='destructive' size='icon' onClick={handleDeleteClick}>
            {
              isLoading ? <Loader className="animate-spin" /> : <TrashIcon />
            }
          </Button>
        </div>
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