import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

// Hooks
import { useOutsideClick } from '@/hooks';

// Components
import { Button, Input } from '@/components';

// Interfaces
import { IMessage, IChat } from '@/interfaces';

// Services
import { createChat, sendMessage, updateMessage } from '@/services';

// Constants
import { SIZE, TYPE } from '@/constants';

interface ChatMessageProps {
  currentUserId: string;
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
  isDisabled: boolean;
  chatData?: IChat | null;
  selectedUser?: string;
  chats?: IChat[];
  handleCancelEdit: () => void;
  isEdit: boolean;
  editMessage?: IMessage | null;
}

const ChatMessage = ({
  currentUserId,
  setMessages,
  isDisabled,
  chatData,
  selectedUser,
  chats,
  handleCancelEdit,
  isEdit,
  editMessage
}: ChatMessageProps) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLDivElement>(null);

  // Hook to handle outside click
  useOutsideClick({
    ref: inputRef,
    handler: () => setIsFocused(false)
  });

  // Initialize value if editing
  useEffect(() => {
    if (isEdit && editMessage) {
      setValue(editMessage.message);
    }
  }, [isEdit, editMessage]);

  // Handle change value message
  const handleChangeValue = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  // Handle send message
  const handleSend = useCallback(async () => {
    if (!value.trim().length) return;

    let roomId = chatData?.id;

    if (!roomId && selectedUser) {
      const existingChat = chats?.find(
        (chat) =>
          !chat.isGroup &&
          chat.members.includes(currentUserId) &&
          chat.members.includes(selectedUser)
      );

      if (!existingChat) {
        const newChat: IChat = {
          id: uuidv4(),
          title: '',
          avatar: '',
          members: [currentUserId, selectedUser],
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
      sender: currentUserId,
      time_stamp: new Date(),
      roomId: roomId || ''
    };

    await sendMessage(newMessage);

    setMessages((prevMessages: IMessage[]) => {
      const messageExists = prevMessages.some(
        (msg) => msg.id === newMessage.id
      );
      if (messageExists) return prevMessages;

      return [...prevMessages, newMessage];
    });
    setValue('');
  }, [value, currentUserId, chatData, selectedUser, chats]);

  // Handle update message
  const handleUpdateMessage = useCallback(async () => {
    if (!value.trim().length || !editMessage) return;

    const updatedMessage: Partial<IMessage> = {
      id: editMessage.id,
      message: value,
      sender: currentUserId,
      isEdit: true
    };

    const { data } = await updateMessage(updatedMessage as IMessage);

    if (data) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editMessage.id
            ? { ...msg, message: value, isEdit: true }
            : msg
        )
      );
    }

    setValue('');
    handleCancelEdit();
  }, [value, editMessage, currentUserId, handleCancelEdit]);

  // Handle press enter to send message
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isEdit) {
        handleUpdateMessage();
      } else {
        handleSend();
      }
    }
  };

  return (
    <div
      ref={inputRef}
      onFocus={() => setIsFocused(true)}
      className={clsx('relative p-2 transition-all')}
    >
      <Input
        htmlFor="message-value"
        onChange={handleChangeValue}
        name="message"
        value={value}
        variant={TYPE.SECOND}
        disabled={isDisabled}
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
              disabled={value.length === 0 || isDisabled}
              size={SIZE.MINI}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
