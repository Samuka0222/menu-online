import Image from "next/image";
import { Button } from "@/app/_components/ui/button"
import { LogInIcon, MenuIcon, PhoneCallIcon, ShoppingBagIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="pl-2 pr-6 flex justify-between items-center">
      <div>
        <Image
          src="/img/logo.png"
          alt="Logo do Menu Online"
          width={160}
          height={160}
        />
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className="border-none shadow-default" >
              <MenuIcon size={30} />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu On-Line</SheetTitle>
            </SheetHeader>

            <div className="mt-5 flex flex-col gap-4 h-[88%]">
              <Button variant='outline' className="w-full justify-start font-bold">
                <LogInIcon className="mr-2" />
                Fazer Login
              </Button>
              <Button variant='outline' className="w-full justify-start font-bold">
                <PhoneCallIcon className="mr-2" />
                Fazer Reserva
              </Button>
              <Button variant='outline' className="w-full justify-start font-bold" asChild>
                <Link href='/cart'>
                  <ShoppingBagIcon className="mr-2" />
                  Carrinho
                </Link>
              </Button>
            </div>

            <SheetFooter className="flex justify-center items-center">
              <p className="font-bold">Desenvolvido por @samuka0222</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;
