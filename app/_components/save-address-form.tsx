'use client'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import ZipCodeForm from "./zip-code-form";
import CompleteAddressForm from "./complete-address-form";
import { useState } from "react";

interface SaveAddressForm {
  trigger: React.ReactNode
}

const SaveAddressForm = ({ trigger }: SaveAddressForm) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)

  const handleClose = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={handleOpen} asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Salvar um novo endereço.</DialogTitle>
        <ZipCodeForm />
        <CompleteAddressForm closeDialog={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default SaveAddressForm;