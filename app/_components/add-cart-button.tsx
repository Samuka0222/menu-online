'use client'

import { PlusIcon, MinusIcon } from "lucide-react";
import { Button } from "./ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Product } from "@prisma/client";
import { useState } from "react";

interface AddCartButtonProps {
  product: Product;
}

const AddCartButton = ({ product }: AddCartButtonProps) => {
  const context = useCartContext();

  if (!context) {
    throw new Error("No context provided for AddCartButton")
  };

  const { addProduct, removeProduct } = context;
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    addProduct(product)
    setQuantity(quantity + 1)
  }

  const handleRemoveClick = () => {
    removeProduct(product)
    if (quantity <= 0) {
      return
    }
    setQuantity(quantity - 1)
  }

  return (
    <>
      <Button size='icon' className="shadow-none rounded-full" onClick={handleAddClick}>
        <PlusIcon />
      </Button>
      <span className="text-xl font-bold">
        {/* TODO: mostrar quantidade de itens dentro do carrinho, invés de criar um novo estado */}
        {quantity}
      </span>
      <Button size='icon' className="shadow-none rounded-full" onClick={handleRemoveClick}>
        <MinusIcon />
      </Button>
    </>
  );
}

export default AddCartButton;