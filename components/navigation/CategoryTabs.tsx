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
    <div className="w-1/4 p-4">
      {categories.map((category) => (
        <motion.button
          key={null}
          className={`block text-left w-full py-2 px-4 rounded ${
            category === selectedCategory
              ? "bg-blue-500 text-white"
              : "text-black"
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
