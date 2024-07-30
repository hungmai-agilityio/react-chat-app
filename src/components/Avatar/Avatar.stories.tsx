import { Meta, StoryObj } from '@storybook/react';

// Constants
import { SIZE } from '@/constants';

// Components
import Avatar from '@/components/Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      description: 'Render image for img tags'
    },
    name: {
      description: 'Set name if there is no avatar or the avatar is corrupted'
    },
    size: {
      description: 'Set size optional for Avatar'
    },
    styles: {
      description: 'Add custom css'
    },
    circle: {
      description: 'Render Avatar with border radius full'
    },
    onClick: {
      description: 'Handle the event when clicking on the avatar'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithImageSmall: Story = {
  args: {
    avatar: 'assets/images/mock-image.jpg',
    size: SIZE.SMALL,
    name: 'Test User'
  }
};

export const AvatarWithoutImageSmall: Story = {
  args: {
    size: SIZE.SMALL,
    name: 'Test User'
  }
};

export const AvatarWithImageLarge: Story = {
  args: {
    avatar: 'assets/images/mock-image.jpg',
    size: SIZE.LARGE,
    name: 'Test User'
  }
};

export const AvatarWithoutImageLarge: Story = {
  args: {
    size: SIZE.LARGE,
    name: 'Test User'
  }
};

export const AvatarWithImageLargeCircle: Story = {
  args: {
    avatar: 'assets/images/mock-image.jpg',
    size: SIZE.LARGE,
    name: 'Test User',
    circle: true
  }
};

export const AvatarWithoutImageLargeCircle: Story = {
  args: {
    size: SIZE.LARGE,
    name: 'Test User',
    circle: true
  }
};
