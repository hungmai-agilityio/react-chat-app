import { Meta, StoryObj } from '@storybook/react';

// Interfaces
import { DropdownItem } from '@/components/Dropdown';

// Constants
import { POSITION } from '@/constants';

// Components
import UserMenu from '@/components/Dropdown/UserMenu';

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    avatar: {
      description: 'Render image for img tags'
    },
    name: {
      description: 'Set name if there is no avatar or the avatar is corrupted'
    },
    onSelect: {
      description: 'Callback function when an item is selected.'
    },
    position: {
      description: 'Position of the Dropdown when opened.'
    }
  }
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Primary: Story = {
  args: {
    avatar: '',
    name: 'User Premium',
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.TOP_LEFT
  }
};

export const Second: Story = {
  args: {
    avatar: '',
    name: 'User Premium',
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.BOT_LEFT
  }
};
