import CartFooter from "./_components/cart-footer";
import CartHeader from "./_components/cart-header";

const CartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-screen w-screen flex flex-col justify-between">
      <CartHeader />
      <div className="flex flex-1 w-full">
        {children}
      </div>
      <CartFooter />
    </main>
  );
}

export default CartLayout;