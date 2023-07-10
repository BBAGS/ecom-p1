import type { Meta, StoryObj } from '@storybook/react';
import SwitchTheme from './SwitchTheme';

const meta: Meta<typeof SwitchTheme> = {
  title: 'Components/SwitchTheme',
  component: SwitchTheme,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchTheme>;

export const Default: Story = {
  args: {
    primary: true,
    label: 'SwitchTheme',
  },
};
