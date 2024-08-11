import {
  ChangeEvent,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

// Hooks
import { useUsersWithProfiles } from '@/hooks';

// FontAwesomes
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Components
import { Loading, Panel, Search, Spinner, Tabs } from '@/components';
const ListUser = lazy(() => import('@/components/UserRoom/List'));

// Interfaces
import { IUser } from '@/interfaces';

// Utils
import { searchFilter, debounce } from '@/utils';

// Constants
import { LIST_TAB_USERS } from '@/constants';

// Stores
import { useAuthStore } from '@/stores';

// Layouts + Pages
import ChatArea from '@/layouts/ChatArea';
import ChatSide from '@/layouts/Sidebar/Chats';

const Layout = () => {
  const [value, setValue] = useState<string>('1');
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');

  // Store + Hook
  const { users, profiles } = useUsersWithProfiles();
  const { currentUser, fetchUserData } = useAuthStore();

  // Handle change tab in sidebar
  const handleChangeTab = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setValue(event.currentTarget.value);
      setSearchValue('');
    },
    []
  );

  // Handle change value in users tab
  const handleChangeValueUsers = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchValue(value);
  };

  // Debounced search value update
  useEffect(() => {
    const handler = debounce((value: string) => {
      setDebouncedSearch(value);
    });
    handler(searchValue);

    fetchUserData();
  }, [fetchUserData, searchValue]);

  // Search filter user
  const filterUser = useMemo(() => {
    return searchFilter<IUser>(users, debouncedSearch, ['userName']);
  }, [users, debouncedSearch]);

  // Handle selected user to open new chat area
  const handleSelectedRoom = useCallback((id: string, isUser: boolean) => {
    if (!isUser) {
      setSelectedRoom(id);
      setSelectedUser('');
      return;
    }
    setSelectedUser(id);
    setSelectedRoom('');
  }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="bg-tertiary w-full max-w-sidebar h-screen border-r">
        <Tabs list={LIST_TAB_USERS} index={value} onClick={handleChangeTab} />
        <Panel index={value} tabIndex="1">
          <Suspense fallback={<Spinner />}>
            <ChatSide onSelectRoom={handleSelectedRoom} />
          </Suspense>
        </Panel>
        <Panel index={value} tabIndex="2">
          <div className="p-3">
            <Search
              onChange={handleChangeValueUsers}
              value={searchValue}
              icon={faSearch}
            />
          </div>
          <div className="h-sidebar-user scrollbar overflow-y-auto">
            <Suspense fallback={<Loading />}>
              <ListUser
                data={filterUser}
                profiles={profiles}
                onSelected={handleSelectedRoom}
                currentUser={currentUser?.id}
              />
            </Suspense>
          </div>
        </Panel>
      </aside>
      <ChatArea selectedRoom={selectedRoom} selectedUser={selectedUser} />
    </div>
  );
};

export default Layout;
