import formatZipCode from "@/app/_helpers/format-zip-code"
import IAddress from "@/app/_lib/interfaces/IAddress"
import ICart from "@/app/_lib/interfaces/ICart"

export default function generateOrderMessage(cart: ICart[], address: IAddress) {
  let itemsFromCart = ''

  cart.forEach((item) => {
    itemsFromCart += `*${item.quantity}x* ${item.item.name} ........ R$ ${Number(item.item.price).toFixed(2).replace('.', ',')} \n`
  })

  const text = `
  Olá! Gostaria de fazer um *pedido*: \n*Itens do pedido:* \n${itemsFromCart} \n*Endereço de entrega:* \n${address.street}, ${address.number}, ${address.neighborhood},\n${address.city} - ${address.state} / ${formatZipCode(address.zipCode)},\n${address.complement}.
`

  return text
}