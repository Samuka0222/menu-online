'use client'

import { Button } from "@/app/_components/ui/button";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { Bike } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import makeOrder from "../_actions/make-order";
import { useSession } from "next-auth/react";
import useAddressContext from "@/app/_lib/hooks/useAddressContext";
import { toast } from "sonner";
import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"
import formatZipCode from "@/app/_helpers/format-zip-code";

const CartFooter = () => {
  const { data } = useSession();
  const cartContext = useCartContext();
  const addressContext = useAddressContext();

  if (!cartContext || !addressContext) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { cart, cartValue } = cartContext;
  const { address } = addressContext

  const pathname = usePathname();
  const handleOrderClick = async () => {
    try {
      if (cart.length === 0) {
        toast.error('Carrinho está vazio, não é possível fazer o pedido')
      }
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
          favorite: address.favorite
        },
        cart: cart,
        date: new Date(),
        userId: (data?.user as any).id
      })

      let itemsFromCart = ''

      cart.forEach((item) => {
        itemsFromCart += `*${item.quantity}x* ${item.item.name} ........ R$ ${Number(item.item.price).toFixed(2).replace('.', ',')} \n`
      })


      const text = `
      Olá! Gostaria de fazer um *pedido*:
      \n*Itens do pedido:*
      \n${itemsFromCart}
      \n*Endereço de entrega:*
      \n${address.street}, ${address.number}, ${address.neighborhood},\n${address.city} - ${address.state} / ${formatZipCode(address.zipCode)},\n${address.complement}.
    `

      const encode = encodeURI(text);
      const URL = `https://wa.me/${restaurantConfig.contact}?text=${encode}`

      window.open(URL, '_blank')

    } catch (error) {
      alert('Não foi possível fazer o pedido')
      console.error(error)
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