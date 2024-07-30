import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

// Components
import SignIn from '@/components/Form/SignIn';

const meta: Meta<typeof SignIn> = {
  component: SignIn,
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

type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {
  args: {
    mailValue: 'username@mail.com',
    passwordValue: 'Password123',
    onMailChange: () => {},
    onPasswordChange: () => {},
    onClick: () => {}
  }
};

export const MessageError: Story = {
  args: {
    mailValue: 'username@mail.com',
    passwordValue: 'Password123',
    onMailChange: () => {},
    onPasswordChange: () => {},
    onClick: () => {},
    message: {
      email: 'Email is required',
      password: 'Password is required'
    }
  }
};
