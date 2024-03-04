import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { BadgeDollarSignIcon } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";

const RevenueCard = () => {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Receita do mês</h2>
          <BadgeDollarSignIcon size={32} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <span className="text-3xl">
            R$ 45,231.89
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