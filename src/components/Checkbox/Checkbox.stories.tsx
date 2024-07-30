import { Meta, StoryObj } from '@storybook/react';

// Components
import Checkbox from '@/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Set id for checkbox'
    },
    children: {
      description: 'Render dynamic react node children '
    },
    isChecked: {
      description: 'Set checked'
    },
    onChange: {
      description: 'Handle the event when clicking on the button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const NoCheck: Story = {
  args: {
    id: '701796f0-0253-11ef-804b-d90ac4375227',
    isChecked: false,
    children: 'No Check',
    onChange: () => {}
  }
};

export const Checked: Story = {
  args: {
    id: '701796f0-0253-11ef-804b-d90ac4375227',
    isChecked: true,
    children: 'No Check',
    onChange: () => {}
  }
};
