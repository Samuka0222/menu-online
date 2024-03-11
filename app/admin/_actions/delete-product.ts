'use server'

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";


export default async function deleteProduct(productId: string) {
  try {
    await db.product.delete({
      where: {
        id: productId
      }
    })
    revalidatePath('/admin/products');
  } catch (err) {
    console.log(err)
  }
}