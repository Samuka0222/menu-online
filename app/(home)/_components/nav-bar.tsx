'use client'

import Image from "next/image";
import { Button } from "@/app/_components/ui/button"
import { LogInIcon, MenuIcon, PhoneCallIcon, ShoppingBagIcon, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import Link from "next/link";
import CartIndicator from "@/app/_components/cart-indicator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import makeReservation from "@/app/_actions/make-reservation";

const NavBar = () => {
  const { data, status } = useSession();

  const handleLoginButton = async () => {
    await signIn()
  }

  const handleLogoutButton = async () => {
    await signOut()
  }

  const handleReservationClick = () => {
    makeReservation();
  }

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
            <Button variant='outline' size='icon' className="border-none shadow-default h-10 w-12 relative">
              <div>
                <CartIndicator />
                <MenuIcon size={30} fill="black" />
              </div>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu On-Line</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-2 mt-4">
              {
                status === 'authenticated'
                  ? <>
                    <div>
                      <Avatar>
                        <AvatarImage src={data.user?.image ?? ''} />
                      </Avatar>
                    </div>
                    <h2 className="font-semibold text-black">{data.user?.name}</h2>
                  </>
                  : <>
                    <div>
                      <UserCircle size={30}/>
                    </div>
                    <h2 className="font-semibold text-black">Olá, usuário!</h2>
                  </>
              }
            </div>
            <div className="mt-5 flex flex-col gap-4 h-[88%]">
              {
                status === 'unauthenticated'
                  ? <>
                    <Button variant='outline' className="w-full justify-start font-bold" onClick={handleLoginButton}>
                      <LogInIcon className="mr-2" />
                      Fazer Login
                    </Button>
                  </>
                  : <>
                    <Button variant='outline' className="w-full justify-start font-bold" onClick={handleLogoutButton}>
                      <LogInIcon className="mr-2" />
                      Fazer Logout
                    </Button>
                  </>
              }
              <Button variant='outline' className="w-full justify-start font-bold" onClick={handleReservationClick}>
                <PhoneCallIcon className="mr-2" />
                Fazer Reserva
              </Button>

              <Button variant='outline' className="w-full justify-start font-bold relative" asChild>
                <Link href='/cart/your-cart'>
                  <CartIndicator />
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
