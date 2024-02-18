'use client'

import { Button } from "@/app/_components/ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Bike } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import makeOrder from "../_actions/make-order";
import { useContext } from "react";
import { AddressContext } from "../_providers/address-provider";
import { useSession } from "next-auth/react";

const CartFooter = () => {
  const { data } = useSession();
  const cartContext = useCartContext();
  const addressContext = useContext(AddressContext);

  if (!cartContext || !addressContext) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { cart, cartValue } = cartContext;
  const { address } = addressContext;

  const pathname = usePathname();
  const handleOrderClick = async () => {
    try {
      await makeOrder({
        address: address,
        cart: cart,
        date: new Date(),
        userId: (data?.user as any).id
      })
    } catch (error) {
      console.error('Não foi possível fazer o pedido')
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-end border-t-2 pt-4 px-5 py-6">
      <span className="text-text text-xl font-medium">Subtotal: R$ {cartValue.toFixed(2).replace('.', ',')} </span>
      <span className="text-gray-400 text-lg font-medium flex"><Bike className="mr-2" /> Entrega + R$ 5,00 </span>
      <span className="flex text-2xl mt-1">
        <strong>Total: </strong>
        <p className="ml-1 text-primary font-bold">R$ {(cartValue + 5.0).toFixed(2).replace('.', ',')}</p>
      </span>

      {
        pathname === '/cart/your-cart' && (
          <div className="mt-4">
            <Button size='lg' className="text-lg rounded-xl" asChild>
              <Link href={cart.length < 1 ? '' : '/cart/address'}>
                Continuar
              </Link>
            </Button>
          </div>
        )
      }

      {
        pathname === '/cart/order-resume' && (
          <div className="mt-4">
            <Button size='lg' className="text-lg rounded-xl" onClick={handleOrderClick}>
                Fazer Pedido
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default CartFooter;