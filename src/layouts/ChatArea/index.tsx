/* eslint-disable react-hooks/exhaustive-deps */
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { clsx } from 'clsx';

// Constants
import { INFO_OPTIONS, POSITION, SIZE, TYPE } from '@/constants';

// Utils
import { sortMessagesByTimestamp } from '@/utils';

// Hooks
import { useChats, useUsersWithProfiles } from '@/hooks';

// FontAwesome
import { faEllipsisVertical, faPen } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { IChat, IMessage, IUser } from '@/interfaces';

// Stores
import { useAuthStore } from '@/stores/useAuthStore';

// Services
import {
  userLeaveGroup,
  getChatById,
  getMessagesByRoomId,
  getRoomIdForUsers,
  getUserById,
  removeMemberFromChat,
  removeMessage,
  updateChatInfo
} from '@/services';

// Components
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Button,
  GroupedMessages,
  Modal,
  ModalAction,
  ModalInfo,
  Spinner
} from '@/components';
import ChatMessage from '@/components/Chat';

interface ChatProps {
  selectedRoom?: string;
  selectedUser?: string;
}
const ChatArea = memo(({ selectedRoom, selectedUser }: ChatProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState<boolean>(false);
  const [chatData, setChatData] = useState<IChat | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [editingMessage, setEditingMessage] = useState<IMessage | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChatDisabled, setIsChatDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatName, setChatName] = useState<string>('');
  const [chatAvatar, setChatAvatar] = useState<string>('');

  const messagesRef = useRef<HTMLDivElement>(null);

  // Store + Hooks
  const { currentUser } = useAuthStore();
  const { users, profiles } = useUsersWithProfiles();

  const { chats, error: chatError } = useChats();

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    if (selectedRoom) {
      setIsChatDisabled(false);
      setIsLoading(true);

      (async () => {
        const chat = await getChatById(selectedRoom);
        setChatData(chat.data);

        if (!chat.data?.isGroup) {
          const userId = chat.data?.members.find(
            (id) => id !== currentUser?.id
          );
          const userData = await getUserById(userId!);
          setUser(userData.data);
        }

        // Subscribe to real-time updates
        unsubscribe = getMessagesByRoomId(selectedRoom, (newMessages) => {
          const sortedNewMessages = sortMessagesByTimestamp(newMessages);
          setMessages(sortedNewMessages);
        });

        setIsLoading(false);
      })();
    }

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [currentUser?.id, selectedRoom]);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    if (selectedUser) {
      setIsChatDisabled(false);
      setIsLoading(true);

      (async () => {
        const userData = await getUserById(selectedUser);
        setUser(userData.data);
        setChatData(null);

        const response = await getRoomIdForUsers(selectedUser, currentUser?.id);

        if (!response.data) {
          setMessages([]);
        }

        // Subscribe to real-time updates
        if (response.data) {
          unsubscribe = getMessagesByRoomId(response.data, (newMessages) => {
            const sortedNewMessages = sortMessagesByTimestamp(newMessages);
            setMessages(sortedNewMessages);
          });
        }
        setIsLoading(false);
      })();
    }

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [currentUser?.id, selectedUser]);

  // Scroll view to bottom (last messages)
  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Memoized user profiles for optimization
  const userProfiles = useMemo(() => {
    return users.reduce((profileMap, user) => {
      const profile = profiles[user.id];
      if (profile) {
        profileMap.set(user.id, {
          name: user.userName,
          avatar: profile.avatar
        });
      }
      return profileMap;
    }, new Map<string, { name: string; avatar: string }>());
  }, [users, profiles]);

  // Handle close modal
  const handleToggleInfoModal = useCallback(() => {
    setIsOpenInfoModal(!isOpenInfoModal);
  }, [isOpenInfoModal]);

  // Handle toggle add member modal
  const handleToggleEditModal = useCallback(() => {
    setIsOpenEditModal(!isOpenEditModal);
    setIsOpenInfoModal(!isOpenInfoModal);
    setChatData(chatData);
    setChatName('');
  }, [isOpenEditModal, isOpenInfoModal]);

  // Handle selected dropdown option
  const handleSelect = (selectedItem: DropdownItem) => {
    setIsOpenInfoModal(false);

    switch (selectedItem.value) {
      case 'infoChat':
        setIsOpenInfoModal(true);
        break;
      default:
        break;
    }
  };

  // Handle change title chat room
  const handleChatNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value.trimStart();
    setChatName(value);

    setChatData((prevData) => {
      if (prevData) {
        return { ...prevData, title: value };
      }
      return null;
    });
  };

  // Handle set avatar for chat room
  const handleChatAvatarChange = (avatar: string) => {
    setChatAvatar(avatar);
  };

  // Handle update chat info
  const handleUpdateChat = useCallback(async () => {
    const data = {
      ...chatData,
      title: chatName || chatData?.title,
      avatar: chatAvatar || chatData?.avatar
    };

    await updateChatInfo(chatData!.id, data);
    handleToggleEditModal();

    setChatData((prevData) => {
      if (prevData) {
        return { ...prevData, title: chatName };
      }
      return null;
    });
  }, [chatAvatar, chatData, chatName]);

  /**
   * Handle remove member from group
   * @param {string} memberId
   */
  const handleRemoveMember = useCallback(
    async (memberId: string) => {
      if (!chatData) return;

      const { data, error } = await removeMemberFromChat(chatData.id, memberId);

      if (error) {
        return;
      }
      setChatData(data);
    },
    [chatData]
  );

  const members = chatData?.members.map((userId) => {
    const user = users.find((user) => user.id === userId);
    const profile = profiles[userId];

    return {
      id: user?.id || '',
      name: user?.userName || '',
      avatar: profile?.avatar || ''
    };
  });

  const profile = user ? profiles[user.id] : null;

  // Handle current user leave chat group
  const handleLeaveGroup = useCallback(async () => {
    await userLeaveGroup(chatData!.id, currentUser?.id);
    setIsOpenInfoModal(false);
    setMessages([]);
    setChatData(null);
    setUser(null);
    setIsChatDisabled(true);
  }, [chatData, currentUser?.id]);

  /**
   * Handle edit message
   * @param {IMessage} item
   */
  const handleEditMessage = useCallback((item: IMessage) => {
    setEditingMessage(item);
    setIsEdit(true);
  }, []);

  // Handle cancel edit message
  const handleCancelEdit = useCallback(() => {
    setEditingMessage(null);
    setIsEdit(false);
  }, []);

  /**
   * Handle get id message and open modal
   * @param {string} id
   */
  const handleOpenModalRemove = useCallback(
    (id?: string) => {
      if (id) {
        const message = messages.find((msg) => msg.id === id) || null;
        setEditingMessage(message);
      }
      setIsOpenRemoveModal(true);
    },
    [messages]
  );

  // Toggle Modal handle to remove
  const handleCloseModalRemove = useCallback(() => {
    setIsOpenRemoveModal(!isOpenRemoveModal);
  }, [isOpenRemoveModal]);

  /**
   * Handle remove message by id
   * @param {string} id
   */
  const handleRemoveMessage = useCallback(async () => {
    if (!editingMessage) return;

    const { success } = await removeMessage(editingMessage.id);

    if (success) {
      setMessages((prev) => prev.filter((msg) => msg.id !== editingMessage.id));
    }

    setIsOpenRemoveModal(false);
    setEditingMessage(null);
  }, [editingMessage]);

  if (chatError) {
    return <p>Get chats data error!!!</p>;
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <div className="flex h-14 py-2 px-4 border-b-xs">
        {(selectedRoom || selectedUser) && (
          <div className="w-full items-center flex justify-between">
            <Avatar
              name={chatData?.title || user?.userName}
              avatar={chatData?.avatar || profile?.avatar}
              circle
            />
            <div
              className={clsx('text-center my-0 mx-auto', {
                'cursor-pointer': selectedRoom
              })}
              onClick={selectedRoom ? handleToggleInfoModal : undefined}
            >
              <p
                className={clsx('text-lg font-medium', {
                  'hover:text-primary': selectedRoom
                })}
              >
                {chatData?.title || user?.userName}
              </p>
              <span
                className={clsx('text-sm font-normal', {
                  'hover:text-primary': selectedRoom
                })}
              >
                {chatData?.isGroup ? `${chatData?.members.length} members` : ''}
              </span>
            </div>

            {selectedRoom && messages.length ? (
              <Dropdown
                icon={faEllipsisVertical}
                items={INFO_OPTIONS}
                onSelect={handleSelect}
                position={POSITION.TOP_RIGHT}
              />
            ) : null}
          </div>
        )}
      </div>
      <main
        className={clsx('flex-grow overflow-hidden relative flex flex-col', {
          'opacity-50 cursor-not-allowed bg-fog': isChatDisabled
        })}
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex-grow border-b border-gray-300 overflow-y-auto scrollbar w-full p-4 space-y-4">
              <GroupedMessages
                currentUser={currentUser?.id}
                messages={messages}
                userProfiles={userProfiles}
                onEdit={handleEditMessage}
                onDelete={handleOpenModalRemove}
              />
              <div ref={messagesRef}></div>
            </div>
            <ChatMessage
              currentUserId={currentUser?.id}
              isDisabled={isChatDisabled}
              setMessages={setMessages}
              chatData={chatData!}
              chats={chats}
              selectedUser={selectedUser}
              handleCancelEdit={handleCancelEdit}
              isEdit={isEdit}
              editMessage={editingMessage}
            />
          </>
        )}
      </main>
      <Modal
        isOpen={isOpenInfoModal}
        title={chatData?.title}
        icon={faPen}
        onClick={handleToggleEditModal}
        onCloseModal={handleToggleInfoModal}
      >
        <ModalInfo
          avatar={chatData?.avatar || chatAvatar}
          currentUserId={currentUser?.id}
          member={members!}
          count={chatData?.members.length}
          name={chatData?.title || chatName}
          isGroup={chatData?.isGroup}
          isOwner={currentUser?.id === chatData?.owner}
          onRemove={handleRemoveMember}
          onClick={handleLeaveGroup}
        />
      </Modal>
      <Modal
        isOpen={isOpenEditModal}
        title={'Edit chat'}
        btnPrimary="Save"
        onClick={handleUpdateChat}
        onReturn={handleToggleEditModal}
      >
        <ModalAction
          onChange={handleChatNameChange}
          name={chatName || chatData?.title}
          avatar={chatAvatar || chatData?.avatar}
          onAvatarChange={handleChatAvatarChange}
        />
      </Modal>
      <Modal
        isOpen={isOpenRemoveModal}
        title="Remove message?"
        onCloseModal={handleCloseModalRemove}
        styles="w-modal-sm h-modal-sm"
      >
        <div className="p-4">
          <p className="text-center text-sm">
            The comment will be removed. Are you sure?
          </p>

          <div className="mt-5 flex gap-3 justify-center">
            <Button
              name="Cancel"
              onClick={handleCloseModalRemove}
              variant={TYPE.SECOND}
              size={SIZE.MINI}
            />
            <Button
              name="OK"
              onClick={handleRemoveMessage}
              variant={TYPE.PRIMARY}
              size={SIZE.MINI}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
});
export default ChatArea;
