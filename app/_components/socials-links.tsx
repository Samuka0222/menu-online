import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <Button variant='outline' className="h-12 rounded-2xl" asChild>
        <Link href='#'>
          <Image
            src='/img/sociais/instagram.svg'
            alt="botão para acessar o instagram"
            width={24}
            height={24}
          />
        </Link>
      </Button>

      <Button variant='outline' className="h-12 rounded-2xl" asChild>
        <Link href='#'>
          <Image
            src='/img/sociais/facebook-f.svg'
            alt="botão para acessar o instagram"
            width={16}
            height={16}
          />
        </Link>
      </Button>

      <Button variant='outline' className="h-12 rounded-2xl" asChild>
        <Link href='#'>
          <Image
            src='/img/sociais/whatsapp.svg'
            alt="botão para acessar o instagram"
            width={24}
            height={24}
          />
        </Link>
      </Button>

    </div>
  );
}

export default SocialLinks;