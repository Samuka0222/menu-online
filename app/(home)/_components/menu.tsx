import SectionTitle from "@/app/_components/section-title";
import getProducts from "@/app/_actions/getProducts";
import Categories from "./categories";
import MenuItems from "./menu-items";

const Menu = async () => {
  const { categories, menuProducts } = await getProducts();

  return (
    <section className="mt-16 w-full">
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