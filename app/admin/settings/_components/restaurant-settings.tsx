'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import ImageForm from "@/app/admin/_components/image-form";
import { useRouter } from "next/navigation";
import PatternedInput from "@/app/_components/patterned-input";


// interface RestaurantInformationForm {
//   restaurant:
// }

const formSchema = z.object({
  name: z.string({
    required_error: 'O nome do restaurante deve ser informado.'
  }).min(3, {
    message: "O nome deve possuir pelo menos 3 letras",
  }),
  contact: z.string({
    required_error: 'O telefone de contato deve ser informado.'
  }).length(11, { message: 'Você deve conter "DDD" e os 9 dígitos corretamente. ' }).regex(/^[\d]+$/, { message: 'Telefone deve conter apenas números.' }),
  deliveryPrice: z.number({
    required_error: 'O preço de entrega deve ser informado.'
  })
})

const RestaurantSettingsForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      deliveryPrice: 0,
    }
  })

  const uploadNewImg = (imageUrl: string) => {
    setImgUrl(imageUrl);
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setIsLoading(false);
      router.replace('/admin/products');
    } catch (err) {
      toast.error('Erro ao atualizar produto.');
      console.log(err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 items-center justify-center w-full md:w-[70%]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome do Restaurante:</FormLabel>
              <FormControl>
                <Input placeholder="Insira o nome do restaurante." type="string" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Telefone:</FormLabel>
              <FormControl>
                <PatternedInput format="(##) #####-####" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Valor da entrega:</FormLabel>
              <FormControl>
                <PatternedInput format="R$ #,##" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ImageForm
          imageUrl={imgUrl}
          updateImage={uploadNewImg}
          description={''}
        />
        <Button type="submit" className="w-full text-lg">
          {
            isLoading
              ? <>
                <Loader className="animate-spin mr-1" />
                Enviar
              </>
              : 'Enviar'
          }
        </Button>
      </form>
    </Form>
  );
}

export default RestaurantSettingsForm;