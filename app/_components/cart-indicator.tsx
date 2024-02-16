'use client'

import { useEffect, useState } from "react";
import ICart from "../_lib/interfaces/ICart";
import useCartContext from "../_lib/hooks/useCartContext";

const CartIndicator = () => {
  const context = useCartContext();

  if (!context) {
    throw new Error("No context provided for CartButton")
  };

  const { cart } = context;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(
      cart.reduce((total: number, item: ICart) => {
        return total + item.quantity
      }, 0)
    )
  }, [cart])


  return (
    <span className={`${quantity > 0 ? 'block' : 'hidden'} h-7 w-7 flex items-center justify-center rounded-full absolute -right-3 -top-2 text-base font-bold bg-[#FFF2CC] text-black`}>
      {quantity}
    </span>
  );
}

export default CartIndicator;