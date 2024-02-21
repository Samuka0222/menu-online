'use client'

import AddCartButton from "@/app/_components/add-cart-button";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { SelectedCategoryContext } from "@/app/_providers/selected-category-provider";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Suspense, useContext, useState } from "react";
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

  const [showMoreActive, setShowMoreActive] = useState(false);
  const productsList = products.filter(item => item.category === selectedCategory)
  const productsToBeRender = showMoreActive ? productsList : productsList.slice(0, 8)

  return (
    // TODO: FIltrar os produtos para mostrar apenas 8 e adicionar o botão "ver mais"
    <div className="flex flex-col w-full items-center">
      <ul className="flex flex-col gap-3 w-full">
        {
          productsToBeRender.map(product => (
            product.category === selectedCategory && <Item key={product.id} product={product} />
          ))
        }
      </ul>
      <div>
        <Button className="text-lg mt-4" onClick={() => setShowMoreActive(!showMoreActive)}>
          {`${showMoreActive ? 'Ocultar' : 'Ver mais'}`}
        </Button>
      </div>
    </div>
  );
}

const Item = ({ product }: ItemProps) => {
  return (
    <li>
      <Card className="flex items-center border-none shadow-default w-full">
        <CardContent className="flex h-full p-3 gap-3 w-full items-center">
          <div className="flex justify-center items-center h-full min-w-[100px]">
            <Image
              src={product.imageUrl}
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
            <AddCartButton product={product} />
          </CardFooter>
        </CardContent>
      </Card>
    </li>
  )
}

const ItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex h-full p-3 gap-3 w-full items-center">
        <div className="flex justify-center items-center h-full min-w-[100px]">
          <Skeleton className="w-[100px] h-[100px] rounded-lg" />
        </div>
        <div className="h-full flex flex-col gap-1 flex-1 w-[100px]">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  )
}

export default MenuItems;