'use client'

import { PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const AddCartButton = () => {
  const [quantity, setQuantity] = useState(0)

  const handleAddClick = () => {
    console.log('função chamada: add')
    setQuantity(quantity + 1)
  }

  const handleRemoveClick = () => {
    console.log('função chamada: remove')
    if (quantity === 0) {
      return
    }
    setQuantity(quantity - 1)
  }

  return (
    <>
      <Button size='icon' onClick={handleAddClick}>
        <PlusCircle />
      </Button>
      <span className="text-xl font-bold">{quantity}</span>
      <Button size='icon' onClick={handleRemoveClick}>
        <MinusCircle />
      </Button>
    </>
  );
}

export default AddCartButton;