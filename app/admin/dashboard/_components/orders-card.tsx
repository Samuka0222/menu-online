'use server'

import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ShoppingBagIcon } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";
import { db } from "@/app/_lib/prisma";


const OrderCard = async () => {
  const totalOrders = await db.order.findMany();

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Pedidos no mês</h2>
          <ShoppingBagIcon size={28} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <span className="text-3xl">
            {totalOrders.length}
          </span>
          <span className="mt-1 text-gray-500">
            +10% desde o mês passado.
          </span>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default OrderCard;