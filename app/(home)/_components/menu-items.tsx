'use client'

import AddCartButton from "@/app/_components/add-cart-button";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card";
import { SelectedCategoryContext } from "@/app/_providers/selected-category-provider";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useContext, useState } from "react";
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
    <div className="flex flex-col w-full items-center">
      <ul className="flex flex-col gap-3 w-full md:flex-row md:flex-wrap md:gap-8 md:justify-center">
        {
          productsToBeRender.map(product => (
            product.category === selectedCategory && <Item key={product.id} product={product} />
          ))
        }
      </ul>
      <div className="mt-8" >
        <Button className="text-lg" onClick={() => setShowMoreActive(!showMoreActive)}>
          {`${showMoreActive ? 'Ocultar' : 'Ver mais'}`}
        </Button>
      </div>
    </div>
  );
}

const Item = ({ product }: ItemProps) => {
  return (
    <li>
      <Card className="flex items-center border-none shadow-default w-full md:w-[280px]">
        <CardContent className="flex h-full p-3 gap-3 w-full items-center md:flex-col">
          <div className="flex justify-center items-center h-full min-w-[100px]">
            <Image
              src={product.imageUrl}
              alt={product.description}
              width={100}
              height={100}
              className="md:hidden rounded-lg"
            />
            <Image
              src={product.imageUrl}
              alt={product.description}
              width={210}
              height={190}
              className="hidden md:block rounded-lg"
            />
          </div>
          <div className="h-full flex flex-col gap-1 flex-1 w-[100px] md:items-center md:w-full md:px-3">
            <h3 className="text-xl md:w-full md:text-center font-bold text-ellipsis overflow-hidden text-nowrap">{product.name}</h3>
            <h4 className="text-2xl font-bold text-primary">R$ {Number(product.price).toFixed(2).replace('.', ',')}</h4>
          </div>
          <CardFooter className="min-w-[40px] flex flex-col justify-center items-center h-full p-0 gap-1 md:flex-row md:w-full md:gap-3">
            <AddCartButton product={product} />
          </CardFooter>
        </CardContent>
      </Card>
    </li>
  )
}

export default MenuItems;