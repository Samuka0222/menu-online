'use client'

import useCartContext from "@/app/_lib/hooks/useCartContext";
import Image from "next/image";
import DeliveryAddress from "./_components/delivery-address";

const OrderResumePage = () => {
  const cartContext = useCartContext();

  if (!cartContext) {
    throw new Error('Context not found!')
  }

  const { cart } = cartContext

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
                    src={product.item.imageUrl}
                    alt={product.item.description}
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

        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-black mt-4 mb-2">Local da Entrega:</h2>
          <DeliveryAddress />
        </div>
      </div>

    </main>
  )
}

export default OrderResumePage;