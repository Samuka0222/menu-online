'use client'

import { PlusCircle, MinusCircle } from "lucide-react";
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
      <Button size='icon' onClick={handleAddClick}>
        <PlusCircle />
      </Button>
      <span className="text-xl font-bold">
        {quantity}
      </span>
      <Button size='icon' onClick={handleRemoveClick}>
        <MinusCircle />
      </Button>
    </>
  );
}

export default AddCartButton;