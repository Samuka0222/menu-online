'use client'

import CartIndicator from "@/app/_components/cart-indicator";
import { Button } from "@/app/_components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { cn } from "@/app/_lib/utils";

const CartButton = () => {
  const context = useCartContext();
  if (!context) {
    throw new Error("No context provided for CartButton")
  };

  const { cart } = context;

  return (
    <div className={cn(
      cart.length > 0 ? 'block' : 'hidden',
      "fixed z-10 bottom-4 right-4 lg:right-14"
    )}>
      <Button className="p-0 h-[50px] w-[50px] rounded-full bg-primary shadow-default" asChild>
        <Link href='/cart/your-cart' className="relative">
          <CartIndicator />
          <ShoppingCart size={30} />
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;