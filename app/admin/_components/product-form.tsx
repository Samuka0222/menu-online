'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { Product } from "@prisma/client";
import ImageForm from "./image-form";
import { useRouter } from "next/navigation";
import updateProduct from "../_actions/update-product";
import createProduct from "../_actions/create-product";

interface EditProductFormProps {
  product?: Product;
  type?: 'update' | 'create'
}

const formSchema = z.object({
  name: z.string({
    required_error: 'Nome do Produto deve ser informado'
  }).min(3, {
    message: "O nome deve possuir pelo menos 3 letras",
  }),
  price: z.string({
    required_error: 'O preço deve ser informado.'
  }),
  description: z.string({
    required_error: "É necessário descrever o produto",
  }),
  category: z.string({
    required_error: "É necessário informar a categoria do produto",
  }).min(3, {
    message: "A categoria deve conter no mínimo 3 caracteres",
  })
})

const ProductForm = ({ product, type = 'update' }: EditProductFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(product ? product.imageUrl : '');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product ? product.name : '',
      price: product ? String(product.price) : '',
      description: product ? product.description : '',
      category: product ? product.category : '',
    }
  })

  const uploadNewImg = (imageUrl: string) => {
    setImgUrl(imageUrl);
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const newProduct = {
        id: product ? product.id : '',
        name: values.name,
        price: values.price,
        description: values.description,
        category: values.category,
        imageUrl: imgUrl,
      };
      if (type === 'update') {
        await updateProduct(newProduct);
      }
      if (type === 'create') {
        await createProduct(newProduct);
      }
      setIsLoading(false);
      router.replace('/admin/products');
    } catch (err) {
      toast.error('Erro ao atualizar produto.');
      console.log(err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 items-center justify-center w-full md:w-[70%] lg:w-[50%]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome do Produto:</FormLabel>
              <FormControl>
                <Input placeholder="Insira o nome do produto." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Preço:</FormLabel>
              <FormControl>
                <Input placeholder="Insira o valor." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descrição:</FormLabel>
              <FormControl>
                <Input placeholder="Insira a descrição." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Categoria:</FormLabel>
              <FormControl>
                <Input placeholder="Insira a categoria." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageForm
          imageUrl={imgUrl}
          updateImage={uploadNewImg}
          description={product ? product.description : ''}
        />

        <Button type="submit" className="w-full text-lg">
          {
            isLoading
              ? <>
                <Loader className="animate-spin mr-1" />
                Enviar
              </>
              : 'Enviar'
          }
        </Button>
      </form>
    </Form>
  );
}

export default ProductForm;