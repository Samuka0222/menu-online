'use server'

import { db } from "@/app/_lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

interface UpdateRestaurantInfoProps {
  id: string;
  restaurantName: string;
  restaurantContact: string;
  restaurantImgUrl: string;
  deliveryValue: number;
}

export default async function updateRestaurantInfo(data: UpdateRestaurantInfoProps) {
  try {
    await db.admin.update({
      where: {
        id: data.id
      },
      data: {
        restaurantName: data.restaurantName,
        restaurantContact: data.restaurantContact,
        restaurantImgUrl: data.restaurantImgUrl,
        deliveryValue: new Decimal(data.deliveryValue)
      }
    })
    revalidatePath('/admin/settings');
  } catch (err) {
    console.log(err)
  }
}