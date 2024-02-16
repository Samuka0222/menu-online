import CartIndicator from "@/app/_components/cart-indicator";
import { Button } from "@/app/_components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartButton = () => {
  return (
    <div className="fixed z-10 bottom-4 right-4">
      <Button className="p-0 h-[50px] w-[50px] rounded-full bg-primary" asChild>
        <Link href='/cart/your-cart' className="relative">
          <CartIndicator />
          <ShoppingCart size={30} />
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;