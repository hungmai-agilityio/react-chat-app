import { Meta, StoryObj } from '@storybook/react';

// Components
import ModalInfo from '@/components/Modal/Info';
import { memberInfo, memberInfoSolo } from '@/mocks';

const meta: Meta<typeof ModalInfo> = {
  component: ModalInfo,
  tags: ['autodocs'],
  argTypes: {
    currentUserId: {
      description: 'Id of the currently logged in user'
    },
    member: {
      description: 'Member data contained in the room'
    },
    avatar: {
      description: 'User avatar'
    },
    name: {
      description: 'User name'
    },
    count: {
      description: 'Number of existing members'
    },
    isGroup: {
      description: 'Check if this room is a group chat?'
    },
    onRemove: {
      description: 'Handle event remove member by owner'
    },
    isOwner: {
      description: 'Check if this user is the group creator'
    },
    onClick: {
      description: 'Handle event when click '
    }
  }
};

export default meta;

type Story = StoryObj<typeof ModalInfo>;

export const GroupChat: Story = {
  args: {
    member: memberInfo,
    avatar: '',
    name: 'Group Name',
    count: memberInfo.length,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    isGroup: true
  }
};

export const SoloChat: Story = {
  args: {
    member: memberInfoSolo,
    count: memberInfoSolo.length,
    avatar: 'assets/images/mock-image.jpg',
    name: 'Mary',
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    isGroup: false
  }
};
