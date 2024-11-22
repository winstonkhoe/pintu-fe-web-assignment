import type { Meta, StoryObj } from '@storybook/react';

import { TableStatisticCell } from './TableStatisticCell';

const meta = {
  component: TableStatisticCell,
  tags: ['autodocs']
} satisfies Meta<typeof TableStatisticCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    value: '62'
  }
};

export const Negative: Story = {
  args: {
    value: '-12'
  }
};
