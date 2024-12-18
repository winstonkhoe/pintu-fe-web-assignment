import type { Meta, StoryObj } from '@storybook/react';

import TableHeader from './TableHeader';

const meta = {
  component: TableHeader,
  tags: ['autodocs']
} satisfies Meta<typeof TableHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
