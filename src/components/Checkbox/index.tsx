import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface CheckboxProps {
  id: string;
  children: ReactNode;
  isChecked: boolean;
  onChange: (id: string) => void;
}

const Checkbox = ({ id, children, isChecked, onChange }: CheckboxProps) => {
  // Handle checkbox
  const handleChecked = () => {
    onChange(id);
  };

  return (
    <div
      id={id}
      className={clsx('pl-3 flex items-center gap-4 w-full', {
        'bg-blue-50': isChecked
      })}
    >
      <input
        type="checkbox"
        checked={isChecked}
        className="w-5 h-5 accent-primary"
        onChange={handleChecked}
      />
      <label onClick={handleChecked} className="w-full">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
