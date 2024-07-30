import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

// Components
import { UserRoom } from '@/components/UserRoom';

// Components

const meta: Meta<typeof UserRoom> = {
  component: UserRoom,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Id user'
    },
    name: {
      description: 'user name or chat room name'
    },
    avatar: {
      description: 'User avatar or chat room avatar'
    },
    isActive: {
      description: 'Check user active and render status'
    },
    isGroup: {
      description: 'Check chat room is member or group chat'
    },
    time_stamp: {
      description: 'render the time the last message was sent'
    },
    message: {
      description: 'render the last message was sent'
    },
    path: {
      description:
        'The link opens the chat area according to the user id or chat room'
    },
    onSelect: {
      description: 'Select chat room or user by id to start a conversation'
    }
  }
};

export default meta;

type Story = StoryObj<typeof UserRoom>;

export const GroupChat: Story = {
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    isGroup: true,
    message: 'Hello',
    time_stamp: '2024-05-24T15:58:05.791Z',
    path: '/'
  }
};

export const ChatMember: Story = {
  args: {
    name: 'User',
    avatar: 'assets/images/mock-image.jpg',
    isActive: true,
    message: 'Hello you',
    time_stamp: new Date().toISOString(),
    path: '/'
  }
};

export const UserOnline: Story = {
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    path: '/'
  }
};

export const UserOffline: Story = {
  args: {
    name: 'User',
    avatar: '',
    isActive: false,
    path: '/'
  }
};
