import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"

export default function makeCall() {
  const URL = `tel:${restaurantConfig.contact}`

  window.open(URL, '_blank')
}