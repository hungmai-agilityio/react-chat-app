import { clsx } from 'clsx';
import { memo } from 'react';

// FontAwesome
import {
  faCircle,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants
import { MESSAGE_OPTIONS, POSITION } from '@/constants';

// Interfaces
import { IMessage } from '@/interfaces';

// Utils
import { timeStampConversion } from '@/utils';

// Components
import Avatar from '@/components/Avatar';
import Dropdown, { DropdownItem } from '@/components/Dropdown';

interface MessageProps {
  item: IMessage;
  isCurrentUser: boolean;
  avatar: string;
  name: string;
  isActive?: boolean;
  onEdit?: (item: IMessage) => void;
  onDelete?: (id: string) => void;
}

export const Message = memo(
  ({
    item,
    isCurrentUser,
    avatar,
    name,
    isActive,
    onEdit,
    onDelete
  }: MessageProps) => {
    /**
     * Handles selection of a dropdown item.
     * @param {DropdownItem} selectedItem
     */
    const handleActionSelect = (selectedItem: DropdownItem) => {
      switch (selectedItem.value) {
        case 'editMess':
          onEdit?.(item);
          break;
        case 'deleteMess':
          onDelete?.(item.id);
          break;
        default:
          break;
      }
    };

    return (
      <div
        className={clsx(
          'relative flex mb-5',
          isCurrentUser ? 'justify-end' : 'justify-start'
        )}
      >
        <div
          className={clsx('flex gap-3 max-w-message', {
            'flex-row-reverse': isCurrentUser
          })}
        >
          <div className="relative w-full max-w-avatar">
            <Avatar avatar={avatar} name={name} circle />
            <FontAwesomeIcon
              icon={faCircle}
              className={clsx(
                'absolute text-gray-400 border-xs border-white rounded-full top-6 left-7',
                { 'text-green-500': isActive }
              )}
            />
          </div>
          <div className="w-full">
            <div
              className={clsx('flex items-baseline gap-2', {
                'justify-end': isCurrentUser
              })}
            >
              <p>{name}</p>
              <span className="text-xs text-gray-400">
                {timeStampConversion(item.time_stamp)}
              </span>
            </div>

            <div
              className={clsx(
                'p-2 text-dark mt-2 group pr-7 max-w-max',
                isCurrentUser
                  ? 'bg-second rounded-mess-user float-right'
                  : 'bg-tertiary rounded-mess-member'
              )}
            >
              {item.message}{' '}
              {item.isEdit && (
                <span className="text-sm text-gray-500">(edited)</span>
              )}
            </div>

            {isCurrentUser && (
              <div className="absolute top-6 right-7">
                <Dropdown
                  icon={faEllipsisVertical}
                  items={MESSAGE_OPTIONS}
                  onSelect={handleActionSelect}
                  position={POSITION.TOP_RIGHT}
                  isHover={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
