import { ReactNode } from 'react';
import { clsx } from 'clsx';

// FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChipProps {
  children: ReactNode;
  styles?: string;
  icon?: IconDefinition;
  onClick?: () => void;
}

const Chip = ({ children, styles, icon, onClick }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'max-w-40 text-center truncate py-2 px-4 rounded-3xl shadow-chip font-medium text-md bg-white text-dark cursor-pointer',
        styles
      )}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} className="ml-5" />}
    </div>
  );
};

export default Chip;
