import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { Settings, UserRoundSearchIcon } from "lucide-react";

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
        <div>
          <Button variant='outline' size='icon' className="border-none shadow-default h-10 w-12 relative" asChild>
            <Link href='/admin/settings'>
              <Settings size={30} />
            </Link>
          </Button>
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
      </nav>
    </header>
  );
}

export default AdminHeader;