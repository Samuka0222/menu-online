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
import { Admin } from "@prisma/client";
import updateRestaurantInfo from "../../_actions/update-restaurant-info";

interface RestaurantSettingsProps {
  settings: Admin
}

const formSchema = z.object({
  name:
    z.string({
      required_error: 'O nome do restaurante deve ser informado.'
    })
      .min(3, {
        message: "O nome deve possuir pelo menos 3 letras",
      }),
  contactDdd: z.string({
    required_error: 'O DDD do contato deve ser informado.'
  })
    .max(2, {
      message: "O DDD deve conter no máximo 2 dígitos",
    }),
  contactNumber:
    z.string({
      required_error: 'O telefone de contato deve ser informado.'
    }),
  deliveryPrice:
    z.coerce.number({
      required_error: 'O preço de entrega deve ser informado.',
      invalid_type_error: 'O preço deve ser informado em números'
    })
})

const RestaurantSettingsForm = ({ settings }: RestaurantSettingsProps) => {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const numberDdd = settings.restaurantContact.slice(0, 2)
  const numberPhone = settings.restaurantContact.slice(2)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: settings.restaurantName,
      contactDdd: numberDdd,
      contactNumber: numberPhone,
      deliveryPrice: Number(settings.deliveryValue),
    }
  })

  const uploadNewImg = (imageUrl: string) => {
    setImgUrl(imageUrl);
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await updateRestaurantInfo({
        id: settings.id,
        restaurantName: values.name,
        restaurantContact: `${values.contactDdd}${values.contactNumber}`,
        deliveryValue: values.deliveryPrice,
        restaurantImgUrl: imgUrl
      });
      setIsLoading(false);
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
                <Input
                  placeholder="Insira o nome do restaurante."
                  type="string"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex gap-3">
          <FormField
            control={form.control}
            name="contactDdd"
            render={({ field }) => (
              <FormItem className="w-[30%]">
                <FormLabel>DDD:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="DDD (EX: 51)"
                    type="string"
                    maxLength={2}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telefone:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira o telefone (EX: 99999-9999)"
                    type="string"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Valor da entrega:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Insira o valor da entrega."
                  type="number"
                  {...field}
                />
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