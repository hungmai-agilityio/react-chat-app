import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../fireBase/config';
import { END_POINT } from '@/constants';

// Services
import { updateUserStatus } from '@/services';

export const useOnlineStatus = (currentUser?: string) => {
  const [status, setStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!currentUser) return;

    const setUserOnline = async () => {
      await updateUserStatus(currentUser, true);
    };

    const setUserOffline = async () => {
      await updateUserStatus(currentUser, false);
    };

    setUserOnline();

    const usersRef = collection(db, END_POINT.USER);
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const newPresenceStatus: Record<string, boolean> = {};
      snapshot.forEach((doc) => {
        newPresenceStatus[doc.id] = doc.data().isOnline || false;
      });
      setStatus(newPresenceStatus);
    });

    const handleDisconnect = async () => {
      await setUserOffline();
    };

    window.addEventListener('beforeunload', handleDisconnect);

    return () => {
      unsubscribe();
      window.removeEventListener('beforeunload', handleDisconnect);
    };
  }, [currentUser]);

  return status;
};
