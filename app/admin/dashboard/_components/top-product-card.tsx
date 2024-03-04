'use server'

import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { BadgeDollarSignIcon, Pizza } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";
import { db } from "@/app/_lib/prisma";
import Image from "next/image";

const TopProductCard = async () => {
  const totalOrderedProducts = await db.orderItems.findMany({
    select: {
      product: true
    }
  })

  const findMostFrequentItem = () => {
    const itemCounts: Record<string, number> = {};

    for (const orderItem of totalOrderedProducts) {
      itemCounts[orderItem.product.id] = (itemCounts[orderItem.product.id] || 0) + 1;
    }
    let mostFrequentItemId: any = null;
    let maxCount = 0;

    for (const itemId in itemCounts) {
      const count = itemCounts[itemId];

      if (count > maxCount) {
        maxCount = count;
        mostFrequentItemId = itemId;
      }
    }
    return totalOrderedProducts.find((orderItem) => orderItem.product.id === mostFrequentItemId);
  }

  const MostOrderedProduct = findMostFrequentItem()?.product;

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Produto mais pedido</h2>
          <Pizza size={32} />
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl">
              {MostOrderedProduct?.name}
            </span>
            <span className="mt-1 text-gray-500">
              +6% desde o mês passado.
            </span>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default TopProductCard;