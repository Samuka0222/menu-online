'use server'

import ICart from "@/app/_lib/interfaces/ICart";
import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"
import { db } from "@/app/_lib/prisma";
import { Address } from "@prisma/client";

interface MakeOrderParams {
  cart: ICart[];
  address: Address;
  date: Date;
  userId: string
}

export default async function makeOrder(params: MakeOrderParams) {
  if (params.cart.length === 0) {
    throw new Error('Carrinho está vazio, não é possível continuar')
  }

  let items = ''

  params.cart.forEach((item) => {
    items += `*${item.quantity}x* ${item.item.name} ........ R$ ${Number(item.item.price).toFixed(2).replace('.', ',')} \n`
  })


  const text = `
    Olá! Gostaria de fazer um *pedido*:
    \n*Itens do pedido:*
    \n${items}
    \n*Endereço de entrega:*
    \n${params.address.street}, ${params.address.number}, ${params.address.neighborhood},\n${params.address.city} - ${params.address.state} / ${params.address.zipCode},\n${params.address.complement}.
  `

  const encode = encodeURI(text);
  const URL = `https://wa.me/${restaurantConfig.contact}?text=${encode}`

  await db.order.create({
    data: {
      userId: params.userId,
      date: params.date,
      address: {...params.address, },
      items: params.cart,
    }
  })

  window.open(URL, '_blank')
}