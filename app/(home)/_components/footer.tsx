import SocialLinks from "@/app/_components/socials-links";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FFF2CC] flex flex-col w-full mt-16 pb-6">
      <div className="flex items-center justify-center">
        <Image
          src="/img/logo.png"
          alt="Logo do Menu Online"
          width={160}
          height={160}
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-lg font-medium">Menu On-Line Todos os direitos reservados.</p>
      </div>
      <div className="flex items-center justify-center">
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;