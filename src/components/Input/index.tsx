import { ChangeEvent, useRef } from 'react';
import { clsx } from 'clsx';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Constants
import { TYPE } from '@/constants';

// Components
import MemoizedIcon from '@/components/Button/Icon';

interface InputProps {
  label?: string;
  value?: string;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.TERTIARY;
  htmlFor?: string;
  placeholder?: string;
  name?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: () => void;
  message?: string;
  icon?: IconDefinition;
  styles?: string;
  isDisabled?: boolean;
  type?: string;
}

const Input = ({
  label,
  value,
  variant,
  htmlFor,
  placeholder,
  name,
  onChange,
  onClick,
  message,
  icon,
  styles,
  isDisabled,
  type = TYPE.TEXT
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const typeClasses = {
    [TYPE.PRIMARY]: 'h-11 border border-gray-400 rounded-md',
    [TYPE.SECOND]: 'h-10 border border-gray-400 focus:h-20 resize-none',
    [TYPE.TERTIARY]: 'h-10 border-b border-gray-400 text-center'
  };

  const commonClasses = 'w-full mt-1.5 outline-none p-3 focus:border-primary';
  const typeClass = typeClasses[variant || TYPE.PRIMARY];

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={htmlFor} className="font-bold leading-2-xs capitalize">
          {label}
        </label>
      )}
      <div className="relative">
        {variant === TYPE.SECOND ? (
          <textarea
            ref={textareaRef}
            id={htmlFor}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(
              'py-1 px-2 focus:h-20',
              commonClasses,
              typeClass,
              styles
            )}
            disabled={isDisabled}
          />
        ) : (
          <input
            ref={inputRef}
            id={htmlFor}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={clsx(commonClasses, typeClass, styles)}
            disabled={isDisabled}
          />
        )}
        {icon && (
          <MemoizedIcon
            icon={icon}
            onClick={onClick}
            styles="absolute top-2 right-2"
          />
        )}
      </div>
      {message && (
        <span className="text-red-500 mr-1 visible text-xs">{message}</span>
      )}
    </div>
  );
};

export default Input;
