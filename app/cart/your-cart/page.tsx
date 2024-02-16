import CartFooter from "../_components/cart-footer";
import UserCart from "../_components/user-cart";

const CartPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <UserCart />
      <CartFooter />
    </main>
  );
}

export default CartPage;