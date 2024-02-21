'use server'

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

export default async function setFavoriteAddress(addressId: string) {
  const existingFavoriteAddress = await db.address.findFirst({
    where: {
      favorite: true
    }
  })

  if (existingFavoriteAddress) {
    await db.address.update({
      where: {
        id: existingFavoriteAddress.id
      },
      data: {
        favorite: false
      }
    })
  }
  
  await db.address.update({
    where: {
      id: addressId
    },
    data: {
      favorite: true
    }
  })

  revalidatePath('/')
  revalidatePath('/address')
}