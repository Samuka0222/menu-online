'use client'

import { createContext, useState } from "react";

interface IAddress {
  zipCode: string;
  street: string,
  neighborhood: string,
  number: string,
  city: string,
  state: string,
  complement?: string,
}

interface AddressContextProps {
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>
}

export const AddressContext = createContext<AddressContextProps | undefined>(undefined);
AddressContext.displayName = "Address Context";

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<IAddress>({
    zipCode: "",
    street: "",
    neighborhood: "",
    number: "",
    city: "",
    state: "",
    complement: "",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
