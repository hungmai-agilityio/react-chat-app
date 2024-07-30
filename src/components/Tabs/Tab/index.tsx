import { memo } from 'react';
import { clsx } from 'clsx';

export interface ITab {
  index: string;
  value: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tab = memo(({ value, index, title, onClick }: ITab) => (
  <button
    value={value}
    className={clsx(
      'text-primary w-full h-14 font-semibold text-base cursor-pointer',
      { 'border-b-2 border-b-primary': index === value }
    )}
    onClick={onClick}
  >
    {title}
  </button>
));
