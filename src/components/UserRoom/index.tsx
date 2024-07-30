import { memo } from 'react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

// Constants
import { SIZE } from '@/constants';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// Utils
import { timeStampConversion } from '@/utils';

// Components
import Avatar from '@/components/Avatar';

export interface UserProps {
  id?: string;
  isCurrentUser?: boolean;
  name?: string;
  avatar?: string;
  isActive?: boolean;
  isGroup?: boolean;
  isGroupChat?: boolean;
  time_stamp?: string;
  message?: string;
  path?: string;
  onSelect?: () => void;
}

export const UserRoom = memo(
  ({
    id,
    isCurrentUser,
    name,
    avatar,
    isActive,
    isGroup,
    time_stamp,
    message,
    path,
    onSelect
  }: UserProps) => {
    return (
      <NavLink
        key={id}
        to={path!}
        className="flex justify-between items-center w-full h-16 text-sm hover:bg-second px-3"
        onClick={onSelect}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar name={name} avatar={avatar} circle size={SIZE.SMALL} />
            {!isGroup && (
              <FontAwesomeIcon
                icon={faCircle}
                className={clsx(
                  'absolute text-gray-400 border-xs border-white rounded-full top-6 left-7',
                  { 'text-green-500': isActive },
                  { 'text-red-500': isCurrentUser }
                )}
              />
            )}
          </div>
          {message ? (
            <div>
              <p className="font-semibold text-sm w-36 truncate">
                {isGroup ? `${name}` : `PM: ${name}`}
              </p>
              <p className="w-36 truncate">{message || ''}</p>
            </div>
          ) : (
            <p>{name}</p>
          )}
        </div>
        <p>{time_stamp && timeStampConversion(time_stamp)}</p>
      </NavLink>
    );
  }
);
