import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { UserRoundSearchIcon } from "lucide-react";
import SideMenu from "@/app/_components/side-menu";
import HomeButton from "@/app/_components/home-button";

const AdminHeader = () => {
  return (
    <header className="w-full flex flex-col py-6 px-5">
      <div className="flex justify-between items-center">
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
        <div className="flex gap-3">
          <HomeButton />
          <SideMenu />
        </div>
      </div>
      <nav className="flex gap-2 justify-center items-center w-full">
        <Button variant='link' className="text-black text-base">
          <Link href='/admin/dashboard'>
            Dashboard
          </Link>
        </Button>
        <Button variant='link' className="text-black text-base">
          <Link href='/admin/orders'>
            Pedidos
          </Link>
        </Button>
        <Button variant='link' className="text-black text-base">
          <Link href='/admin/products'>
            Produtos
          </Link>
        </Button>
        <Button variant='link' className="text-black text-base">
          <Link href='/admin/settings'>
            Restaurante
          </Link>
        </Button>
      </nav>
    </header>
  );
}

export default AdminHeader;