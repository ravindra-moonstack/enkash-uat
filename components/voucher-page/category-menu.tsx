import { CategoryData } from "@/app/bolt/data/category-data";
import Link from "next/link";

interface CategoryMenuProps {
  currentPageCategory: string;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ currentPageCategory }) => {
  return (
    <div className="d-flex justify-content-around">
      {Object.values(CategoryData).map((category) => (
        <Link
          key={category.name}
          href={`/bolt/category/${category.name.toLocaleLowerCase()}`}
        >
          <button
            className={currentPageCategory === category.name ? "active" : ""}
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
