import { clsx } from 'clsx';

// Constants
import { SIZE } from '@/constants';

interface AvatarProps {
  avatar?: string;
  name?: string;
  size?: SIZE.SMALL | SIZE.LARGE;
  styles?: string;
  circle?: boolean;
  onClick?: () => void;
}

const Avatar = ({
  avatar,
  name,
  size,
  styles,
  circle,
  onClick
}: AvatarProps) => {
  const nameAvatar = name ? name.charAt(0).toUpperCase() : '';

  const sizeClasses = {
    [SIZE.SMALL]: 'w-avatar-sm h-avatar-sm text-lg',
    [SIZE.LARGE]: 'w-avatar-lg h-avatar-lg text-8xl'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];

  if (!avatar) {
    return (
      <div
        data-testid="avatar"
        onClick={onClick}
        className={clsx(
          'text-primary bg-gray-300 flex items-center justify-center font-semibold',
          circle && 'rounded-full',
          styles,
          sizeClass
        )}
      >
        {nameAvatar}
      </div>
    );
  }

  return (
    <img
      data-testid="avatar"
      onClick={onClick}
      src={avatar}
      alt={name}
      className={clsx(
        'object-cover font-bold',
        circle && 'rounded-full',
        styles,
        sizeClass
      )}
    />
  );
};

export default Avatar;
