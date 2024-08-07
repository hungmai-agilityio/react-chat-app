import { memo } from 'react';

// Interfaces
import { IChat, IMessage, IProfile, IUser } from '@/interfaces';

// Hooks
import { useUsersWithProfiles, useOnlineStatus } from '@/hooks';

// Components
import { UserProps, UserRoom } from '@/components/UserRoom';

interface ListProps extends UserProps {
  data: (IUser | IChat)[];
  profiles: Record<string, IProfile>;
  currentUser?: string;
  onSelected: (id: string, isUser: boolean) => void;
  messages?: IMessage[];
}

const ListUser = memo(
  ({ data, profiles, onSelected, currentUser, messages }: ListProps) => {
    const { users } = useUsersWithProfiles();
    const status = useOnlineStatus(currentUser);

    const getUserDetails = (item: IUser | IChat) => {
      const id = item.id;
      const isUser = 'userName' in item;
      const name = isUser ? item.userName : item.title;
      const avatar = isUser ? profiles[id]?.avatar : item.avatar;

      if (isUser || item.isGroup) {
        return { name, avatar, otherUserId: '' };
      }

      const otherMemberId = item.members.find(
        (member) => member !== currentUser
      );

      const otherUser = users?.find((user) => user.id === otherMemberId);

      if (!otherUser) {
        return { name, avatar, otherUserId: '' };
      }

      return {
        name: item.title || otherUser.userName,
        avatar: item.avatar || profiles[otherUser.id]?.avatar,
        otherUserId: otherUser.id
      };
    };

    return data.map((item) => {
      const { name, avatar, otherUserId } = getUserDetails(item);
      const id = item.id;
      const isUser = 'userName' in item;
      const lastMessage = messages?.find((msg) => msg.roomId === id);
      const isActive =
        status[id] || (otherUserId && status[otherUserId]) || false;

      return (
        <UserRoom
          key={id}
          id={id}
          isCurrentUser={item.id === currentUser}
          name={name}
          avatar={avatar}
          isActive={isActive}
          path={`/chat/${id}`}
          onSelect={onSelected.bind(null, id, isUser)}
          isGroup={!isUser && item.isGroup}
          message={lastMessage?.message}
          time_stamp={lastMessage?.time_stamp.toString()}
        />
      );
    });
  }
);

export default ListUser;
