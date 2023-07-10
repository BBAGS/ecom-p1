import type { Meta, StoryObj } from "@storybook/react";
import CategoryTabs from "./CategoryTabs";

const meta: Meta<typeof CategoryTabs> = {
  title: "Components/CategoryTabs",
  component: CategoryTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CategoryTabs>;

export const Default: Story = {
  args: {
    categories: ["All", "Category 1", "Category 2", "Category 3"],
    selectedCategory: "All",
    onCategorySelect: (category) => console.log(category),
  },
};
