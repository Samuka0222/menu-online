import Image from "next/image";
import SideMenu from "@/app/_components/side-menu";
import Link from "next/link";

const NavBar = () => {

  return (
    <nav className="pl-2 pr-6 flex w-full justify-between items-center">
      <div>
        <Image
          src="/img/logo.png"
          alt="Logo do Menu Online"
          width={160}
          height={160}
        />
      </div>
      <div className="hidden md:flex md:w-full md:justify-around">
        <Link href='#services' className="font-bold text-lg">
          Serviços
        </Link>
        <Link href='#menu' className="font-bold text-lg">
          Cardápio
        </Link>
        <Link href='#reviews' className="font-bold text-lg">
          Depoimentos
        </Link>
        <Link href='#reservation' className="font-bold text-lg">
          Reserva
        </Link>
      </div>
      <div>
        <SideMenu />
      </div>
    </nav>
  );
}

export default NavBar;
