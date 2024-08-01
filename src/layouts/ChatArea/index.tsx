import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { clsx } from 'clsx';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { INFO_OPTIONS, POSITION, SIZE, TYPE } from '@/constants';

// Utils
import { sortMessagesByTimestamp } from '@/utils';

// Hooks
import { useChats, useOutsideClick, useUsersWithProfiles } from '@/hooks';

// FontAwesome
import { faEllipsisVertical, faPen } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { IChat, IMessage, IUser } from '@/interfaces';

// Stores
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppStore } from '@/stores';

// Services
import {
  UserLeaveGroup,
  createChat,
  getChatById,
  getMessagesByRoomId,
  getRoomIdForUsers,
  getUserById,
  removeMemberFromChat,
  removeMessage,
  sendMessage,
  updateChatInfo,
  updateMessage
} from '@/services';

// Components
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import Modal from '@/components/Modal';
import ModalInfo from '@/components/Modal/Info';
import ModalAction from '@/components/Modal/Action';
import { GroupedMessages } from '@/components/Message/GroupMessage';

interface ChatProps {
  selectedRoom?: string;
  selectedUser?: string;
}
const ChatArea = ({ selectedRoom, selectedUser }: ChatProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState<boolean>(false);
  const [chatData, setChatData] = useState<IChat | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [editingMessage, setEditingMessage] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChatDisabled, setIsChatDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Store + Hooks
  const { currentUser } = useAuthStore();
  const { users, profiles } = useUsersWithProfiles();
  const { chatName, setChatName, chatAvatar, setChatAvatar } = useAppStore();
  const chats = useChats();

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    if (selectedRoom) {
      setIsChatDisabled(false);

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
      })();
    }

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [currentUser?.id, selectedUser]);

  // Handler to set the input field as focused
  const handleFocus = () => setIsFocused(true);

  useOutsideClick({
    ref: inputRef,
    handler: () => setIsFocused(false)
  });

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

  // Handler to update the input field value
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  // Handle Send message
  const handleSend = useCallback(async () => {
    if (!value.trim().length) return;

    let roomId = chatData?.id;

    if (!roomId && selectedUser) {
      const existingChat = chats!.find(
        (chat) =>
          !chat.isGroup &&
          chat.members.includes(currentUser?.id || '') &&
          chat.members.includes(selectedUser)
      );

      if (!existingChat) {
        const newChat: IChat = {
          id: uuidv4(),
          title: '',
          avatar: '',
          members: [currentUser?.id || '', selectedUser],
          isGroup: false
        };

        const createChatResponse = await createChat(newChat);
        roomId = createChatResponse.data?.id;
      }

      if (existingChat) {
        roomId = existingChat?.id;
      }
    }

    const newMessage: IMessage = {
      id: uuidv4(),
      message: value,
      sender: currentUser?.id || '',
      time_stamp: new Date().toString(),
      roomId: roomId || ''
    };

    await sendMessage(newMessage);

    setMessages((prevMessages) => {
      const messageExists = prevMessages.some(
        (msg) => msg.id === newMessage.id
      );
      if (messageExists) {
        return prevMessages;
      }

      return [...prevMessages, newMessage];
    });
    setValue('');
  }, [value, currentUser?.id, chatData, selectedUser, chats]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Handle close modal
  const handleToggleInfoModal = useCallback(() => {
    setIsOpenInfoModal(!isOpenInfoModal);
  }, [isOpenInfoModal]);

  // Handle toggle add member modal
  const handleToggleEditModal = useCallback(() => {
    setIsOpenEditModal(!isOpenEditModal);
    setIsOpenInfoModal(!isOpenInfoModal);
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
    setChatName(event.target.value);
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
    await UserLeaveGroup(chatData!.id, currentUser?.id);
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
    setValue(item.message);
    setEditingMessage(item.id);
    setIsEdit(true);
  }, []);

  // Handle cancel edit message
  const handleCancelEdit = useCallback(() => {
    setValue('');
    setEditingMessage(null);
    setIsEdit(false);
  }, []);

  // Handle update message
  const handleUpdateMessage = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!value.trim().length || !editingMessage) return;

      const updatedMessage: Partial<IMessage> = {
        id: editingMessage,
        message: value,
        sender: currentUser?.id || '',
        isEdit: true
      };

      const { data } = await updateMessage(updatedMessage as IMessage);

      if (data) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === editingMessage
              ? { ...msg, message: value, isEdit: true }
              : msg
          )
        );
      }

      handleCancelEdit();
    },
    [value, editingMessage, currentUser?.id, handleCancelEdit]
  );

  /**
   * Handle get id message and open modal
   * @param {string} id
   */
  const handleOpenModalRemove = useCallback((id?: string) => {
    if (id) {
      setEditingMessage(id);
    }
    setIsOpenRemoveModal(true);
  }, []);

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

    const { success } = await removeMessage(editingMessage);

    if (success) {
      setMessages((prev) => prev.filter((msg) => msg.id !== editingMessage));
    }

    setIsOpenRemoveModal(false);
    setEditingMessage(null);
  }, [editingMessage]);

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

            {messages.length ? (
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
        <div
          ref={inputRef}
          onFocus={handleFocus}
          className={clsx('relative p-2 transition-all')}
        >
          <Input
            htmlFor="message-value"
            onChange={handleChange}
            name="message"
            value={value}
            variant={TYPE.SECOND}
            isDisabled={isChatDisabled}
            onKeyDown={handleKeyDown}
          />
          {isFocused && (
            <div className="float-right">
              <div className="flex gap-5">
                {isEdit && (
                  <Button
                    name="Cancel"
                    onClick={handleCancelEdit}
                    size={SIZE.MINI}
                  />
                )}
                <Button
                  name={isEdit ? 'Update' : 'Send'}
                  onClick={isEdit ? handleUpdateMessage : handleSend}
                  isDisabled={value.length === 0 || isChatDisabled}
                  size={SIZE.MINI}
                />
              </div>
            </div>
          )}
        </div>
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
};

export default ChatArea;
