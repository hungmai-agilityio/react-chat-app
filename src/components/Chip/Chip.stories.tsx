import { Meta, StoryObj } from '@storybook/react';

// FontAwesome
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

// Components
import Chip from '@/components/Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Render dynamic react node children'
    },
    styles: {
      description: 'Add custom css'
    },
    icon: {
      description: 'Render icon with FontAwesome'
    },
    onClick: {
      description: 'Handle event when click '
    }
  }
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'June, 04 2024'
  }
};

export const ChipWithIcon: Story = {
  args: {
    children: 'Checked',
    icon: faCheckCircle
  }
};

export const ChipCustom: Story = {
  args: {
    children: 'Delete',
    icon: faTrash,
    styles: 'text-white bg-red-400',
    onClick: () => {
      alert('Remove?');
    }
  }
};
