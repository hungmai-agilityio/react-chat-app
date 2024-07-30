import { Meta, StoryObj } from '@storybook/react';

// FontAwesome
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Components
import Search from '@/components/Search';

const meta: Meta<typeof Search> = {
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'Input value'
    },
    icon: {
      description: 'Icon from FontAwesome'
    },
    onChange: {
      description: 'Handles change input value'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Search>;

export const InputWithIcon: Story = {
  args: {
    onChange: () => {},
    value: '',
    icon: faSearch
  }
};

export const InputNotIcon: Story = {
  args: {
    onChange: () => {},
    value: ''
  }
};
