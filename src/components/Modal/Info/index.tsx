// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import Avatar from '@/components/Avatar';
import { ItemUser, ItemUserProps } from '@/components/Item';
import Divider from '@/components/Divider';
import MemoizedButton from '@/components/Button';

interface InfoProps {
  currentUserId: string;
  member: ItemUserProps[];
  avatar: string;
  name: string;
  count?: number;
  isGroup?: boolean;
  onRemove?: (id: string) => void;
  isOwner?: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ModalInfo = ({
  member,
  avatar,
  name,
  count,
  currentUserId,
  isGroup,
  onRemove,
  isOwner,
  onClick
}: InfoProps) => {
  const listMember = member.map((user) => ({
    ...user,
    isActive: user.isActive ?? false,
    isCurrentUser: user.id === currentUserId,
    isGroup: isGroup
  }));

  return (
    <div className="mt-3 relative">
      <div className="flex justify-center">
        <Avatar name={name} avatar={avatar} size={SIZE.LARGE} />
      </div>
      <div className="my-5 mx-4 h-modal-md">
        <p>Members {`(${count})`}</p>
        <div className="h-modal-md overflow-y-auto scrollbar">
          {listMember.map((member) => (
            <div key={member.id}>
              <ItemUser
                id={member.id}
                name={member.name}
                avatar={member.avatar}
                isActive={member.isActive}
                isCurrentUser={member.isCurrentUser}
                isGroup={member.isGroup}
                isOwner={isOwner}
                onRemove={onRemove}
                styles="hover:bg-blue-50 w-full"
              />
              <Divider />
            </div>
          ))}
        </div>
      </div>
      {isGroup && (
        <div className="absolute -bottom-20 left-4">
          <MemoizedButton
            name="Leave chat"
            onClick={onClick!}
            variant={TYPE.SECOND}
            styles="text-red-400 font-semibold"
          />
        </div>
      )}
    </div>
  );
};

export default ModalInfo;
