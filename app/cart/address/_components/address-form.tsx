'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useContext, useEffect } from "react";
import { AddressContext } from "../../_providers/address-provider";
import { useRouter } from "next/navigation";



const formSchema = z.object({
  street: z.string({
    required_error: 'Rua deve ser informada.'
  }).min(3, {
    message: "O endereço deve conter no mínimo 3 caracteres",
  }),
  neighborhood: z.string({
    required_error: 'O bairro deve ser informado.'
  }).min(3, {
    message: "O endereço deve conter no mínimo 3 caracteres",
  }),
  number: z.string({
    required_error: "O número deve ser informado.",
  }).regex(/^\d+$/, {
    message: 'O campo deve ser preenchido apenas com números.'
  }),
  city: z.string({
    required_error: "A cidade deve ser informada.",
  }),
  state: z.string({
    required_error: "O estado deve ser informado.",
  }).length(2, {
    message: "Preencha apenas o código UF (exemplo: RJ).",
  }),
  complement: z.string(),
})

const AddressForm = () => {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error('Context not found!')
  }

  const { address, setAddress } = context;

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street: address.street,
      neighborhood: address.neighborhood,
      number: address.number,
      city:  address.city,
      state: address.state,
      complement: '',
    }
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setAddress({
      zipCode: address.zipCode,
      street: values.street,
      neighborhood: values.neighborhood,
      number: values.number,
      city: values.city,
      state: values.state,
      complement: values.complement,
    })

    router.push('order-resume')
  }

  useEffect(() => {
    form.setValue('street', address.street);
    form.setValue('neighborhood', address.neighborhood);
    form.setValue('number', address.number);
    form.setValue('city', address.city);
    form.setValue('state', address.state);
  }, [address, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 items-center w-full">
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Rua:</FormLabel>
              <FormControl>
                <Input placeholder="Insira sua rua." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="neighborhood"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Bairro:</FormLabel>
              <FormControl>
                <Input placeholder="Insira seu bairro." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Número:</FormLabel>
              <FormControl>
                <Input placeholder="Insira o número." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cidade:</FormLabel>
              <FormControl>
                <Input placeholder="Insira sua cidade." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>UF:</FormLabel>
              <FormControl>
                <Input placeholder="Insira o seu estado." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="complement"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Complemento:</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Apt 101" type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
}

export default AddressForm;