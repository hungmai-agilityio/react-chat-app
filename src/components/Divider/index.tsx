import { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
}

const Divider = ({ children }: DividerProps) => {
  const styleDefault = 'border-b border-gray-300 w-full';

  return (
    <div className="flex items-center">
      <div className={styleDefault} />
      {children && <div className="px-2">{children}</div>}
      <div className={styleDefault} />
    </div>
  );
};

export default Divider;
