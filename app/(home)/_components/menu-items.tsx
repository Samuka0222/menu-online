'use client'

import AddCartButton from "@/app/_components/add-cart-button";
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card";
import { SelectedCategoryContext } from "@/app/_providers/selectedCategory";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useContext } from "react";
interface MenuItemsProps {
  products: Product[];
}

interface ItemProps {
  product: Product;
}

const MenuItems = ({ products }: MenuItemsProps) => {
  const context = useContext(SelectedCategoryContext);
  if (!context) {
    throw new Error('Context not found!')
  }
  const { selectedCategory } = context;

  return (
    <div className="flex flex-col gap-3 w-full">
      {
        products.map(product => (
          product.category === selectedCategory && <Item key={product.id} product={product} />
        ))
      }
    </div>
  );
}

const Item = ({ product }: ItemProps) => {
  return (
    <Card className="flex items-center border-none shadow-default w-full">
      <CardContent className="flex h-full p-3 gap-3 w-full items-center">
        <div className="flex justify-center items-center h-full min-w-[100px]">
          <Image
            src='https://utfs.io/f/e7f87c77-e476-489e-add7-7087d11096dd-jeu9k0.63841de36d8e5edfafa13023fc303285.jpg'
            alt={product.description}
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="h-full flex flex-col gap-1 flex-1 w-[100px]">
          <h3 className="text-xl font-bold text-ellipsis overflow-hidden text-nowrap">{product.name}</h3>
          <h4 className="text-2xl font-bold text-primary">R$ {Number(product.price).toFixed(2).replace('.', ',')}</h4>
        </div>
        <CardFooter className="min-w-[40px] flex flex-col justify-center items-center h-full p-0 gap-1">
          <AddCartButton />
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default MenuItems;