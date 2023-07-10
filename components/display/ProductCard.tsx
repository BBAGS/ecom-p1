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
    <div className="w-1/4 p-4">
      <motion.div
        className="rounded-lg overflow-hidden shadow-lg"
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
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${product.price}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
