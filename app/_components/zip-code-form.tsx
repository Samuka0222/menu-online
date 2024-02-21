'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";
import getZipCode from "../cart/_actions/get-zip-code";
import useAddressContext from "@/app/_lib/hooks/useAddressContext";

const formSchema = z.object({
  zipCode: z.string({
    required_error: 'CEP deve ser informado.'
  }).length(8, {
    message: "O CEP deve conter 8 dígitos e somente números",
  }),
})

const ZipCodeForm = () => {
  const context = useAddressContext();

  if (!context) {
    throw new Error("No context provided for ZipCodeForm")
  }

  const { address, setAddress } = context;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: address.zipCode,
    }
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await getZipCode(values.zipCode)
    setAddress(res)
  }

  return (
    <>
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
    </>
  );
}

export default ZipCodeForm;