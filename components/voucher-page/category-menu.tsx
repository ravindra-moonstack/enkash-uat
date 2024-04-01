import { CategoryData } from "@/app/bolt/data/category-data";
import Link from "next/link";
import styles from "./voucher-page.module.scss";

interface CategoryMenuProps {
  currentPageCategory: string;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ currentPageCategory }) => {
  return (
    <div className={` ${styles.category_menu}`}>
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
