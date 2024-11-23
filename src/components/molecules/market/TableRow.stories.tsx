import type { Meta, StoryObj } from '@storybook/react';

import { MarketTableRow } from './TableRow';

const meta = {
  component: MarketTableRow,
  tags: ['autodocs']
} satisfies Meta<typeof MarketTableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    svgUrl: 'svgUrl',
    color: 'color',
    currencyGroup: 'BTC',
    name: 'Bitcoin',
  }
};
