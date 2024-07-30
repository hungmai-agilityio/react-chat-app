import { Meta, StoryObj } from '@storybook/react';

// FontAwesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Components
import ModalAction from '@/components/Modal/Action';

const meta: Meta<typeof ModalAction> = {
  component: ModalAction,
  tags: ['autodocs'],
  argTypes: {
    btnName: {
      description: 'Button name'
    },
    onClick: {
      description: 'Handles event click'
    },
    icon: {
      description: 'Add icon to buttons using FontAwesome'
    },
    avatar: {
      description: 'Room image'
    },
    name: {
      description: 'Title or room name'
    },
    onChange: {
      description: 'Handle change room name'
    },
    onAvatarChange: {
      description: 'Handle image changes from your device'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ModalAction>;

export const ModalEdit: Story = {
  args: {
    avatar: '',
    onChange: () => {},
    name: '',
    onClick: () => {}
  }
};

export const ModalAdd: Story = {
  args: {
    avatar: '',
    onChange: () => {},
    name: '',
    btnName: 'People',
    icon: faArrowRight,
    onClick: () => {}
  }
};
