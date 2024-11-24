import type { Meta, StoryObj } from '@storybook/react';

import FilterList from './FilterList';

const meta = {
  component: FilterList,
  tags: ['autodocs']
} satisfies Meta<typeof FilterList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
