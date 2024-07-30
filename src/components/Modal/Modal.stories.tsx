import { Meta, StoryObj } from '@storybook/react';

// Components
import Modal from '@/components/Modal';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Toggle modal (open or close)'
    },
    onCloseModal: {
      description: 'Handle close the modal'
    },
    title: {
      description: 'Modal title'
    },
    btnPrimary: {
      description: 'Button name, shown if you use the button for the event'
    },
    icon: {
      description:
        'Icon from FontAwesome, shown if you use the icon for the event'
    },
    onClick: {
      description: 'Handle event when click (button or icon)'
    },
    children: {
      description: 'Render dynamic react node children'
    },
    onReturn: {
      description:
        'Replace closing the modal with returning to the previous page'
    },
    styles: {
      description: 'Add custom css'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onCloseModal: () => {
      alert('close modal');
    },
    title: 'Modal',
    btnPrimary: 'Save',
    onClick: () => {
      alert('Click button');
    }
  }
};

export const Second: Story = {
  args: {
    isOpen: true,
    onReturn: () => {
      alert('Return');
    },
    title: 'Modal Second',
    icon: faPenAlt,
    onClick: () => {
      alert('Click icon');
    }
  }
};
