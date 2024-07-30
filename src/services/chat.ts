import {
  addDoc,
  arrayRemove,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from '../../fireBase/config';

// Interfaces
import { ApiResponse, IChat, IMessage } from '@/interfaces';

// Constants
import { END_POINT } from '@/constants';

/** Get all chats by user ID
 * @param {string} userId
 * @returns {Promise<ApiResponse<IChat[]>>}
 */
export const getChatsByUserId = async (
  userId: string
): Promise<ApiResponse<IChat[]>> => {
  try {
    const chatsCollection = collection(db, END_POINT.CHAT);
    const chatQuery = query(
      chatsCollection,
      where('members', 'array-contains', userId)
    );
    const querySnapshot = await getDocs(chatQuery);

    const chats: IChat[] = querySnapshot.docs.map((doc) => ({
      ...doc.data()
    })) as IChat[];

    return {
      data: chats,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Create chat
 * @param {IChat} chatData
 * @returns {Promise<ApiResponse<IChat>>}
 */
export const createChat = async (
  chatData: IChat
): Promise<ApiResponse<IChat>> => {
  try {
    await addDoc(collection(db, END_POINT.CHAT), chatData);

    return {
      data: chatData,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/** Get chat by room id
 * @param {string} chatId
 * @returns {Promise<ApiResponse<DocumentData >>}
 */
export const getChatById = async (
  chatId: string
): Promise<ApiResponse<IChat>> => {
  try {
    const chatsCollection = collection(db, END_POINT.CHAT);
    const queryData = query(chatsCollection, where('id', '==', chatId));
    const querySnapshot = await getDocs(queryData);
    const chatData = querySnapshot.docs[0].data() as IChat;

    return {
      data: chatData,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Update chat information by field id
 * @param {string} id - field id of the document to be updated
 * @param {Object} data - transmission data
 * @returns {Promise<Object>}
 */
export const updateChatInfo = async <T>(id: string, data: Partial<T>) => {
  try {
    const queryData = query(
      collection(db, END_POINT.CHAT),
      where('id', '==', id)
    );
    const querySnapshot = await getDocs(queryData);
    const docRef = querySnapshot.docs[0].ref;

    await updateDoc(docRef, data);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

/**
 * Remove a member from chat members list
 * @param chatId - ID of the chat
 * @param memberId - ID of the member to be removed
 * @returns {Promise<ApiResponse<IChat>>}
 */
export const removeMemberFromChat = async (
  chatId: string,
  memberId: string
): Promise<ApiResponse<IChat>> => {
  try {
    const chatQuery = query(
      collection(db, END_POINT.CHAT),
      where('id', '==', chatId)
    );
    const chatSnapshot = await getDocs(chatQuery);
    const chatDoc = chatSnapshot.docs[0];

    await updateDoc(chatDoc.ref, {
      members: arrayRemove(memberId)
    });

    const updatedChat = (await getDoc(chatDoc.ref)).data() as IChat;
    return {
      data: updatedChat,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Remove a member from chat members list or remove chat room
 * @param chatId - ID of the chat
 * @param memberId - ID of the member to be removed
 * @returns {Promise<ApiResponse<IChat>>}
 */
export const UserLeaveGroup = async (
  chatId: string,
  memberId: string
): Promise<ApiResponse<null>> => {
  try {
    const { data } = await removeMemberFromChat(chatId, memberId);

    if (data?.members.length === 0) {
      const chatQuery = query(
        collection(db, END_POINT.CHAT),
        where('id', '==', chatId)
      );
      const chatSnapshot = await getDocs(chatQuery);
      const chatDoc = chatSnapshot.docs[0];

      await deleteDoc(chatDoc.ref);

      const messagesQuery = query(
        collection(db, END_POINT.MESSAGE),
        where('roomId', '==', chatId)
      );
      const messagesSnapshot = await getDocs(messagesQuery);

      const removeMessage = messagesSnapshot.docs.map((doc) =>
        deleteDoc(doc.ref)
      );

      await Promise.all(removeMessage);
    }

    return {
      data: null,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Sends a message to the 'messages' collection in Firestore.
 * @param {IMessage} message
 * @returns
 */
export const sendMessage = async (
  message: IMessage
): Promise<ApiResponse<IMessage>> => {
  try {
    const messageRef = await addDoc(collection(db, END_POINT.MESSAGE), message);
    const docSnapshot = await getDoc(messageRef);
    const newMessage = docSnapshot.data() as IMessage;

    const responseData = {
      ...newMessage
    };

    return {
      data: responseData,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Get messages by room id
 * @param {string} roomId
 */
export const getMessagesByRoomId = (
  roomId: string,
  callback: (messages: IMessage[]) => void
) => {
  const messagesRef = collection(db, END_POINT.MESSAGE);
  const queryData = query(messagesRef, where('roomId', '==', roomId), orderBy('time_stamp', 'desc'));

  const unsubscribe = onSnapshot(queryData, (snapshot) => {
    const messages: IMessage[] = snapshot.docs.map((doc) => ({
      ...doc.data() as IMessage,
    }));
    callback(messages);
  });

  return unsubscribe;
}

/**
 * Get last messages by room id
 * @param {string} roomId
 * @returns { Promise<ApiResponse<IMessage>>}
 */
export const getLastMessagesByRoomId = async (
  roomId: string[]
): Promise<ApiResponse<Record<string, IMessage>>> => {
  try {
    const lastMessages: Record<string, IMessage> = {};

    const promises = roomId.map(async (roomId) => {
      const messagesRef = collection(db, END_POINT.MESSAGE);
      const queryData = query(messagesRef, where('roomId', '==', roomId), orderBy('time_stamp', 'desc'), limit(1));
      const querySnapshot = await getDocs(queryData);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const message = doc.data() as IMessage;
        lastMessages[roomId] = { ...message };
      }
    });

    await Promise.all(promises);

    return {
      data: lastMessages,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error

    };
  }
};

/**
 * Fetches the room ID for a one-on-one chat between two users.
 *
 * @param {string} selectedId - The ID of the selected user.
 * @param {string} currentUser - The ID of the current user.
 * @returns {Promise<ApiResponse<string | null>>}
 */
export const getRoomIdForUsers = async (
  selectedId: string,
  currentUser: string
): Promise<ApiResponse<string | null>> => {
  try {
    const queryData = query(
      collection(db, END_POINT.CHAT),
      where('isGroup', '==', false),
      where('members', 'array-contains', selectedId)
    );

    const querySnapshot = await getDocs(queryData);

    const existingChat = querySnapshot.docs.find((doc) => {
      const chatData = doc.data() as IChat;
      return chatData.members.includes(currentUser);
    });

    return {
      data: (existingChat?.data() as IChat).id,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Update message
 * @param {IMessage} data
 * @returns {Promise<ApiResponse<IMessage>>}
 */
export const updateMessage = async (
  data: IMessage
): Promise<ApiResponse<Partial<IMessage>>> => {
  try {
    const messagesCollectionRef = collection(db, END_POINT.MESSAGE);

    const queryData = query(messagesCollectionRef, where("id", "==", data.id));
    const querySnapshot = await getDocs(queryData);

    const docRef = querySnapshot.docs[0].ref;

    await updateDoc(docRef, {
      message: data.message,
      isEdit: data.isEdit
    });

    return {
      data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Remove message
 * @param {string} messageId
 */
export const removeMessage = async (
  messageId: string,
) => {
  try {
    const msg = query(
      collection(db, END_POINT.MESSAGE),
      where('id', '==', messageId)
    );
    const msgSnap = await getDocs(msg);
    const msgDoc = msgSnap.docs[0];

    await deleteDoc(msgDoc.ref);
    return {
      success: true,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};