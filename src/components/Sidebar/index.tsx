import { ReactNode } from 'react';

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return <div className="bg-tertiary w-full max-w-sidebar h-screen border-r">{children}</div>;
};

export default Sidebar;
