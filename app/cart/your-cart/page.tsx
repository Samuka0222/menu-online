import CartFooter from "../_components/cart-footer";
import UserCart from "../_components/user-cart";

const CartPage = () => {
  return (
    // TODO: Verificar layout quando tem muitos itens no carrinho.
    <main className="w-full overflow-hidden h-full px-5">
      <h1 className="text-2xl font-medium text-black mb-4">Seu carrinho:</h1>
      <div className="py-3 w-full h-full items-center overflow-y-auto">
        <UserCart />
      </div>
    </main>
  );
}

export default CartPage;