import { memo } from 'react';

// Components
import { Tab, ITab } from '@/components/Tabs/Tab';

interface TabsProps {
  list: Omit<ITab, 'index' | 'onClick'>[];
  index: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tabs = memo(({ list, onClick, index }: TabsProps) => (
  <div className="w-full border-b-xs border-gray-200 flex items-center">
    {list.map((item) => (
      <Tab
        key={item.value}
        value={item.value}
        title={item.title}
        index={index}
        onClick={onClick}
      />
    ))}
  </div>
));
