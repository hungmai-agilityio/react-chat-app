import { memo, useMemo } from 'react';

// Interfaces
import { IMessage } from '@/interfaces';

// Components
import Divider from '@/components/Divider';
import Chip from '@/components/Chip';
import { Message } from '@/components/Message';

interface GroupedMessagesProps {
  messages: IMessage[];
  userProfiles: Map<string, { name: string; avatar: string }>;
  currentUser: string;
  onEdit?: (item: IMessage) => void;
  onDelete?: (id: string) => void;
}

export const GroupedMessages = memo(
  ({
    messages,
    userProfiles,
    currentUser,
    onEdit,
    onDelete
  }: GroupedMessagesProps) => {
    const handleEdit = (item: IMessage) => {
      if (onEdit) {
        onEdit(item);
      }
    };

    const handleRemove = (id: string) => {
      if (onDelete) {
        onDelete(id);
      }
    };
    // render and group messages by date
    const groupedMessages = useMemo(() => {
      if (!messages.length) return [];

      const grouped: { [key: string]: IMessage[] } = {};

      messages.forEach((message) => {
        const date = new Date(message.time_stamp);
        const dateString = date.toDateString();

        if (!grouped[dateString]) {
          grouped[dateString] = [];
        }
        grouped[dateString].push(message);
      });

      return Object.keys(grouped).map((date) => ({
        date,
        messages: grouped[date]
      }));
    }, [messages]);

    return (
      <>
        {groupedMessages.map((group) => (
          <div key={group.date}>
            <Divider>
              <Chip>
                <p>{group.date}</p>
              </Chip>
            </Divider>
            {group.messages.map((item) => {
              const { name, avatar } = userProfiles.get(item.sender) || {
                name: '',
                avatar: ''
              };

              return (
                <Message
                  key={item.id}
                  item={item}
                  isCurrentUser={item.sender === currentUser}
                  avatar={avatar}
                  name={name}
                  isActive
                  onEdit={handleEdit}
                  onDelete={handleRemove}
                />
              );
            })}
          </div>
        ))}
      </>
    );
  }
);
