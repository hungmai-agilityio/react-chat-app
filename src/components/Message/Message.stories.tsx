import { Meta, StoryObj } from '@storybook/react';

// Components
import { Message } from '@/components/Message';
import { mockMessage, mockMessageEdit } from '@/mocks';

const meta: Meta<typeof Message> = {
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    item: {
      description: 'Message data'
    },
    isCurrentUser: {
      description: 'Check if the user is the one currently logged in'
    },
    avatar: {
      description: 'Render image for img tags'
    },
    name: {
      description: 'Set name if there is no avatar or the avatar is corrupted'
    },
    isActive: {
      description: 'Check if the user is connected?'
    },
    onEdit: {
      description: 'Handles message editing'
    },
    onDelete: {
      description: 'Handle message deletion'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Message>;

export const UserMessage: Story = {
  args: {
    item: mockMessageEdit,
    isCurrentUser: true,
    avatar: '',
    name: 'User Name',
    isActive: false,
    onEdit: () => console.log('Edit message'),
    onDelete: () => console.log('Delete message')
  }
};

export const MemberMessage: Story = {
  args: {
    item: mockMessage,
    isCurrentUser: false,
    avatar: '',
    isActive: true,
    name: 'Member Name'
  }
};
