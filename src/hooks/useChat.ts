import { useEffect, useState } from 'react';

// Firebases
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../fireBase/config';

// Interfaces
import { IChat } from '@/interfaces';

// Constants
import { END_POINT } from '@/constants';

export const useChats = (): IChat[] => {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, END_POINT.CHAT),
      (snapshot) => {
        const chatsData = snapshot.docs.map((doc) => {
          const data = doc.data() as IChat;

          return { ...data, id: data.id };
        });
        setChats(chatsData);
      }
    );

    return unsubscribe;
  }, []);

  return chats;
};
