'use server'

import { db } from "@/app/_lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

interface CreateProductProps {
  name: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
}

export default async function createProduct(product: CreateProductProps) {
  try {
    await db.product.create({
      data: {
        name: product.name,
        price: new Decimal(product.price),
        description: product.description,
        category: product.category,
        imageUrl: product.imageUrl
      }
    })
    revalidatePath(`/admin/products/add-product/`);
    revalidatePath('/admin/products');
  } catch (err) {
    console.log(err)
  }
}