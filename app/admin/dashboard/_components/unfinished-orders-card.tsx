import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { BadgeDollarSignIcon, Clock } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";

const UnfinishedOrdersCard = () => {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Pedidos em Andamento</h2>
          <Clock size={32} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <span className="text-3xl">
            12
          </span>
          <span className="mt-1 text-gray-500">
            15 concluídos
          </span>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default UnfinishedOrdersCard;