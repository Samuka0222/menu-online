'use client'

import makeCall from "@/app/_actions/make-call";
import SocialLinks from "@/app/_components/socials-links";
import { Button } from "@/app/_components/ui/button";
import formatContactNumber from "@/app/_helpers/format-contact-number";
import { Phone } from "lucide-react";
import restaurantConfig from "@/app/_lib/mocks/restaurant-config.json"
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  const handleTelephoneClick = () => {
    makeCall();
  }

  return (
    <section className="w-full flex flex-col justify-center items-center lg:flex-row">
      <div className="w-full flex flex-col justify-center items-center lg:w-2/4 lg:items-start">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-black lg:text-left lg:text-7xl lg:font-medium w-[90%]">
          Escolha a sua comida <strong className="text-primary">favorita</strong>.
        </h1>
        <p className="text-2xl text-center font-medium mt-5 lg:text-left">
          Aproveite nosso cardápio! Escolha o que desejar e receber em sua casa de forma rápida e segura.
        </p>

        <div className="flex flex-col w-full lg:gap-4 justify-center items-center lg:flex-row">
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
        </div>

        <div className="w-full">
          <SocialLinks />
        </div>
      </div>

      <div className="hidden relative lg:flex w-2/4">
        <div className="w-full flex justify-center">
          <Image
            src='/img/burguer.png'
            width={600}
            height={600}
            alt="Imagem de um hamburguer"
          />
        </div>
        <div className="bg-primary w-[520px] absolute h-[520px] rounded-full -z-10 right-[80px] -top-10"></div>
      </div>
    </section>
  );
}

export default Banner;