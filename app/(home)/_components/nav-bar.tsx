'use client'

import Image from "next/image";
import { Button } from "@/app/_components/ui/button"
import { LogInIcon, MapPinIcon, MenuIcon, PhoneCallIcon, ShoppingBagIcon, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import Link from "next/link";
import CartIndicator from "@/app/_components/cart-indicator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import makeReservation from "@/app/_actions/make-reservation";
import SideMenu from "@/app/_components/side-menu";

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
        <SideMenu />
      </div>
    </nav>
  );
}

export default NavBar;
