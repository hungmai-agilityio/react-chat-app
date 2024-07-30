import { Meta, StoryObj } from '@storybook/react';

// Mock data
import { mockProfiles, mockUsers } from '@/mocks';

// Components
import Modal from '@/components/Modal';
import AddMember from '@/components/Modal/AddMember';

const meta: Meta<typeof AddMember> = {
  component: AddMember,
  tags: ['autodocs'],
  argTypes: {
    currentUserId: {
      description: 'Id of the currently logged in user'
    },
    users: {
      description: 'List user'
    },
    profiles: {
      description: 'User details by user id'
    },
    onSearch: {
      description: 'Handles searching for users in lists'
    },
    onChecked: {
      description: 'Handles check users to add to the member list'
    },
    value: {
      description: 'Input value for searching?'
    },
    isActive: {
      description: 'Check if any users are connected'
    },
    checkedUsers: {
      description: 'List of checked users'
    }
  }
};

export default meta;

type Story = StoryObj<typeof AddMember>;

export const Default: Story = {
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onSearch: () => {},
    onChecked: (id) => console.log('Checked user ID:', id),
    value: '',
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: []
  },
  render: (args) => (
    <Modal
      isOpen={true}
      onCloseModal={() => alert('Close Modal')}
      title="Add members"
      btnPrimary="Save"
      onClick={() => alert('Save')}
    >
      <AddMember {...args} />
    </Modal>
  )
};

export const MemberChecked: Story = {
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onSearch: () => {},
    onChecked: (id) => console.log('Checked user ID:', id),
    value: '',
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: ['8a741820-0253-11ef-804b-d90ac4375227']
  },
  render: (args) => (
    <Modal
      isOpen={true}
      onCloseModal={() => alert('Close Modal')}
      title="Add members"
      btnPrimary="Save"
      onClick={() => alert('Save')}
    >
      <AddMember {...args} />
    </Modal>
  )
};
