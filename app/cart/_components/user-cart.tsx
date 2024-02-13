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
    <div className="px-5 py-3 h-full w-full items-center">
      <h1 className="text-2xl font-medium text-black mb-4">Seu carrinho:</h1>
      <div className="flex flex-col gap-4 h-full items-center justify-center">
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
    </div>
  );
}

export default UserCart;