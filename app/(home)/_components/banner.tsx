'use client'

import makeCall from "@/app/_actions/make-call";
import SocialLinks from "@/app/_components/socials-links";
import { Button } from "@/app/_components/ui/button";
import { Phone } from "lucide-react";

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
        <Button size='lg' className="text-xl h-12 rounded-full shadow-default">
          Ver cardápio
        </Button>
      </div>
      <div className="mt-5">
        <Button size='lg' variant='outline' className="text-xl h-12 border-none rounded-full shadow-default" onClick={handleTelephoneClick}>
          {/* TODO: Formatar o número do config para aparecer corretamente aqui. */}
          (51) 9 9999-9999
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