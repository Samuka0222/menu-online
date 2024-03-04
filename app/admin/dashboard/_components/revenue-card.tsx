'use server'

import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { BadgeDollarSignIcon } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";
import { db } from "@/app/_lib/prisma";

const RevenueCard = async () => {
  const totalOrders = await db.orderItems.findMany({
    select: {
      product: true,
      quantity: true
    }
  })

  const totalRevenue = totalOrders.reduce((total, { product, quantity }) => {
    return total + Number(product.price) * quantity
  }, 0)

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Receita do mês</h2>
          <BadgeDollarSignIcon size={32} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <span className="text-3xl">
            R$ {String(totalRevenue).replace('.',',')}
          </span>
          <span className="mt-1 text-gray-500">
            +20% desde o mês passado.
          </span>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default RevenueCard;