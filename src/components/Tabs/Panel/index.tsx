import { memo, ReactNode } from 'react';

interface PanelProps {
  index: string;
  tabIndex: string;
  children: ReactNode;
}

export const Panel = memo(({ index, tabIndex, children }: PanelProps) => {
  if (index !== tabIndex) {
    return null;
  }

  return <div className='w-full'>{children}</div>;
});
