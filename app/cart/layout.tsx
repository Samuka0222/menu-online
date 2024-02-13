import CartHeader from "./_components/cart-header";

const CartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
        <CartHeader />
        {children}
    </main>
  );
}

export default CartLayout;