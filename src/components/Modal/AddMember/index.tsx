import { ChangeEvent, useState, useMemo, useCallback } from 'react';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Components
import Checkbox from '@/components/Checkbox';
import { ItemUser } from '@/components/Item';
import Search from '@/components/Search';
import Divider from '@/components/Divider';

// Utils
import { debounce } from '@/utils';

interface AddMemberProps {
  users: IUser[];
  profiles: Record<string, IProfile>;
  onChecked: (id: string) => void;
  isActive: boolean;
  currentUserId: string;
  checkedUsers: string[];
}

const AddMember = ({
  users,
  profiles,
  onChecked,
  isActive,
  currentUserId,
  checkedUsers
}: AddMemberProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('');

  // Creates a debounced version of the search function.
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearchValue(value);
    }),
    []
  );

  /**
   * Handles changes to the search input.
   * Updates the searchValue state and triggers the debounced search function.
   * @param event - The input change event.
   */
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    debouncedSearch(newValue);
  };

  // Filters the list of users based on the search query.
  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => user.id !== currentUserId)
      .filter((user) =>
        user.userName.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
  }, [users, debouncedSearchValue, currentUserId]);

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
        <Search onChange={handleSearchChange} value={searchValue} />
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
