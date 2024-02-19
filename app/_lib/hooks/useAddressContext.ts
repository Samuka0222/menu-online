import getAddress from "@/app/_actions/get-address";
import { AddressContext } from "@/app/_providers/address-provider";
import { useContext } from "react";

export default function useAddressContext() {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error('Context not found!')
  }

  const { address, setAddress } = context;

  async function getSavedAddress() {
    const savedAddress = await getAddress()

    if (savedAddress !== null) {
      setAddress({
        id: savedAddress.id,
        zipCode: savedAddress.zipCode,
        street: savedAddress.street,
        neighborhood: savedAddress.neighborhood,
        number: savedAddress.number,
        city: savedAddress.city,
        state: savedAddress.state,
        complement: savedAddress.complement ? savedAddress.complement : '',
      })
    } else {
      setAddress({
        zipCode: '',
        street: '',
        neighborhood: '',
        number: '',
        city: '',
        state: '',
        complement: '',
        id: '',
      })
    }
  }

  return {
    address,
    setAddress,
    getSavedAddress
  }
}