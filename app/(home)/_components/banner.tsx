'use client'

import makeCall from "@/app/_actions/make-call";
import SocialLinks from "@/app/_components/socials-links";
import { Button } from "@/app/_components/ui/button";
import formatContactNumber from "@/app/_helpers/format-contact-number";
import { Phone } from "lucide-react";
import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"
import Link from "next/link";

const Banner = () => {
  const handleTelephoneClick = () => {
    makeCall();
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center text-black">
        Escolha a sua comida <strong className="text-primary">Favorita</strong>.
      </h1>

      <p className="text-2xl text-center font-medium mt-5">
        Aproveite nosso cardápio! Escolha o que desejar e receber em sua casa de forma rápida e segura.
      </p>

      <div className="mt-5">
        <Button size='lg' className="text-xl h-12 rounded-full shadow-default" asChild>
          <Link href='#menu'>
            Ver cardápio
          </Link>
        </Button>
      </div>
      <div className="mt-5">
        <Button size='lg' variant='outline' className="text-xl h-12 border-none rounded-full shadow-default" onClick={handleTelephoneClick}>
          {formatContactNumber(restaurantConfig.contact)}
          <span className="ml-2 p-2 bg-primary rounded-xl">
            <Phone fill="" stroke="none" />
          </span>
        </Button>
      </div>

      <div className="w-full">
        <SocialLinks />
      </div>
    </section>
  );
}

export default Banner;