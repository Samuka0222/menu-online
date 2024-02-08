import { Button } from "@/app/_components/ui/button";
import NavBar from "./_components/nav-bar";
import { Phone } from "lucide-react";
import SocialLinks from "@/app/_components/socials-links";
import Services from "./_components/services";
import Menu from "./_components/menu";
import Reviews from "./_components/reviews";
import Booking from "./_components/booking";
import Footer from "./_components/footer";

const HomePage = () => {
  return <>
    <main className="flex flex-col">
      <NavBar />

      <section className="mt-12 flex flex-col justify-center items-center px-5">
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
          <Button size='lg' variant='outline' className="text-xl h-12 border-none rounded-full shadow-default">
            (51) 9 9999-9999
            <span className="ml-2 p-2 bg-primary rounded-xl">
              <Phone fill="" stroke="none" />
            </span>
          </Button>
        </div>

        <div className="w-full">
          <SocialLinks />
        </div>

        <Services />
        <Menu />
        <Reviews />
        <Booking />
        <Footer  />
      </section>
    </main>
  </>;
}

export default HomePage;