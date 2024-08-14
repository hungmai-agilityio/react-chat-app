import {
  ChangeEvent,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../fireBase/config';
import useSWR from 'swr';

// Font Awesome
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Hooks and Stores
import { useUsersWithProfiles } from '@/hooks';
import { useAuthStore } from '@/stores';

// Interfaces
import { IChat, IMessage } from '@/interfaces';

// Services
import {
  getChatsByUserId,
  getLastMessagesByRoomId,
  listenToChats,
  updateUserStatus
} from '@/services';

// Utils
import { debounce } from '@/utils';

// Constants
import { POSITION, SIZE, TYPE } from '@/constants';

// Components
import { DropdownItem } from '@/components/Dropdown';
import {
  Button,
  Loading,
  Modal,
  Search,
  UserMenu,
  Profile,
  Spinner
} from '@/components';
const ListUser = lazy(() => import('@/components/UserRoom/List'));
const AddGroupChat = lazy(() => import('@/components/Chat/AddGroupChat'));

interface ChatProps {
  onSelectRoom: (id: string, isUser: boolean) => void;
}

const ChatSide = ({ onSelectRoom }: ChatProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [isOpenSignOut, setIsOpenSignOut] = useState<boolean>(false);
  const [lastMessages, setLastMessages] = useState<Record<string, IMessage>>(
    {}
  );

  // Store and hook
  const { users, profiles } = useUsersWithProfiles();
  const { currentUser, fetchUserData } = useAuthStore();

  const {
    data: chatsData,
    mutate: mutateChats,
    isLoading: chatsLoading,
    error: chatsError
  } = useSWR<IChat[]>(
    currentUser ? currentUser.id : null,
    () =>
      getChatsByUserId(currentUser!.id).then((response) => response.data || []),
    { revalidateOnFocus: false }
  );
  // Fetch chats when currentUser changes
  useEffect(() => {
    if (!currentUser) return;

    let cleanup: (() => void) | null = null;

    const subscribeToChats = () => {
      cleanup = listenToChats(currentUser.id, async (updatedChats) => {
        if (Array.isArray(updatedChats)) {
          mutateChats(updatedChats, false);
          const roomIds = updatedChats.map((chat) => chat.id);
          getLastMessagesByRoomId(roomIds, setLastMessages);
        }
      });
    };

    subscribeToChats();

    return () => {
      if (cleanup) cleanup();
    };
  }, [currentUser, mutateChats]);

  // Debounced search value update
  useEffect(() => {
    const handler = debounce((value: string) => {
      setDebouncedSearch(value);
    });
    handler(searchValue);

    fetchUserData();
  }, [fetchUserData, searchValue]);

  // Handle change value in users tab
  const handleChangeValueUsers = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchValue(value);
  };

  // Search filter chat
  const filterChats = useMemo(() => {
    if (!currentUser || !chatsData) return [];

    return chatsData.filter((chat) => {
      if (chat.title) {
        return chat.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      }

      const member = chat.members.find((item) => item !== currentUser?.id);
      const memberDetail = users.find((user) => user.id === member);

      if (memberDetail) {
        return memberDetail.userName
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());
      }

      return false;
    });
  }, [chatsData, debouncedSearch, users, currentUser]);

  // Handle toggle profile modal
  const handleToggleProfile = useCallback(() => {
    setIsOpenProfile(!isOpenProfile);
  }, [isOpenProfile]);

  // Handle toggle modal sign out
  const handleToggleModalSignOut = useCallback(() => {
    setIsOpenSignOut(!isOpenSignOut);
  }, [isOpenSignOut]);

  // Handle sign out
  const handleSignOut = useCallback(async () => {
    if (currentUser?.id) {
      await updateUserStatus(currentUser.id, false);
    }
    await signOut(auth);
  }, [currentUser]);

  // Handle selected item in user menu
  const handleSelect = (item: DropdownItem) => {
    switch (item.value) {
      case 'profile':
        handleToggleProfile();
        break;
      case 'logout':
        handleToggleModalSignOut();
        break;
      default:
        break;
    }
  };

  if (chatsLoading) return <Loading />;
  if (chatsError) return <div>Error loading chats</div>;

  const currentProfile = currentUser ? profiles[currentUser.id] : null;

  return (
    <>
      <div className="flex flex-col h-sidebar">
        <div className="flex-grow">
          <div className="p-3">
            <Search
              onChange={handleChangeValueUsers}
              value={searchValue}
              icon={faSearch}
            />
          </div>
          <div className="max-h-side-chat scrollbar overflow-y-auto">
            <Suspense fallback={<Spinner />}>
              <ListUser
                data={filterChats}
                profiles={profiles}
                onSelected={onSelectRoom}
                messages={Object.values(lastMessages)}
                currentUser={currentUser?.id}
              />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<Spinner />}>
          <AddGroupChat users={users} profiles={profiles} />
        </Suspense>
        <div className="p-3 bg-indigo-100">
          <UserMenu
            avatar={currentProfile?.avatar || ''}
            name={currentUser?.userName || 'User'}
            onSelect={handleSelect}
            position={POSITION.BOT_LEFT}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpenProfile}
        onCloseModal={handleToggleProfile}
        styles="w-modal-xl"
        title="Profile"
      >
        <Profile />
      </Modal>
      <Modal
        isOpen={isOpenSignOut}
        title="Sign out"
        onCloseModal={handleToggleModalSignOut}
        styles="w-modal-sm h-modal-sm"
      >
        <div className="p-4">
          <p className="text-center text-sm">Do you want to log out?</p>
          <div className="mt-10 flex gap-3 justify-center">
            <Button
              name="Cancel"
              onClick={handleToggleModalSignOut}
              variant={TYPE.SECOND}
              size={SIZE.MINI}
            />
            <Button
              name="OK"
              onClick={handleSignOut}
              variant={TYPE.PRIMARY}
              size={SIZE.MINI}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChatSide;
