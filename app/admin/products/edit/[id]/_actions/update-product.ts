'use server'

import { db } from "@/app/_lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

interface UpdateProductProps {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
}

export default async function updateProduct(product: UpdateProductProps) {
  try {
    await db.product.update({
      where: {
        id: product.id
      },
      data: {
        name: product.name,
        price: new Decimal(product.price),
        description: product.description,
        category: product.category,
        imageUrl: product.imageUrl
      }
    })
    revalidatePath(`/admin/products/edit/${product.id}`);
    revalidatePath('/admin/products');
  } catch (err) {
    console.log(err)
  }
}