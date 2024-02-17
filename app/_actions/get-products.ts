import { db } from "@/app/_lib/prisma";

export default async function getProducts() {
  const [categories, menuProducts] = await Promise.all([
    db.product.findMany({
      select: {
        category: true
      },
      distinct: ['category']
    }),
    db.product.findMany({})
  ])

  return {
    categories,
    menuProducts
  }
}