import { Button } from "@/app/_components/ui/button";

interface CategoriesProps {
  categories: { category: string }[]
}

const Categories = async ({ categories }: CategoriesProps) => {

  return (
    <nav className="flex gap-2 w-full overflow-x-auto">
      {
        categories.map(category => (
          <Button key={`${category}`}>{category.category}</Button>
        ))
      }
    </nav>
  );
}

export default Categories;