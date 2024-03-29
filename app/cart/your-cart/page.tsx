import { Metadata } from "next";
import UserCart from "../_components/user-cart";

export const metadata: Metadata = {
  title: 'Seu carrinho'
}

const CartPage = () => {
  return (
    <main className="w-full h-fit px-5">
      <h1 className="text-2xl font-medium text-black mb-4">Seu carrinho:</h1>
      <div className="py-3 w-full h-full items-center pb-4">
        <UserCart />
      </div>
    </main>
  );
}

export default CartPage;