'use client'

import ICart from "@/app/_lib/interfaces/ICart";;
import { createContext, useState } from "react";

interface CartContextProps {
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined)
CartContext.displayName = "Cart" 

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICart[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}