import { Suspense, useCallback, useState } from 'react';

// Components
import { Panel, Spinner, Tabs } from '@/components';

// Constants
import { LIST_TAB_USERS } from '@/constants';

// Layouts + Pages
import ChatArea from '@/layouts/ChatArea';
import { ChatSide, UserSide } from '@/layouts/Sidebar';

const Layout = () => {
  const [value, setValue] = useState<string>('1');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');

  // Handle change tab in sidebar
  const handleChangeTab = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setValue(event.currentTarget.value);
    },
    []
  );

  // Handle selected user to open new chat area
  const handleSelectedRoom = useCallback((id: string, isUser: boolean) => {
    if (!isUser) {
      setSelectedRoom(id);
      setSelectedUser('');
      return;
    }
    setSelectedUser(id);
    setSelectedRoom('');
  }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="bg-tertiary w-full max-w-sidebar h-screen border-r">
        <Tabs list={LIST_TAB_USERS} index={value} onClick={handleChangeTab} />
        <Panel index={value} tabIndex="1">
          <Suspense fallback={<Spinner />}>
            <ChatSide onSelectRoom={handleSelectedRoom} />
          </Suspense>
        </Panel>
        <Panel index={value} tabIndex="2">
          <Suspense fallback={<Spinner />}>
            <UserSide onSelected={handleSelectedRoom} />
          </Suspense>
        </Panel>
      </aside>
      <ChatArea selectedRoom={selectedRoom} selectedUser={selectedUser} />
    </div>
  );
};

export default Layout;
