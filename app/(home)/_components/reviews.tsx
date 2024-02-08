'use client'

import SectionTitle from "@/app/_components/section-title";
import { Button } from "@/app/_components/ui/button";
import { QuoteIcon, StarHalfIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import IReview from "@/app/_lib/interfaces/IReview";
import reviews from "@/app/_lib/mocks/reviews.json"
import { Card, CardContent, } from "@/app/_components/ui/card";
import { useState } from "react";

interface ReviewProps {
  review: IReview
}


const Reviews = () => {
  const [actualReview, setActualReview] = useState(reviews[0]);

  const handleClick = (id: number) => {
    setActualReview(reviews[id]);
  }

  return (
    <section className="mt-16">
      <SectionTitle
        title="Depoimentos"
        description="O que dizem sobrem nós?"
      />
      <Review key={actualReview.id} review={actualReview} />

      <div className="w-full flex gap-5 justify-center items-center mt-5">
        <Button variant='outline' className="text-xl font-bold" onClick={() => handleClick(0)}>1</Button>
        <Button variant='outline' className="text-xl font-bold" onClick={() => handleClick(1)}>2</Button>
        <Button variant='outline' className="text-xl font-bold" onClick={() => handleClick(2)}>3</Button>
      </div>
    </section>
  );
}

export default Reviews;

const Review = ({ review }: ReviewProps) => {
  return (
    <Card className="border-none">
      <CardContent className="flex flex-col py-6 px-0">
        <div className="flex gap-4 items-center justify-start ml-10">
          <div className="flex justify-center items-center">
            <Image
              src={review.imagem}
              alt="depoimento"
              width={100}
              height={100}
              className="rounded-full min-w-[100px] min-h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-black">{review.nome}</h3>
            <h4 className="flex">
              {/* TODO: Fazer a lógica para mostrar as notas corretamente*/}
              <StarIcon fill="#ffbf00" color="#ffbf00" />
              <StarIcon fill="#ffbf00" color="#ffbf00" />
              <StarIcon fill="#ffbf00" color="#ffbf00" />
              <StarIcon fill="#ffbf00" color="#ffbf00" />
              <StarHalfIcon fill="#ffbf00" color="#ffbf00" />
              <p className="font-medium">4.5</p>
            </h4>
          </div>
        </div>
        <div className="flex flex-row max-w-full box-content gap-4 mt-5">
          <div className="h-full">
            <QuoteIcon fill="#ffbf00" strokeWidth={0} size={70} className="rotate-180" />
          </div>
          <p className="w-[90%] font-medium">{review.review}</p>
          <div className="h-full flex self-end">
            <QuoteIcon fill="#ffbf00" strokeWidth={0} size={70} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}