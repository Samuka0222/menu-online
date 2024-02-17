import { Button } from "@/app/_components/ui/button";
import NavBar from "./_components/nav-bar";
import { Phone } from "lucide-react";
import SocialLinks from "@/app/_components/socials-links";
import Services from "./_components/services";
import Menu from "./_components/menu";
import Reviews from "./_components/reviews";
import Reservation from "./_components/reservation";
import Footer from "./_components/footer";
import CartButton from "./_components/cart-button";
import makeCall from "../_actions/make-call";
import Banner from "./_components/banner";

const HomePage = () => {
  return <>
    <main className="flex flex-col relative">
      <NavBar />
      <section className="mt-12 flex flex-col justify-center items-center px-5">
        <Banner />
        <Services />
        <Menu />
        <Reviews />
        <Reservation />
      </section>
      <CartButton />
      <Footer />
    </main>
  </>;
}

export default HomePage;