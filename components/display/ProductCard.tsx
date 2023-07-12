import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  title: string;
  description: string;
  image: string;
  price: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <motion.div
        className="rounded-lg overflow-hidden shadow-lg bg-light-muted dark:bg-dark-muted"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-0" style={{ paddingBottom: "75%" }}>
          <Image
            fill
            src={product.image}
            alt={product.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-6 py-4 dark:text-white">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-light-primary dark:bg-dark-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white">
            ${product.price}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
