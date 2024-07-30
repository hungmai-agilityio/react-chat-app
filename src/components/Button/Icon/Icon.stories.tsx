import { Meta, StoryObj } from '@storybook/react';

// FontAwesome
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Components
import Icon from '@/components/Button/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Render icon with FontAwesome'
    },
    onClick: {
      description: 'Handle the event when clicking on the icon '
    },
    styles: {
      description: 'Add custom css'
    },
    isHover: {
      description: 'Hover on Icon'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: faXmark,
    onClick: () => {
      alert('Click Icon');
    }
  }
};
