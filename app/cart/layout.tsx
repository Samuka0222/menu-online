'use client'

import CartFooter from "./_components/cart-footer";
import CartHeader from "./_components/cart-header";

const CartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <main className="h-screen w-full flex flex-col justify-between overflow-hidden">
        <CartHeader />
        <div className="flex flex-1 w-full overflow-y-auto pb-2">
          {children}
        </div>
        <CartFooter />
      </main>
  );
}

export default CartLayout;