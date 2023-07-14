import { useState, useEffect } from "react";
import { Category } from "../sections/Catalase";

type CategoryTabsProps = {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryTabsProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Initialize the state with the initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <ul
        className={`menu ${
          isSmallScreen ? "" : "menu-horizontal"
        } bg-base-200 rounded-box flex flex-row sm:flex-col`}
      >
        {categories.map((category, index) => (
          <li
            key={category.name}
            className={`mb-0 sm:mb-2 ${
              index !== categories.length - 1 ? "mr-2 sm:mr-0" : ""
            }`}
          >
            <a
              className={`${
                category.name === selectedCategory ? "active" : ""
              }`}
              onClick={() => onCategorySelect(category.name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={category.path}
                />
              </svg>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
