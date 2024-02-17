'use client'

import makeReservation from "@/app/_actions/make-reservation";
import SectionTitle from "@/app/_components/section-title";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

const Reservation = () => {
  const handleClick = () => {
    makeReservation();
  }
  
  return (
    <section className="mt-16 bg-[#FFF2CC] rounded-[50px]">
      <Card className="border-none px-5 py-9">
        <CardContent>
          <SectionTitle
            title="Reserva"
            description="Quer reservar um horário?"
            align="start"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-gray-500 text-xl">Mande uma mensagem clicando no botão abaixo.</p>
            <p className="font-medium text-gray-500 text-xl">Reserve sua data e horário de forma simples e rápida.</p>
            <Button className="text-xl mt-7" onClick={handleClick}>
              Fazer reserva
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Reservation;