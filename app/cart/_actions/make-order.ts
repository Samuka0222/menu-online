'use server'

import ICart from "@/app/_lib/interfaces/ICart";
import { db } from "@/app/_lib/prisma";
import { Address } from "@prisma/client";

interface MakeOrderParams {
  cart: ICart[];
  address: Address;
  date: Date;
  userId: string
}

export default async function makeOrder(params: MakeOrderParams) {
  const order = await db.order.create({
    data: {
      date: new Date(),
      user: {
        connect: {
          id: params.userId
        }
      },
      address: {
        connect: {
          id: params.address.id
        }
      },
    }
  })

  for (const key of params.cart) {
    await db.orderItems.create({
      data: {
        productId: key.item.id,
        quantity: key.quantity,
        orderId: order.id
      }
    })
  }
}