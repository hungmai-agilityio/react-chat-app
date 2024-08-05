import { Meta, StoryObj } from '@storybook/react';

// Components
import Input from '@/components/Input';

// Constants
import { TYPE } from '@/constants';

// FontAwesome
import { faUser } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Set input name'
    },
    label: {
      description: 'label tag name'
    },
    variant: {
      description: 'Set type optional for Input'
    },
    onClick: {
      description: 'Handle the event when clicking on the icon'
    },
    styles: {
      description: 'Add custom css'
    },
    disabled: {
      description: 'Set disabled input'
    },
    icon: {
      description: 'Render icon with FontAwesome'
    },
    message: {
      description: 'Render error message'
    },
    htmlFor: {
      description: 'Set htmlFor and input id'
    },
    placeholder: {
      description: 'Placeholder when not input value'
    },
    type: {
      description:
        'Type input, default is "text", optional(email, password, date, ...)'
    },
    value: {
      description: 'Input value'
    },
    onChange: {
      description: 'Handle change input value'
    },
    onKeyDown: {
      description: 'Handle keyboard click events'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    variant: TYPE.PRIMARY,
    name: 'primaryInput',
    placeholder: 'Primary input',
    onChange: () => {},
    value: ''
  }
};

export const Secondary: Story = {
  args: {
    variant: TYPE.SECOND,
    name: 'secondaryInput',
    placeholder: 'Secondary input',
    onChange: () => {},
    value: ''
  }
};

export const Tertiary: Story = {
  args: {
    variant: TYPE.TERTIARY,
    name: 'tertiaryInput',
    placeholder: 'Tertiary input',
    onChange: () => {},
    value: ''
  }
};

export const InputWithIcon: Story = {
  args: {
    variant: TYPE.PRIMARY,
    name: 'inputWithIcon',
    placeholder: 'Input with icon',
    onChange: () => {},
    value: '',
    icon: faUser,
    onClick: () => alert('Icon clicked')
  }
};

export const InputWithMessage: Story = {
  args: {
    variant: TYPE.PRIMARY,
    name: 'inputWithMessage',
    placeholder: 'Input with message',
    onChange: () => {},
    value: '',
    message: 'This is an error message'
  }
};

export const InputLabel: Story = {
  args: {
    variant: TYPE.PRIMARY,
    name: 'largeInput',
    placeholder: 'Large input',
    onChange: () => {},
    value: '',
    label: 'label'
  }
};
