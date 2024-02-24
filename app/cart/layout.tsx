'use client'

import { Metadata } from "next";
import CartFooter from "./_components/cart-footer";
import CartHeader from "./_components/cart-header";

export const metadata: Metadata = {
  description: "Acompanhe seu carrinho para efetuar o pedido.",
}

const CartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <main className="h-screen w-full md:px-8 lg:px-40
       flex flex-col justify-between overflow-hidden">
        <CartHeader />
        <div className="flex flex-1 w-full overflow-y-auto pb-2">
          {children}
        </div>
        <CartFooter />
      </main>
  );
}

export default CartLayout;