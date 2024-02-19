import NavBar from "./_components/nav-bar";
import Services from "./_components/services";
import Menu from "./_components/menu";
import Reviews from "./_components/reviews";
import Reservation from "./_components/reservation";
import CartButton from "./_components/cart-button";
import Banner from "./_components/banner";
import Footer from "../_components/footer";

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