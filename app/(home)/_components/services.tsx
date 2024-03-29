import SectionTitle from "@/app/_components/section-title";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="mt-16 px-10">
      <SectionTitle
        title="Serviços"
        description="Como são nossos serviços?"
      />

      <div className="flex flex-col justify-center items-center gap-12 mt-10 lg:flex-row">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Image
            src='/img/icone-pedido.svg'
            alt="ilustração"
            width={130}
            height={40}
          />
          <h3 className="text-3xl font-bold text-black">Fácil de pedir</h3>
          <p className="text-xl font-medium">Você só precisa de alguns passos para pedir sua comida.</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-4 mt-[35px]">
          <Image
            src='/img/icone-delivery.svg'
            alt="ilustração"
            width={210}
            height={80}
          />
          <h3 className="text-3xl font-bold text-black">Entrega rápida</h3>
          <p className="text-xl font-medium">Nossa entrega é sempre pontual, rápida e segura.</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-4 mt-[35px]">
          <Image
            src='/img/icone-qualidade.svg'
            alt="ilustração"
            width={170}
            height={50}
          />
          <h3 className="text-3xl font-bold text-black">Fácil de pedir</h3>
          <p className="text-xl font-medium">Não só a rapidez na entrega, a qualidade também é nosso forte.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;