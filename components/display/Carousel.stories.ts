import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    primary: true,
    label: 'Carousel',
  },
};
