"use client";

import { useState } from "react";
import CategoryTabs from "../navigation/CategoryTabs";
import ProductCard from "../display/ProductCard";
import { SectionWrapper } from "@/hoc";

type Product = {
  title: string;
  description: string;
  image: string;
  price: string;
};

// function Catalase() {
const Catalase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products: Product[] = [
    {
      title: "Product 1",
      description: "Description 1",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      price: "10.00",
    },
    {
      title: "Product 2",
      description: "Description 2",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      price: "20.00",
    },
    // More products...
  ];

  const categories = ["All", "Category 1", "Category 2", "Category 3"]; // Replace with your actual categories

  return (
    <section className="flex flex-col sm:flex-row max-w-7xl mx-auto p-4">
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Catalase, "catalase");
