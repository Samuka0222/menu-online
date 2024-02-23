'use client'

import makeReservation from "@/app/_actions/make-reservation";
import SectionTitle from "@/app/_components/section-title";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import Image from "next/image";

const Reservation = () => {
  const handleClick = () => {
    makeReservation();
  }

  return (
    <section id="reservation" className="mt-16 bg-[#FFF2CC] rounded-[50px] lg:w-4/5">
      <Card className="border-none px-5 py-9">
        <CardContent className="w-full flex items-center justify-center">
          <div className="lg:w-2/4">
            <SectionTitle
              title="Reserva"
              description="Quer reservar um horário?"
              align="start"
            />
            <div className="flex flex-col justify-center items-center lg:items-start">
              <p className="font-medium text-gray-500 text-xl">Mande uma mensagem clicando no botão abaixo.</p>
              <p className="font-medium text-gray-500 text-xl">Reserve sua data e horário de forma simples e rápida.</p>
              <div className="w-full flex justify-center">
                <Button className="text-xl mt-7" size='lg' onClick={handleClick}>
                  Fazer reserva
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-2/4 lg:justify-center relative">
            <Image
              src='/img/icone-reserva.svg'
              width={400}
              height={400}
              alt="Ilustração de reserva"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Reservation;