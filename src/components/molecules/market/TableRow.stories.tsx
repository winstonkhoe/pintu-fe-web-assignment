import type { Meta, StoryObj } from '@storybook/react';

import { MarketTableRow } from './TableRow';
import { FilterProvider } from '@/contexts/FilterContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockQueryClient } from '@/storybook/mock-query-client';

const queryClient = new QueryClient();
mockQueryClient(queryClient);

const meta = {
  component: MarketTableRow,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <Story />
        </FilterProvider>
      </QueryClientProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MarketTableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    svgUrl: 'svgUrl',
    color: 'color',
    currencyGroup: 'BTC',
    name: 'Bitcoin',
  },
};
