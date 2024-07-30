import { clsx } from 'clsx';

// FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  icon: IconDefinition;
  onClick?: () => void;
  styles?: string;
  isHover?: boolean;
}

const Icon = ({ icon, styles, isHover = true, onClick }: IconProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center cursor-pointer text-gray-400 h-10 w-10 rounded-full',
        { 'hover:text-dark hover:bg-tertiary': isHover },
        styles
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Icon;
