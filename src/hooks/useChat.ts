/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../fireBase/config';

// Interfaces
import { IChat } from '@/interfaces';

// Services
import { getChats } from '@/services';

// Constants
import { END_POINT } from '@/constants';

export const useChats = () => {
  const { CHAT } = END_POINT;

  const { data, error } = useSWR<IChat[]>(CHAT, getChats);

  useEffect(() => {
    const chatsCollection = collection(db, CHAT);

    const unsubscribe = onSnapshot(chatsCollection, (querySnapshot) => {
      const chats = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as IChat[];

      mutate(CHAT, chats, false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    chats: data,
    error,
  };
};