import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import Link from "next/link";
import { MapPinIcon, PhoneCallIcon, Settings, ShoppingBagIcon, UserCog2, UserRoundSearchIcon } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="w-full flex justify-between items-center py-6 px-5">
      <div className="flex items-center justify-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="nada" />
          <AvatarFallback>
            <UserRoundSearchIcon />
          </AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <h1 className="text-lg font-bold">Menu On-Line</h1>
        </div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className="border-none shadow-default h-10 w-12 relative">
              <div>
                <Settings size={30} />
              </div>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Opções</SheetTitle>
            </SheetHeader>
            <div className="mt-5 flex flex-col gap-4 h-[88%]">
              <Button variant='outline' className="w-full justify-start font-bold">
                <PhoneCallIcon className="mr-2" />
                Fazer Reserva
              </Button>

              <Button variant='outline' className="w-full justify-start font-bold relative" asChild>
                <Link href='/address'>
                  <MapPinIcon className="mr-2" />
                  Endereço
                </Link>
              </Button>

              <Button variant='outline' className="w-full justify-start font-bold relative" asChild>
                <Link href='/cart/your-cart'>
                  <ShoppingBagIcon className="mr-2" />
                  Carrinho
                </Link>
              </Button>

              <Button variant='outline' className="w-full justify-start font-bold relative" asChild>
                <Link href='/admin/dashboard'>
                  <UserCog2 className="mr-2" />
                  Administração
                </Link>
              </Button>
            </div>

            <SheetFooter className="flex justify-center items-center">
              <p className="font-bold">Desenvolvido por @samuka0222</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default AdminHeader;