import { memo } from 'react';

// Constants
import { POSITION, SIZE, USER_OPTIONS } from '@/constants';

// Components
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import Avatar from '@/components/Avatar';

interface UserMenuProps {
  name: string;
  avatar: string;
  onSelect?: (item: DropdownItem) => void;
  position?:
    | POSITION.TOP_LEFT
    | POSITION.TOP_RIGHT
    | POSITION.BOT_LEFT
    | POSITION.BOT_RIGHT;
}

const UserMenu = memo(({ name, avatar, onSelect, position }: UserMenuProps) => {
  return (
    <>
      <Dropdown items={USER_OPTIONS} onSelect={onSelect} position={position}>
        <div className="flex items-center gap-3 w-full">
          <Avatar
            avatar={avatar}
            name={name}
            size={SIZE.SMALL}
            circle
            styles="bg-dark"
          />
          <p className="font-semibold text-primary text-lg w-32 truncate">
            {name}
          </p>
        </div>
      </Dropdown>
    </>
  );
});

export default UserMenu;
