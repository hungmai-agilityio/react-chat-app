import { ChangeEvent } from 'react';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Components
import Checkbox from '@/components/Checkbox';
import { ItemUser } from '@/components/Item';
import Search from '@/components/Search';
import Divider from '@/components/Divider';

interface AddMemberProps {
  users: IUser[];
  profiles: Record<string, IProfile>;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChecked: (id: string) => void;
  value: string;
  isActive: boolean;
  currentUserId: string;
  checkedUsers: string[];
}

const AddMember = ({
  users,
  profiles,
  onSearch,
  onChecked,
  value,
  isActive,
  currentUserId,
  checkedUsers
}: AddMemberProps) => {
  const filteredUsers = users.filter((user) => user.id !== currentUserId);

  return (
    <div className="max-h-modal-body overflow-hidden">
      {checkedUsers.length > 0 && (
        <div className="flex items-center p-3 gap-2 overflow-hidden hover:overflow-x-auto scrollbar">
          {users
            .filter((user) => checkedUsers.includes(user.id))
            .map((user) => {
              const profile = profiles[user.id];

              return (
                <ItemUser
                  key={user.id}
                  id={user.id}
                  name={user.userName}
                  avatar={profile?.avatar || ''}
                  isActive={isActive}
                  isItemChecked
                />
              );
            })}
        </div>
      )}
      <div className="bg-tertiary border-b-xs border-solid border-primary w-full px-4 py-1">
        <Search onChange={onSearch} value={value} />
      </div>
      <div className="h-modal-body hover:overflow-y-auto scrollbar">
        {filteredUsers.map((user) => {
          const profile = profiles[user.id];

          return (
            <div key={user.id}>
              <Checkbox
                id={user.id}
                onChange={onChecked}
                isChecked={checkedUsers.includes(user.id)}
              >
                <ItemUser
                  id={user.id}
                  name={user.userName}
                  avatar={profile?.avatar || ''}
                  isActive={isActive}
                />
              </Checkbox>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMember;
