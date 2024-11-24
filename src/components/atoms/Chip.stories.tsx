import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta = {
  component: Chip,
  tags: ['autodocs']
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "DeFi",
    isActive: false
  }
};