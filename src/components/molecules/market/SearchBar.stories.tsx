import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';
import { FilterProvider } from '@/contexts/FilterContext';

const meta = {
  component: SearchBar,
  decorators: (Story) => (
    <FilterProvider>
      <Story />
    </FilterProvider>
  ),
  tags: ['autodocs']
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
