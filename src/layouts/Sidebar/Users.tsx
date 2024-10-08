import {
  ChangeEvent,
  Suspense,
  lazy,
  useEffect,
  useMemo,
  useState
} from 'react';

// Font Awsomes
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Hooks and Stores
import { useUsersWithProfiles } from '@/hooks';
import { useAuthStore } from '@/stores';

// Interfaces
import { IUser } from '@/interfaces';

// Utils
import { debounce, searchFilter } from '@/utils';

// Components
import { Search, Spinner } from '@/components';
const ListUser = lazy(() => import('@/components/UserRoom/List'));

interface UserProps {
  onSelected: (id: string, isUser: boolean) => void;
}

const UserSide = ({ onSelected }: UserProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // Store
  const { users, profiles } = useUsersWithProfiles();
  const { currentUser, fetchUserData } = useAuthStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Debounce function for search
  const debouncedSetSearchValue = debounce((value: string) => {
    setDebouncedSearch(value);
  });

  const filterUsers = useMemo(
    () => searchFilter<IUser>(users, debouncedSearch, ['userName']),
    [users, debouncedSearch]
  );

  // Handle search input change
  const handleChangeValueUsers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    debouncedSetSearchValue(value);
  };

  return (
    <>
      <div className="p-3">
        <Search
          onChange={handleChangeValueUsers}
          value={searchValue}
          icon={faSearch}
        />
      </div>
      <div className="h-sidebar-user scrollbar overflow-y-auto">
        <Suspense fallback={<Spinner />}>
          <ListUser
            data={filterUsers}
            profiles={profiles}
            onSelected={onSelected}
            currentUser={currentUser?.id}
          />
        </Suspense>
      </div>
    </>
  );
};

export default UserSide;
