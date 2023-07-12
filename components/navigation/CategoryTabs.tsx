import { useState } from "react";
import { motion } from "framer-motion";

type CategoryTabsProps = {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryTabsProps) {
  return (
    <ul className="menu bg-base-200 rounded-box flex flex-row sm:flex-col overflow-x-auto no-scrollbar">
      {categories.map((category) => (
        <li key={category}>
          <motion.a
            className={`${
              category === selectedCategory
                ? "bg-light-primary dark:bg-dark-primary text-white"
                : "text-black dark:text-white"
            }`}
            onClick={() => onCategorySelect(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
