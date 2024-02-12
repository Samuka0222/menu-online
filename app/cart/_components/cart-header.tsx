import { Button } from "@/app/_components/ui/button";
import { ArrowBigLeftDashIcon } from "lucide-react";
import Link from "next/link";

const CartHeader = () => {
  return (
    <header className="flex justify-between px-5 py-6">
      <div className="flex gap-4">
        <div className="w-12 h-12 p-4 rounded-full shadow-default flex justify-center items-center font-bold">
          1
        </div>
        <div className="w-12 h-12 p-4 rounded-full shadow-default flex justify-center items-center font-bold">
          2
        </div>
        <div className="w-12 h-12 p-4 rounded-full shadow-default flex justify-center items-center font-bold">
          3
        </div>
      </div>

      <Button variant='outline' size='lg' className="text-xl" asChild>
        <Link href='/'>
          <ArrowBigLeftDashIcon className="mr-1" />
          Voltar
        </Link>
      </Button>
    </header>
  );
}

export default CartHeader;