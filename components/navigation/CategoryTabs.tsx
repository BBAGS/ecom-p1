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
    <div className="overflow-x-auto no-scrollbar">
      <ul className="menu bg-base-200 rounded-box flex flex-row sm:flex-col">
        {categories.map((category) => (
          <li key={category}>
            <a
              className={`${
                category === selectedCategory
                  ? "bg-light-primary dark:bg-dark-primary text-white"
                  : "text-black dark:text-white"
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
