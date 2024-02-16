'use client'

import { Button } from "@/app/_components/ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Bike } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CartFooter = () => {
  const cartContext = useCartContext();

  if (!cartContext) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { cart, cartValue } = cartContext;

  const pathname = usePathname();
  const router = useRouter();

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
            <Button size='lg' className="text-lg rounded-xl">
                Fazer Pedido
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default CartFooter;