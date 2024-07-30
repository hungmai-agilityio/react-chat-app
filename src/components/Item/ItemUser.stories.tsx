import { Meta, StoryObj } from '@storybook/react';

// Components
import { ItemUser } from '@/components/Item';

const meta: Meta<typeof ItemUser> = {
  component: ItemUser,
  tags: ['autodocs'],
  argTypes: {
    isCurrentUser: {
      description: 'Check if the user is the one currently logged in'
    },
    styles: {
      description: 'Add custom css'
    },
    isItemChecked: {
      description: 'Item has been checked'
    },
    isOwner: {
      description:
        'Check if this user is the one who created the chat group or not'
    },
    onRemove: {
      description: 'Handles removal of members from group chats by the master'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ItemUser>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'John Doe',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false
  }
};

export const ActiveUser: Story = {
  args: {
    id: '2',
    name: 'Jane Smith',
    avatar: 'assets/images/mock-image.jpg',
    isActive: true,
    isCurrentUser: false,
    isItemChecked: false
  }
};

export const CurrentUser: Story = {
  args: {
    id: '3',
    name: 'Alice Johnson',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: true,
    isItemChecked: false
  }
};

export const CheckedUser: Story = {
  args: {
    id: '4',
    name: 'Bob Brown',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: true
  }
};

export const CheckedCurrentUser: Story = {
  args: {
    id: '5',
    name: 'Charlie Davis',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: true,
    isItemChecked: true
  }
};

export const GroupUser: Story = {
  args: {
    id: '7',
    name: 'Eve Adams',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false,
    isGroup: true,
    isOwner: false,
    onRemove: (id) => console.log(`Removed user with id: ${id}`)
  }
};

export const GroupUserWithRemove: Story = {
  args: {
    id: '8',
    name: 'Franklin Green',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false,
    isGroup: true,
    isOwner: true,
    onRemove: (id) => console.log(`Removed user with id: ${id}`)
  }
};
