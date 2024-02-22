import SectionTitle from "@/app/_components/section-title";
import getProducts from "@/app/_actions/get-products";
import Categories from "./categories";
import MenuItems from "./menu-items";

const Menu = async () => {
  const { categories, menuProducts } = await getProducts();

  return (
    <section id="menu" className="mt-16 w-full">
      <SectionTitle
        title="Cardápio"
        description="Conheça o nosso cardápio:"
      />
      <div>
        <Categories categories={categories}/>
      </div>

      <div>
        <MenuItems products={menuProducts} />
      </div>
    </section>
  );
}

export default Menu;