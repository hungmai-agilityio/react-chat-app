import { clsx } from 'clsx';

// Constants
import { SIZE, TYPE } from '@/constants';

// FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SIZE.MINI | SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.TERTIARY;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  styles?: string;
}

const Button = ({
  name,
  size,
  variant,
  onClick,
  styles,
  disabled,
  iconLeft,
  iconRight
}: ButtonProps) => {
  const sizeClasses = {
    [SIZE.MINI]: 'w-24 h-9',
    [SIZE.SMALL]: 'w-32 h-10',
    [SIZE.MEDIUM]: 'w-40 h-9',
    [SIZE.LARGE]: 'w-full h-10'
  };

  const typeClasses = {
    [TYPE.PRIMARY]: 'bg-primary text-white',
    [TYPE.SECOND]: 'bg-tertiary text-primary',
    [TYPE.TERTIARY]: 'hover:bg-tertiary text-primary'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];
  const typeClass = typeClasses[variant || TYPE.PRIMARY];

  return (
    <button
      className={clsx(
        'font-semibold hover:brightness-90',
        disabled &&
          'bg-tertiary cursor-not-allowed border hover:filter-none text-stone-700',
        sizeClass,
        typeClass,
        styles
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} className="mr-2" />}
      {name}
      {iconRight && <FontAwesomeIcon icon={iconRight} className="ml-2" />}
    </button>
  );
};

export default Button;
