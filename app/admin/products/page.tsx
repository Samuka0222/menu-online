'use server'

import { db } from "@/app/_lib/prisma";
import { DataTable } from "./data-table";
import { columns } from "./columns"

const ProductsPage = async () => {
  const products = await db.product.findMany();

  return (
    <section className="flex flex-col justify-center items-center w-full px-6 py-5">
      <h1 className="text-lg font-bold uppercase">Controle de Produtos</h1>
      <DataTable columns={columns} data={products} />
    </section>
  );
}

export default ProductsPage;