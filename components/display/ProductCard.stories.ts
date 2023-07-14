import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: {
      title: 'Product 1',
      description: 'Description 1',
      image: 'https://via.placeholder.com/150',
      price: '10.00',
    },
  },
};
