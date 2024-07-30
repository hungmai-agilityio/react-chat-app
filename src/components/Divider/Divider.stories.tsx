import { Meta, StoryObj } from '@storybook/react';

// Components
import Divider from '@/components/Divider';
import Chip from '@/components/Chip';

const meta: Meta<typeof Divider> = {
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Render dynamic react node children'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
  args: {}
};

export const WithChildrenComponent: Story = {
  args: {
    children: (
      <Chip>
        <p>June, 04 2024</p>
      </Chip>
    )
  }
};

export const WithChildrenText: Story = {
  args: {
    children: 'Test'
  }
};
