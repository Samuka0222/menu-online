'use client'

import CartItem from "@/app/_components/cart-item";
import useCartContext from "@/app/_lib/hooks/useCartContext";

const UserCart = () => {
  const context = useCartContext();

  if (!context) {
    throw new Error("No context provided for UserCart")
  };

  const { cart } = context;
  
  return (
    <div className="px-5 py-6">
      <h1>Seu carrinho:</h1>
      <div className="flex flex-col gap-4">
        {
          cart.map((product) => (
            <CartItem key={product.item.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}

export default UserCart;