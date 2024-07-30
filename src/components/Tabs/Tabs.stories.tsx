import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tabs } from '@/components/Tabs';
import { ITab } from '@/components/Tabs/Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    list: {
      description: 'Render dynamic react node children'
    },

    index: {
      description: 'Tab position order'
    },
    onClick: {
      description: 'Handle event when click '
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const list: Omit<ITab, 'index' | 'onClick'>[] = [
  {
    title: 'Tab 1',
    value: '1'
  },
  {
    title: 'Tab 2',
    value: '2'
  }
];

export const Default: Story = {
  args: {
    list: list,
    index: '2',
    onClick: () => alert('Tab click')
  }
};
