import type { Meta, StoryObj } from '@storybook/react';

import Market from './Market';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterProvider } from '@/contexts/FilterContext';
import { mockQueryClient } from '@/storybook/mock-query-client';

const queryClient = new QueryClient();
mockQueryClient(queryClient);

const meta = {
  component: Market,
  decorators: (Story) => (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <Story />
      </FilterProvider>
    </QueryClientProvider>
  ),
  tags: ['autodocs']
} satisfies Meta<typeof Market>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
