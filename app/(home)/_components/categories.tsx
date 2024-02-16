'use client'

import { Button } from "@/app/_components/ui/button";
import { SelectedCategoryContext } from "@/app/_providers/selected-category-provider";
import { Beef, Beer, Drumstick, HelpCircle, IceCream, Pizza, Sandwich } from "lucide-react";
import { useContext } from "react";

interface CategoriesProps {
  categories: { category: string }[]
}

const Categories = ({ categories }: CategoriesProps) => {
  const context = useContext(SelectedCategoryContext);
  if (!context) {
    throw new Error('Context not found!')
  }
  const { selectedCategory, setSelectedCategory } = context;
  const handleClick = (category: string) => {
    setSelectedCategory(category)
  }

  function addIcon(category: string) {
    switch (category) {
      case "churrasco":
        return <Drumstick />;
      case "burguers":
        return <Sandwich />;
      case "sobremesas":
        return <IceCream />;
      case "bebidas":
        return <Beer />;
      case "pizzas":
        return <Pizza />;
      case "steaks":
        return <Beef />;
      default:
        return <HelpCircle />;
    }
  }

  return (
    <nav className="flex gap-2 w-full overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden">
      {
        categories.map(category => (
          <Button
            variant={selectedCategory === category.category ? 'default' : 'outline'}
            key={`${category.category}`}
            className="capitalize text-black font-semibold flex gap-1 text-lg"
            onClick={() => handleClick(category.category)}
          >
            {addIcon(category.category)}
            {category.category}
          </Button>
        ))
      }
    </nav>
  );
}

export default Categories;