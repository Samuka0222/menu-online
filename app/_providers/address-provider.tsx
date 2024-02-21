'use client'

import { createContext, useState } from "react";
import IAddress from "@/app/_lib/interfaces/IAddress";

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
    favorite: false
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
