import { Meta, StoryObj } from '@storybook/react';

// Components
import Loading from '@/components/Loading';

const meta: Meta<typeof Loading> = {
  component: Loading
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {}
};
