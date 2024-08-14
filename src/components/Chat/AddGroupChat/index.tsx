import { useState, useCallback, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Font Awesome
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

// Hook and Stores
import { useAppStore, useAuthStore } from '@/stores';

// Services
import { createChat } from '@/services';

// Constants
import { SIZE, TYPE } from '@/constants';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Components
import { AddMember, Button, Modal, ModalAction } from '@/components';

interface NewChatProps {
  users: IUser[];
  profiles: Record<string, IProfile>;
}
const AddGroupChat = ({ users, profiles }: NewChatProps) => {
  const [chatName, setChatName] = useState<string>('');
  const [chatAvatar, setChatAvatar] = useState<string>('');
  const [isOpenNewModal, setIsOpenNewModal] = useState<boolean>(false);
  const [isOpenMemberModal, setIsOpenMemberModal] = useState<boolean>(false);

  const { currentUser } = useAuthStore();
  const { checkedUsers, addCheckedUser, removeCheckedUser, resetStore } =
    useAppStore();

  // Handle toggle new chat modal
  const handleToggleNewChatModal = useCallback(() => {
    setIsOpenNewModal(!isOpenNewModal);
    resetStore();
    setChatAvatar('');
    setChatName('');
  }, [isOpenNewModal, resetStore]);

  // Handle toggle add member modal
  const handleToggleAddMemberModal = useCallback(() => {
    setIsOpenMemberModal(!isOpenMemberModal);
    setIsOpenNewModal(!isOpenNewModal);
  }, [isOpenMemberModal, isOpenNewModal]);

  // Handle change title chat room
  const handleChatNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setChatName(event.target.value.trimStart());
    },
    []
  );

  // Handle set avatar for chat room
  const handleChatAvatarChange = useCallback((avatar: string) => {
    setChatAvatar(avatar);
  }, []);

  // Handle checked for add member
  const handleChecked = (id: string) => {
    if (checkedUsers.includes(id)) {
      removeCheckedUser(id);
      return;
    }
    addCheckedUser(id);
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
    setIsOpenMemberModal(false);
  }, [chatAvatar, chatName, checkedUsers, currentUser]);

  return (
    <>
      <div className="mt-auto p-2">
        <Button
          name="New Chat"
          onClick={handleToggleNewChatModal}
          iconLeft={faPlus}
          size={SIZE.LARGE}
          variant={TYPE.SECOND}
        />
      </div>
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
          onChecked={handleChecked}
          users={users}
          profiles={profiles}
        />
      </Modal>
    </>
  );
};

export default AddGroupChat;
