'use client'

import CartItem from "@/app/_components/cart-item";
import useCartContext from "@/app/_lib/hooks/useCartContext";
import { AddressContext } from "@/app/cart/_providers/address-provider";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

const OrderResumePage = () => {
  const cartContext = useCartContext();
  const addressContext = useContext(AddressContext);

  if (!cartContext || !addressContext) {
    throw new Error('Context not found!')
  }

  const { cart } = cartContext
  const { address } = addressContext

  const formatedZipCode = `
    ${address.zipCode.slice(0, 5)}-${address.zipCode.slice(5)}
  `

  return (
    // TODO: Verificar layout quando tem muitos itens no carrinho.
    <main className="px-5 w-full overflow-hidden">
      <h1 className="text-2xl font-medium text-black mb-4">Resumo do pedido:</h1>
      <div>
        <h2 className="text-xl font-bold text-black mb-2">Itens do pedido:</h2>
        {
          cart.map((product) => (
            <div className="flex justify-between items-center border-b border-black" key={product.item.id}>
              <div className="flex py-2 items-center">
                <div>
                  <Image
                    src='https://utfs.io/f/e7f87c77-e476-489e-add7-7087d11096dd-jeu9k0.63841de36d8e5edfafa13023fc303285.jpg'
                    alt={product.item.name}
                    width={70}
                    height={70}
                    className="rounded-xl"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="font-semibold text-black text-xl w-[200px] text-ellipsis overflow-hidden text-nowrap">{product.item.name}</h3>
                  <h2 className="font-bold text-primary text-2xl">R$ {Number(product.item.price).toFixed(2).replace('.', ',')}</h2>
                </div>
              </div>
              <div className="flex justify-center items-end gap-1 px-2">
                <span className="text-md font-bold">X</span>
                <span className="flex justify-center items-center text-2xl font-bold">{product.quantity}</span>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className="text-xl font-bold text-black mt-4 mb-2">Local da Entrega:</h2>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-[#FFF2CC] flex justify-center items-center rounded-xl">
          <MapPinned size={35} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium capitalize text-black">{address.street}, {address.number}, {address.neighborhood}</span>
          <span className="text-lg font-medium capitalize text-black">{address.city} - {address.state} / {formatedZipCode}</span>
          {address.complement !== '' ? <span className="text-lg font-medium capitalize text-black">{address.complement} </span> : ''}
        </div>
      </div>
    </main>
  )
}

export default OrderResumePage;