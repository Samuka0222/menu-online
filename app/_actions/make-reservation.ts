import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"

export default function makeReservation() {
  const text = 'Olá, Gostaria de fazer uma *reserva*.'
  
  const encode = encodeURI(text);
  const URL = `https://wa.me/${restaurantConfig.contact}?text=${encode}`

  window.open(URL, '_blank')
}