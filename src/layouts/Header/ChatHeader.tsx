/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useState } from 'react';
import clsx from 'clsx';

// Constants
import { INFO_OPTIONS, POSITION } from '@/constants';

// Font Awesome
import { faEllipsisVertical, faPen } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { IChat, IMessage, IProfile, IUser } from '@/interfaces';

// Services
import { removeMemberFromChat, updateChatInfo } from '@/services';

// Components
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Modal,
  ModalAction,
  ModalInfo
} from '@/components';

interface ChatHeader {
  chatData: IChat;
  setChatData: React.Dispatch<React.SetStateAction<IChat | null>>;
  user: IUser;
  users: IUser[];
  profiles: Record<string, IProfile>;
  selectedRoom: string;
  messages: IMessage[];
  currentUserId: string;
  handleLeaveGroup: () => void;
}
const ChatHeader = ({
  chatData,
  setChatData,
  user,
  users,
  profiles,
  selectedRoom,
  messages,
  currentUserId,
  handleLeaveGroup
}: ChatHeader) => {
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);
  const [chatName, setChatName] = useState<string>('');
  const [chatAvatar, setChatAvatar] = useState<string>('');
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  // Handles leaving and deleting group data from user data
  const handleRemoveGroup = () => {
    setIsOpenInfoModal(false);
    handleLeaveGroup();
  };

  // Handle close modal
  const handleToggleInfoModal = useCallback(() => {
    setIsOpenInfoModal(!isOpenInfoModal);
  }, [isOpenInfoModal]);

  // Handle toggle add member modal
  const handleToggleEditModal = useCallback(() => {
    setIsOpenEditModal(!isOpenEditModal);
    setIsOpenInfoModal(!isOpenInfoModal);
    setChatName('');
    setChatData((prevChatData) => {
      if (prevChatData) {
        return { ...prevChatData, title: chatData.title };
      }
      return null;
    });
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

  // Disabled when the chat group is empty
  const isSaveButtonDisabled = chatData?.isGroup
    ? !chatData?.title.trim()
    : false;

  return (
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
      <Modal
        isOpen={isOpenInfoModal}
        title={chatData?.title}
        icon={faPen}
        onClick={handleToggleEditModal}
        onCloseModal={handleToggleInfoModal}
      >
        <ModalInfo
          avatar={chatData?.avatar || chatAvatar}
          currentUserId={currentUserId}
          member={members!}
          count={chatData?.members.length}
          name={chatData?.title || chatName}
          isGroup={chatData?.isGroup}
          isOwner={currentUserId === chatData?.owner}
          onRemove={handleRemoveMember}
          onClick={handleRemoveGroup}
        />
      </Modal>
      <Modal
        isOpen={isOpenEditModal}
        title={'Edit chat'}
        btnPrimary="Save"
        onClick={handleUpdateChat}
        onReturn={handleToggleEditModal}
        isDisabled={isSaveButtonDisabled}
      >
        <ModalAction
          onChange={handleChatNameChange}
          name={chatName || chatData?.title}
          avatar={chatAvatar || chatData?.avatar}
          onAvatarChange={handleChatAvatarChange}
        />
      </Modal>
    </div>
  );
};

export default ChatHeader;
