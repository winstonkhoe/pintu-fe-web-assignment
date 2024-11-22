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
    price: '840230129',
    day: '1.62',
    week: '-1.2',
    month: '1.13',
    year: '4.33'
  }
};
