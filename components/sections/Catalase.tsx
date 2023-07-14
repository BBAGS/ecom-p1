"use client";

import { useState } from "react";
import CategoryTabs from "../navigation/CategoryTabs";
import ProductCard from "../display/ProductCard";
import { SectionWrapper } from "@/hoc";

export type Category = {
  name: string;
  path: string;
};

type Product = {
  title: string;
  description: string;
  image: string;
  price: string;
};

// function Catalase() {
const Catalase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories: Category[] = [
    {
      name: "All",
      path: "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z",
    },
    {
      name: "TV",
      path: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      name: "Category 3",
      path: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
    },
  ]; // Replace with your actual categories

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

  return (
    <section className="grid grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
      <div className="col-span-4 sm:col-span-1">
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
      <div className="col-span-4 sm:col-span-3 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Catalase, "catalase");
