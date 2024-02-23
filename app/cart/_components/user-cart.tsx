'use client'

import CartItem from "@/app/_components/cart-item";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { ShoppingBagIcon } from "lucide-react";

const UserCart = () => {
  const context = useCartContext();

  if (!context) {
    throw new Error("No context provided for UserCart")
  };

  const { cart, addProduct, deleteProduct, removeProduct } = context;

  return (
    
      <div className="flex flex-col gap-4 items-center">
        {
          cart.length > 0
            ? cart.map((product) => (
              <CartItem
                key={product.item.id}
                product={product}
                addProduct={addProduct}
                deleteProduct={deleteProduct}
                removeProduct={removeProduct}
              />
            ))
            : <div className="h-full w-full flex flex-col justify-center items-center">
              <span className="h-12 w-12 rounded-full bg-[#fff2cc] flex justify-center items-center mb-2">
                <ShoppingBagIcon className="text-primary" />
              </span>
              <p className="text-lg font-medium">Seu carrinho está vazio.</p>
            </div>
        }
      </div>
  );
}

export default UserCart;