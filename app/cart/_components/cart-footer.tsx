import useCartContext from "@/app/_lib/hooks/useCartContext";
import useCartStepsContext from "@/app/_lib/hooks/useCartStepContext";
import { Bike } from "lucide-react";

const CartFooter = () => {
  const cartContext = useCartContext();

  if (!cartContext) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { cartValue } = cartContext;

  return (
    <div className="flex w-full flex-col justify-center items-end border-t-2 pt-4">
      <span className="text-text text-lg font-medium">Subtotal: R$ {cartValue.toFixed(2).replace('.', ',')} </span>
      <span className="text-textOut text-lg font-medium"><Bike /> Entrega + R$ 5,00 </span>
      <span className="flex text-2xl mt-2">
        <strong>Total: </strong>
        <p className="ml-1 text-primary font-bold">R$ {(cartValue + 5.0).toFixed(2).replace('.', ',')}</p>
      </span>
    </div>
  )
}

export default CartFooter;