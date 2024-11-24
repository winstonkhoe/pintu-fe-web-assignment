import type { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from './SvgIcon';

const meta = {
  component: SvgIcon,
  tags: ['autodocs']
} satisfies Meta<typeof SvgIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
    color: '#F78B1A'
  }
};
