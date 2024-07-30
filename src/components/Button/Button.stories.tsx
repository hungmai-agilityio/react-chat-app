import { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@/components/Button';

// Constants
import { SIZE, TYPE } from '@/constants';

// FontAwesome
import { faPen } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Name button',
    },
    size: {
      description: 'Set size optional for Button'
    },
    variant: {
      description: 'Set type optional for Button'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    styles: {
      description: 'Add custom css'
    },
    isDisabled: {
      description: 'Set disabled button'
    },
    iconLeft: {
      description: 'Render icon left with FontAwesome'
    },
    iconRight: {
      description: 'Render icon right with FontAwesome'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    name: 'Submit',
    size: SIZE.MEDIUM,
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit primary button')
  }
};

export const Secondary: Story = {
  args: {
    name: 'Submit',
    size: SIZE.MEDIUM,
    variant: TYPE.SECOND,
    onClick: () => alert('submit secondary button')
  }
};

export const Tertiary: Story = {
  args: {
    name: 'Submit',
    size: SIZE.SMALL,
    variant: TYPE.TERTIARY,
    iconRight: faPen,
    onClick: () => alert('submit Tertiary button')
  }
};

export const ButtonLarge: Story = {
  args: {
    name: 'Submit',
    size: SIZE.LARGE,
    variant: TYPE.TERTIARY,
    iconLeft: faPen,
    onClick: () => alert('submit secondary button')
  }
};

export const ButtonDisabled: Story = {
  args: {
    name: 'Send',
    size: SIZE.MINI,
    isDisabled: true,
    onClick: () => alert('Can not submit')
  }
};
