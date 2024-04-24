import { CategoryData } from "@/app/bolt/data/category-data";
import Link from "next/link";
import styles from "./voucher-page.module.scss";
import {
  apparels,
  ecommerce,
  foodAndBeverages,
  healthAndWellness,
  movieAndMusic,
} from ".";
import Image from "next/image";
interface CategoryMenuProps {
  currentPageCategory: string;
}

// Create a Map with category names as keys and image objects as values
const categoryImagesMap = new Map<string, any>();
categoryImagesMap.set("e-commerce", ecommerce);
categoryImagesMap.set("food-and-beverages", foodAndBeverages);
categoryImagesMap.set("health-and-wellness", healthAndWellness);
categoryImagesMap.set("movies-and-music", movieAndMusic);
categoryImagesMap.set("apparels", apparels);

const CategoryMenu: React.FC<CategoryMenuProps> = ({ currentPageCategory }) => {
  return (
    <div className={` ${styles.category_menu}`}>
      {Object.values(CategoryData).map((category) => (
        <Link
          key={category.name}
          href={`/bolt/category/${category.name}#category-menu`}
          className={` ${styles.category_button}`}
        >
          <button
            className={
              currentPageCategory === category.name.toLocaleLowerCase()
                ? `${styles.active}`
                : ""
            }
          >
            <Image
              src={categoryImagesMap.get(category.name)}
              alt={category.name}
            />

            {category.heading}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
