import { ITab } from '@/components/Tabs/Tab';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const USER_OPTIONS = [{ label: 'Profile', value: 'profile' }, { label: 'Log out', value: 'logout' }];

export const MESSAGE_OPTIONS = [
  { label: 'Edit', value: 'editMess', icon: faEdit },
  { label: 'Delete', value: 'deleteMess', icon: faTrash }
];

export const INFO_OPTIONS = [{ label: 'Chat info', value: 'infoChat' }];

export const LIST_TAB_USERS: Omit<ITab, 'index' | 'onClick'>[] = [
  {
    title: 'Chat',
    value: '1'
  },
  {
    title: 'Users',
    value: '2'
  }
];