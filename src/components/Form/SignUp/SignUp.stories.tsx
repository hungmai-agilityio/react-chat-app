import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

// Components
import SignUp from '@/components/Form/SignUp';

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {
    mailValue: {
      description: 'Set the value for the mail input field'
    },
    passwordValue: {
      description: 'Set the value for the password input field'
    },
    confirmValue: {
      description: 'Set the value for the confirm input field'
    },
    nameValue: {
      description: 'Set the value for the name input field'
    },
    onMailChange: {
      description: 'Handle change value mail field'
    },
    onPasswordChange: {
      description: 'Handle change value password field'
    },
    onConfirmChange: {
      description: 'Handle change value confirm field'
    },
    onNameChange: {
      description: 'Handle change value name field'
    },
    onClick: {
      description: 'Handle event when click '
    },
    message: {
      description: 'Show error messages according to the input field '
    },
    authMessage: {
      description: 'Show api error messages'
    }
  },
  decorators: [withRouter]
};

export default meta;

type Story = StoryObj<typeof SignUp>;

export const Primary: Story = {
  args: {
    nameValue: 'Name',
    mailValue: 'username@mail.com',
    passwordValue: 'Password123',
    confirmValue: 'Password123',
    onNameChange: () => {},
    onMailChange: () => {},
    onPasswordChange: () => {},
    onConfirmChange: () => {},
    onClick: () => {}
  }
};

export const MessageError: Story = {
  args: {
    nameValue: '',
    mailValue: '',
    passwordValue: '',
    confirmValue: '',
    onNameChange: () => {},
    onMailChange: () => {},
    onPasswordChange: () => {},
    onConfirmChange: () => {},
    onClick: () => {},
    message: {
      name: 'Name is required',
      email: 'Email is required',
      password: 'Password is required',
      confirm: 'Confirm Password is required'
    }
  }
};
