'use server'

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteAddress = async (addressId: string) => {
  await db.address.delete({
    where: {
      id: addressId
    }
  })

  revalidatePath('/')
  revalidatePath('/address')
}