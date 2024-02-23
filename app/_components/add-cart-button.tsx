'use client'

import { PlusIcon, MinusIcon } from "lucide-react";
import { Button } from "./ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Product } from "@prisma/client";
import { useState } from "react";
import { toast } from "sonner";

interface AddCartButtonProps {
  product: Product;
}

const AddCartButton = ({ product }: AddCartButtonProps) => {
  const context = useCartContext();

  if (!context) {
    throw new Error("No context provided for AddCartButton")
  };

  const { cart, addProduct, removeProduct } = context;
  const [quantity, setQuantity] = useState(0);
  const item = cart.find(item => item.item.id === product.id)

  const handleAddClick = () => {
    addProduct(product)
    setQuantity(quantity + 1)
    toast.success('Item adicionado ao carrinho.')
  }

  const handleRemoveClick = () => {
    if (quantity < 1) {
      return
    } else {
      removeProduct(product)
      toast.error('Item removido do carrinho.')
    }
  }

  return (
    <>
      <Button size='icon' className="shadow-none rounded-full" onClick={handleAddClick}>
        <PlusIcon />
      </Button>
      <span className="text-xl font-bold">
        {item ? item.quantity : 0}
      </span>
      <Button size='icon' className="shadow-none rounded-full" onClick={handleRemoveClick}>
        <MinusIcon />
      </Button>
    </>
  );
}

export default AddCartButton;