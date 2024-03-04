import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { BadgeDollarSignIcon } from "lucide-react";
import { Suspense } from "react";
import CardSkeleton from "../../_components/skeleton/card-skeleton";
import Image from "next/image";

const TopProductCard = () => {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-medium">Produto mais pedido</h2>
          <BadgeDollarSignIcon size={32} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-3xl">
              Hamburgão gourmet
            </span>
            <span className="mt-1 text-gray-500">
              +6% desde o mês passado.
            </span>
          </div>
          <div>
            {/* <Image>

            </Image> */}
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default TopProductCard;