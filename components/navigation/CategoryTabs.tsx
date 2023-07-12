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
    <div className="flex flex-row sm:flex-col overflow-x-auto no-scrollbar">
      {categories.map((category) => (
        <motion.button
          key={null}
          className={`text-center py-2 px-4 rounded-lg m-1 ${
            category === selectedCategory
              ? "bg-light-primary dark:bg-dark-primary text-white"
              : "bg-light-muted dark:bg-dark-muted text-black dark:text-white"
          }`}
          onClick={() => onCategorySelect(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
