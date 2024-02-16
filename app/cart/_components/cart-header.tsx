'use client'

import { Button } from "@/app/_components/ui/button";
import { cn } from "@/app/_lib/utils";
import { ArrowBigLeftDashIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const CartHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <header className="flex justify-between px-5 py-6">
      <div className="flex gap-4 ">
        <div className={"w-12 h-12 p-4 bg-primary rounded-full shadow-default flex justify-center items-center font-bold"}>
          1
        </div>
        <div className={cn(
          pathname === '/cart/address' || pathname === '/cart/order-resume' ? 'bg-primary' : '',
          "w-12 h-12 p-4 rounded-full shadow-default flex justify-center items-center font-bold"
        )}>
          2
        </div>
        <div className={cn(
          pathname === '/cart/order-resume' ? 'bg-primary' : '',
          "w-12 h-12 p-4 rounded-full shadow-default flex justify-center items-center font-bold"
        )}>
          3
        </div>
      </div>

      <Button variant='outline' size='lg' className="text-xl" onClick={handleBackClick}>
          <ArrowBigLeftDashIcon className="mr-1" />
          Voltar
      </Button>
    </header>
  );
}

export default CartHeader;