'use client'

import ICart from "@/app/_lib/interfaces/ICart";
import Image from "next/image";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { Product } from "@prisma/client";

interface CartItemProps {
  product: ICart;
  addProduct: (newProduct: Product) => void;
  removeProduct: (newProduct: Product) => void;
  deleteProduct: (product: Product) => void;
}

const CartItem = ({ product, addProduct, removeProduct, deleteProduct }: CartItemProps) => {
  return (
    <div className="flex justify-between items-center border-b border-black">
      <div className="flex py-2 items-center">
        <div>
          <Image
            src='https://utfs.io/f/e7f87c77-e476-489e-add7-7087d11096dd-jeu9k0.63841de36d8e5edfafa13023fc303285.jpg'
            alt={product.item.name}
            width={80}
            height={80}
            className="rounded-xl"
          />
        </div>
        <div className="ml-2">
          <h3 className="font-semibold text-black text-xl w-[200px] text-ellipsis overflow-hidden text-nowrap">{product.item.name}</h3>
          <h2 className="font-bold text-primary text-2xl">R$ {Number(product.item.price).toFixed(2).replace('.', ',')}</h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-1">
          <Button size='icon' className="w-9 h-9" onClick={() => addProduct(product.item)}>
            <PlusIcon />
          </Button>
          <span className="flex justify-center items-center h-9 px-2 text-xl font-bold">
            {product.quantity}
          </span>
          <Button size='icon' className="w-9 h-9 rounded" onClick={() => removeProduct(product.item)}>
            <MinusIcon />
          </Button>
        </div>
        <Button variant='destructive' size='icon' className="w-9 h-9 ml-2" onClick={() => deleteProduct(product.item)}>
          <XIcon />
        </Button>
      </div>

    </div>
  );
}

export default CartItem;