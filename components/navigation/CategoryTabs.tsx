import { useState, useEffect } from "react";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size and update state accordingly
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640);
  };

  // Add event listener on component mount to track screen size changes
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[25%] overflow-x-auto no-scrollbar">
      <ul
        className={`menu ${
          isSmallScreen ? "" : "menu-horizontal"
        } bg-base-200 rounded-box flex flex-row sm:flex-col`}
      >
        {categories.map((category) => (
          <li key={category} className="mb-2 sm:mb-0">
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
