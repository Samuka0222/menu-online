'use server'

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

interface SaveAddressParams {
  zipCode: string,
  street: string,
  neighborhood: string,
  number: string,
  city: string,
  state: string,
  complement: string,
  userId: string,
  favorite: boolean
}

export default async function saveAddress(params: SaveAddressParams) {
  try {
    await db.address.create({
      data: {
        zipCode: params.zipCode,
        street: params.street,
        neighborhood: params.neighborhood,
        number: params.number,
        city: params.city,
        state: params.state,
        complement: params.complement,
        userId: params.userId,
        favorite: params.favorite
      }
    });

    revalidatePath('/')
    revalidatePath('/cart')
    revalidatePath('/cart/address')
  } catch (err) {
    toast.error('Não foi possível salvar o endereço, tente mais tarde.')
  }
}