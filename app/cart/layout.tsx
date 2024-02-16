'use client'

import CartFooter from "./_components/cart-footer";
import CartHeader from "./_components/cart-header";
import { AddressProvider } from "./_providers/address-provider";

const CartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AddressProvider>
      <main className="h-screen w-screen flex flex-col justify-between overflow-hidden">
        <CartHeader />
        <div className="flex flex-1 w-full overflow-y-auto pb-2">
          {children}
        </div>
        <CartFooter />
      </main>
    </AddressProvider>
  );
}

export default CartLayout;