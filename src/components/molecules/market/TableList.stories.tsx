import type { Meta, StoryObj } from '@storybook/react';

import MarketTableList from './TableList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterProvider } from '@/contexts/FilterContext';
import { mockQueryClient } from '@/storybook/mock-query-client';

const queryClient = new QueryClient();
mockQueryClient(queryClient);

const meta = {
  component: MarketTableList,
  decorators: (Story) => (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <Story />
      </FilterProvider>
    </QueryClientProvider>
  ),
  tags: ['autodocs']
} satisfies Meta<typeof MarketTableList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
