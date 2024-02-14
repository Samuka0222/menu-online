'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";

const formSchema = z.object({
  zipCode: z.string({
    required_error: 'CEP deve ser informado.'
  }).length(8, {
    message: "O CEP deve conter 8 dígitos",
  }),
  // street: z.string({
  //   required_error: 'Rua deve ser informada.'
  // }).min(3, {
  //   message: "O endereço deve conter no mínimo 3 caracteres",
  // }),
  // number: z.number({
  //   required_error: "O número deve ser informado.",
  //   invalid_type_error: "O número deve ser preenchido somente com números.",
  // }),
  // city: z.string({
  //   required_error: "A cidade deve ser informada.",
  // }),
  // state: z.string({
  //   required_error: "O estado deve ser informado.",
  // }),
  // complement: z.string(),
})

const ZipCodeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: "",
      // street: "",
      // number: 0,
      // city: "",
      // state: "",
      // complement: "",
    }
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4 items-end w-full">
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>CEP:</FormLabel>
              <FormControl>
                <Input placeholder="Insira seu CEP" type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
            <SearchIcon />
        </Button>
      </form>
    </Form>
  );
}

export default ZipCodeForm;