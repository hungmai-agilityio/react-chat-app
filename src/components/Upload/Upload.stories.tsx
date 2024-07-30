import { Meta, StoryObj } from '@storybook/react';

// Components
import Upload from '@/components/Upload';

const meta: Meta<typeof Upload> = {
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      description: 'User avatar or image from your PC'
    },
    name: {
      description: 'User name or render alt if avatar not found'
    },
    htmlFor: {
      description: 'Set id and html for input and label'
    },
    onImageChange: {
      description: 'Handle change image'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Primary: Story = {
  args: {
    avatar: '',
    name: 'user',
    htmlFor: 'account',
    onImageChange: () => {}
  }
};

export const WithImage: Story = {
  args: {
    avatar: 'assets/images/mock-image.jpg',
    name: 'user',
    htmlFor: 'account',
    onImageChange: () => {}
  }
};
