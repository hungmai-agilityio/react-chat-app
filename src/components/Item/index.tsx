import { memo } from 'react';
import { clsx } from 'clsx';

// Constants
import { SIZE } from '@/constants';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

// Components
import Avatar from '@/components/Avatar';
import { UserProps } from '@/components/UserRoom';
import Icon from '@/components/Button/Icon';

export interface ItemUserProps extends UserProps {
  isCurrentUser?: boolean;
  isItemChecked?: boolean;
  styles?: string;
  isOwner?: boolean;
  onRemove?: (id: string) => void;
}

export const ItemUser = memo(
  ({
    id,
    name,
    avatar,
    isActive,
    isCurrentUser,
    isItemChecked,
    styles,
    isGroup,
    isOwner,
    onRemove
  }: ItemUserProps) => {
    const handleRemove = () => {
      if (isOwner && onRemove) {
        onRemove(id!);
      }
    };
    return (
      <div className={clsx('flex items-center justify-between', styles)}>
        <div
          key={id}
          className={clsx('text-sm px-3 w-20', {
            'flex items-center gap-3 w-full h-item': !isItemChecked
          })}
        >
          <div className={clsx('relative', { 'mb-2': isItemChecked })}>
            <Avatar
              name={name}
              avatar={avatar}
              circle
              size={SIZE.SMALL}
              styles="my-0 mx-auto"
            />
            {!isItemChecked && (
              <FontAwesomeIcon
                icon={faCircle}
                className={clsx(
                  'absolute text-gray-400 border-xs border-white rounded-full top-6 left-7',
                  { 'text-green-500': isActive }
                )}
              />
            )}
          </div>

          {isItemChecked ? (
            <p className="inline-block max-w-28 whitespace-normal h-7 text-xs w-full overflow-hidden text-center">
              {name}
            </p>
          ) : (
            <div className="flex flex-col truncate">
              <p>
                {name}{' '}
                {isCurrentUser && <span className="text-green-600">(You)</span>}
              </p>
            </div>
          )}
        </div>

        {isGroup && isOwner && !isCurrentUser && (
          <Icon icon={faXmark} onClick={handleRemove} isHover />
        )}
      </div>
    );
  }
);
