import { useState, useRef, ReactNode } from 'react';
import { clsx } from 'clsx';

// FontAwesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Hooks
import { useOutsideClick } from '@/hooks';

// Constants
import { POSITION } from '@/constants';

// Components
import Icon from '@/components/Button/Icon';

export interface DropdownItem {
  value: string;
  label: string;
  icon?: IconDefinition;
}

interface DropdownProps {
  children?: ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  icon?: IconDefinition;
  styles?: string;
  isHover?: boolean;
  position?:
    | POSITION.TOP_LEFT
    | POSITION.TOP_RIGHT
    | POSITION.BOT_LEFT
    | POSITION.BOT_RIGHT;
}

const Dropdown = ({
  children,
  items,
  onSelect,
  isHover,
  icon,
  styles,
  position
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const positionClass = {
    [POSITION.TOP_RIGHT]: 'top-12 -left-32',
    [POSITION.TOP_LEFT]: 'top-12 left-12',
    [POSITION.BOT_RIGHT]: '-top-20 right-12',
    [POSITION.BOT_LEFT]: '-top-20 left-12'
  };

  const setPosition = positionClass[position || POSITION.TOP_RIGHT];

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false)
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  /**
   * Handle select item in dropdown options
   * @param {DropdownItem} item
   */
  const handleItemSelect = (item: DropdownItem) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div className={clsx('relative', styles)} ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer px-4"
        onClick={toggleDropdown}
      >
        {children}
        {icon && <Icon icon={icon} isHover={isHover} />}
      </div>
      {isOpen && (
        <ul
          className={clsx(
            'w-40 bg-white shadow-xl rounded-md z-20 absolute',
            setPosition
          )}
        >
          {items.map((item) => (
            <li
              key={item.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500"
              onClick={handleItemSelect.bind(null, item)}
            >
              {item.icon && (
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
              )}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
