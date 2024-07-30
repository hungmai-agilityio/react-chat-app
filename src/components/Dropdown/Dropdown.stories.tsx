import { Meta, StoryObj } from '@storybook/react';

// FontAwesome
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Constants
import { POSITION } from '@/constants';

// Mock data
import { mockDropdownItem } from '@/mocks';

// Components
import Dropdown, { DropdownItem } from '@/components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      description: 'Render dynamic react node children'
    },
    items: {
      description: 'List of items to be displayed in the Dropdown.'
    },
    onSelect: {
      description: 'Callback function when an item is selected.'
    },
    icon: {
      description: 'FontAwesome icon to be displayed in the Dropdown.'
    },
    styles: {
      description: 'Add custom css'
    },
    isHover: {
      description: 'Determines if the icon should have a hover effect.'
    },
    position: {
      description: 'Position of the Dropdown when opened.'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    children: 'Item',
    items: mockDropdownItem,
    onSelect: (item: DropdownItem) => alert(item.value)
  }
};

export const WithIcon: Story = {
  args: {
    icon: faEllipsisVertical,
    items: mockDropdownItem,
    onSelect: (item: DropdownItem) => alert(item.value)
  }
};

export const PositionTopLeft: Story = {
  args: {
    children: 'Item',
    items: mockDropdownItem,
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.TOP_LEFT
  }
};

export const PositionBotRight: Story = {
  args: {
    children: 'Item',
    items: mockDropdownItem,
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.BOT_RIGHT
  }
};

export const PositionBotLeft: Story = {
  args: {
    children: 'Item',
    items: mockDropdownItem,
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.BOT_LEFT
  }
};
