'use client'

import { Button } from "@/app/_components/ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Bike, Loader } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import makeOrder from "../_actions/make-order";
import { useSession } from "next-auth/react";
import useAddressContext from "@/app/_lib/hooks/useAddressContext";
import { toast } from "sonner";
import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"
import formatZipCode from "@/app/_helpers/format-zip-code";
import { useState } from "react";
import generateOrderMessage from "../_helpers/generate-order-message";

const CartFooter = () => {
  const { data } = useSession();
  const cartContext = useCartContext();
  const addressContext = useAddressContext();

  if (!cartContext || !addressContext) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { cart, cartValue, resetCart } = cartContext;
  const { address } = addressContext

  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const handleOrderClick = async () => {
    try {
      if (cart.length === 0) {
        toast.error('Carrinho está vazio, não é possível fazer o pedido')
      }
      setIsLoading(true)
      await makeOrder({
        address: {
          zipCode: address.zipCode,
          street: address.street,
          neighborhood: address.neighborhood,
          number: address.number,
          city: address.city,
          state: address.state,
          complement: address.complement ? address.complement : '',
          userId: (data?.user as any).id,
          orderId: null,
          id: address.id!,
          favorite: !address.favorite
        },
        cart: cart,
        date: new Date(),
        userId: (data?.user as any).id
      })

      const text = generateOrderMessage(cart, address);
      const encode = encodeURI(text);
      const URL = `https://wa.me/${restaurantConfig.contact}?text=${encode}`;
      resetCart();
      setIsLoading(false);
      window.open(URL, '_blank')
      router.replace('/')
    } catch (error) {
      toast.error('Não foi possível fazer o pedido')
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-end border-t-2 px-5 pb-6">
      <span className="text-text text-xl mt-2 font-medium">Subtotal: R$ {cartValue.toFixed(2).replace('.', ',')} </span>
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
              {
                isLoading
                  ? <>
                    <Loader className="animate-spin mr-2" />
                    Fazer Pedido
                  </>
                  : <>
                    Fazer Pedido
                  </>
              }
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default CartFooter;