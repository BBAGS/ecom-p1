import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <div className='w-full'>
      <motion.div
        className='w-full overflow-hidden rounded-lg bg-light-muted shadow-lg dark:bg-dark-muted'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className='relative h-0 w-full' style={{ paddingBottom: '75%' }}>
          <Image
            fill
            src={product.image}
            alt={product.title}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='px-6 py-4 dark:text-white'>
          <div className='mb-2 text-xl font-bold'>{product.title}</div>
          <p className='text-base text-gray-700 dark:text-gray-300'>
            {product.description}
          </p>
        </div>
        <div className='px-6 pb-2 pt-4'>
          <span className='mb-2 mr-2 inline-block rounded-full bg-light-primary px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-dark-primary dark:text-white'>
            ${product.price}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
