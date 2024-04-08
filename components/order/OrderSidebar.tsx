import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";
import { CategoryIcon } from "../ui/CategoryIcon";

async function getCategories() {
  return await prisma.category.findMany();
}

/**
 * Renders the sidebar component for the order page, displaying a list of categories.
 *
 * @returns {Promise<JSX.Element>} The rendered sidebar component.
 */
export const OrderSidebar = async (): Promise<JSX.Element> => {
  const categories: Array<Category> = await getCategories();

  /**
   * @typedef {Object} Category
   * @property {number} id - The id of the category.
   * @property {string} name - The name of the category.
   * @property {string} slug - The slug of the category.
   */

  return (
    <aside className="bg-white md:w-72 md:h-screen">
      <nav className="mt-10">
        {categories.map((category: Category) => (
          <CategoryIcon key={category.id} {...category} />
        ))}
      </nav>
    </aside>
  );
};
