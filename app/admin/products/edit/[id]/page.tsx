'use server'

import { db } from "@/app/_lib/prisma";
import ProductForm from "@/app/admin/_components/product-form";
import { redirect } from "next/navigation";

interface EditProductPageProps {
  params: {
    id: string;
  }
}

const EditProductPage = async ({ params }: EditProductPageProps) => {

  if (!params) {
    redirect('/admin/products')
  }

  const product = await db.product.findUnique({
    where: {
      id: params.id
    }
  })

  if (!product) {
    return redirect('/admin/products')
  }

  return (
    <main className="px-6 py-5 flex flex-col justify-center items-center">
      <h1 className="text-xl text-black font-semibold mb-3">Editar Produto</h1>
      <p className="text-base text-gray-400 mb-5">Edite as propriedades de seus produtos.</p>
      <ProductForm product={product} type="update" />
    </main>
  );
}

export default EditProductPage;