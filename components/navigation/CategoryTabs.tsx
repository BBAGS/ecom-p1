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
            key={category}
            className={`mb-0 sm:mb-2 ${
              index !== categories.length - 1 ? "mr-2 sm:mr-0" : ""
            }`}
          >
            <a
              className={`${category === selectedCategory ? "active" : ""}`}
              onClick={() => onCategorySelect(category)}
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
