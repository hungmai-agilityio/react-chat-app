import {
  ChangeEvent,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { signOut } from 'firebase/auth';
import { auth } from '../../fireBase/config';

// Hooks
import { useUsersWithProfiles } from '@/hooks';

// FontAwesomes
import {
  faArrowRight,
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

// Components
import { DropdownItem } from '@/components/Dropdown';
import {
  AddMember,
  Button,
  Loading,
  Modal,
  Panel,
  Search,
  Tabs,
  UserMenu,
  ModalAction,
  Profile
} from '@/components';
const ListUser = lazy(() => import('@/components/UserRoom/List'));

// Interfaces
import { IChat, IMessage, IUser } from '@/interfaces';

// Services
import {
  createChat,
  getChatsByUserId,
  getLastMessagesByRoomId,
  listenToChats
} from '@/services';

// Utils
import { searchFilter } from '@/utils';
import { debounce } from '@/utils';

// Constants
import { LIST_TAB_USERS, POSITION, SIZE, TYPE } from '@/constants';

// Stores
import { useAuthStore, useAppStore } from '@/stores';

// Layouts + Pages
import ChatArea from '@/layouts/ChatArea';

const Layout = () => {
  const [value, setValue] = useState<string>('1');
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [isOpenNewModal, setIsOpenNewModal] = useState<boolean>(false);
  const [isOpenMemberModal, setIsOpenMemberModal] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [chats, setChats] = useState<IChat[]>([]);
  const [lastMessages, setLastMessages] = useState<Record<string, IMessage>>(
    {}
  );

  // Store + Hook
  const { users, profiles, isLoading, isError } = useUsersWithProfiles();
  const { currentUser, fetchUserData } = useAuthStore();

  const {
    chatName,
    setChatName,
    chatAvatar,
    setChatAvatar,
    checkedUsers,
    addCheckedUser,
    resetStore,
    removeCheckedUser
  } = useAppStore();

  // Fetch chats when currentUser changes
  useEffect(() => {
    if (!currentUser) return;
    let cleanup: (() => void) | null = null;

    const fetchChats = async () => {
      const { data } = await getChatsByUserId(currentUser.id);
      setChats(data || []);
      if (data) {
        const roomIds = data.map((chat) => chat.id);
        return getLastMessagesByRoomId(roomIds, setLastMessages);
      }
    };

    const subscribeToChats = () => {
      cleanup = listenToChats(currentUser.id, setChats);
    };

    (async () => {
      await fetchChats();
      subscribeToChats();
    })();

    return () => {
      if (cleanup) cleanup();
    };
  }, [currentUser]);

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

  // Search filter chat
  const filterChats = useMemo(() => {
    return chats.filter((chat) => {
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
  }, [chats, debouncedSearch, users, currentUser]);

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

  // Handle toggle new chat modal
  const handleToggleNewChatModal = useCallback(() => {
    setIsOpenNewModal(!isOpenNewModal);
  }, [isOpenNewModal]);

  // Handle toggle add member modal
  const handleToggleAddMemberModal = useCallback(() => {
    setIsOpenMemberModal(!isOpenMemberModal);
    setIsOpenNewModal(!isOpenNewModal);
  }, [isOpenMemberModal, isOpenNewModal]);

  // Handle checked for add member
  const handleChecked = (id: string) => {
    if (checkedUsers.includes(id)) {
      removeCheckedUser(id);
      return;
    }
    addCheckedUser(id);
  };

  // Handle Close modal edit profile
  const handleToggleProfile = useCallback(() => {
    setIsOpenProfile(!isOpenProfile);
  }, [isOpenProfile]);

  // Handle change title chat room
  const handleChatNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setChatName(event.target.value);
  };

  // Handle set avatar for chat room
  const handleChatAvatarChange = (avatar: string) => {
    setChatAvatar(avatar);
  };

  // Handle create new group chat
  const handleCreateGroupChat = useCallback(async () => {
    if (!currentUser) return;

    const members = [currentUser.id, ...checkedUsers.map((userId) => userId)];

    const chatData = {
      id: uuidv4(),
      title: chatName,
      avatar: chatAvatar,
      members,
      isGroup: true,
      owner: currentUser.id
    };

    await createChat(chatData);
    resetStore();
    setIsOpenMemberModal(false);
  }, [chatAvatar, chatName, checkedUsers, currentUser, resetStore]);

  const handleSelect = (item: DropdownItem) => {
    switch (item.value) {
      case 'profile':
        handleToggleProfile();
        break;
      case 'logout':
        signOut(auth);
        break;
      default:
        break;
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading users</div>;

  const currentProfile = currentUser ? profiles[currentUser.id] : null;

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="bg-tertiary w-full max-w-sidebar h-screen border-r">
        <Tabs list={LIST_TAB_USERS} index={value} onClick={handleChangeTab} />
        <Panel index={value} tabIndex="1">
          <div className="flex flex-col h-sidebar">
            <div className="flex-grow">
              <div className="p-3">
                <Search
                  onChange={handleChangeValueUsers}
                  value={searchValue}
                  icon={faSearch}
                />
              </div>
              <div className="h-5/6 scrollbar overflow-y-auto">
                <Suspense fallback={<Loading />}>
                  <ListUser
                    data={filterChats}
                    profiles={profiles}
                    onSelected={handleSelectedRoom}
                    isActive
                    messages={Object.values(lastMessages)}
                    currentUser={currentUser?.id}
                  />
                </Suspense>
              </div>
            </div>
            <div className="mt-auto p-2">
              <Button
                name="New Chat"
                onClick={handleToggleNewChatModal}
                iconLeft={faPlus}
                size={SIZE.LARGE}
                variant={TYPE.SECOND}
              />
            </div>
            <div className="p-3 bg-indigo-100">
              <UserMenu
                avatar={currentProfile?.avatar || ''}
                name={currentUser?.userName || 'User'}
                onSelect={handleSelect}
                position={POSITION.BOT_LEFT}
              />
            </div>
          </div>
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
      <Modal
        isOpen={isOpenNewModal}
        onCloseModal={handleToggleNewChatModal}
        title="New chat"
      >
        <ModalAction
          onChange={handleChatNameChange}
          btnName="People"
          icon={faArrowRight}
          onClick={handleToggleAddMemberModal}
          onAvatarChange={handleChatAvatarChange}
          avatar={chatAvatar}
          name={chatName}
        />
      </Modal>
      <Modal
        isOpen={isOpenMemberModal}
        onReturn={handleToggleAddMemberModal}
        title="Add members"
        btnPrimary="Save"
        onClick={handleCreateGroupChat}
      >
        <AddMember
          checkedUsers={checkedUsers}
          currentUserId={currentUser?.id}
          isActive
          onChecked={handleChecked}
          users={users}
          profiles={profiles}
        />
      </Modal>
      <Modal
        isOpen={isOpenProfile}
        onCloseModal={handleToggleProfile}
        styles="w-modal-xl"
        title="Profile"
      >
        <Profile />
      </Modal>
    </div>
  );
};

export default Layout;
