import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../../../fireBase/config';

// Constants
import { END_POINT } from '@/constants';

// Services
import {
  createChat,
  getChatById,
  getChatsByUserId,
  removeMemberFromChat,
  updateChatInfo,
  sendMessage,
  getMessagesByRoomId,
  getLastMessagesByRoomId,
  getRoomIdForUsers,
  updateMessage,
  removeMessage
} from '@/services';

// Interfaces
import { IChat, IMessage } from '@/interfaces';

// Mock Firebase functions
jest.mock('firebase/firestore');

describe('Chat Services', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const userId = 'DJR287-RWPTLJUQCV-429JO';
  const member = 'J22LFF-490GQWEOASG-34AM';
  const chat: IChat = {
    id: '21b06a53-63b1-4733-9036-aa4d3e88f944',
    members: [userId, member],
    avatar: '',
    isGroup: true,
    title: 'Group',
    owner: userId
  };
  const message: IMessage = {
    id: '21b06a53-41m4-7339-9036-aa4d3e88f944',
    roomId: chat.id,
    sender: userId,
    message: 'Hello',
    time_stamp: new Date('2020-10-01T15:37:01.791Z'),
    isEdit: false
  };
  const messages: IMessage[] = [message];

  describe('getChatsByUserId', () => {
    it('should retrieve chats for a user by userId', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ data: () => chat }]
      });
      const result = await getChatsByUserId(userId);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith(
        {},
        where('members', 'array-contains', userId)
      );
      expect(result.data).toEqual([chat]);
    });

    it('should handle errors when retrieving chats by userId', async () => {
      const error = new Error('Failed to get chats');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await getChatsByUserId(userId);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('createChat', () => {
    it('should create a new chat', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (addDoc as jest.Mock).mockResolvedValueOnce({ id: chat.id });

      const result = await createChat(chat);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(result.data).toEqual(chat);
    });

    it('should handle errors when creating a new chat', async () => {
      const error = new Error('Failed to create chat');
      (addDoc as jest.Mock).mockRejectedValueOnce(error);

      const result = await createChat(chat);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('getChatById', () => {
    it('should retrieve a chat by its ID', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ data: () => chat }]
      });

      const result = await getChatById(chat.id);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith({}, where('id', '==', chat.id));
      expect(result.data).toEqual(chat);
    });

    it('should handle errors when retrieving a chat by its ID', async () => {
      const error = new Error('Failed to get chat by ID');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await getChatById(chat.id);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('updateChatInfo', () => {
    it('should update chat information by ID', async () => {
      const updateName = { name: 'New Chat Name' };

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ ref: {} }]
      });
      (updateDoc as jest.Mock).mockResolvedValueOnce(undefined);

      const result = await updateChatInfo(chat.id, updateName);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith({}, where('id', '==', chat.id));
      expect(updateDoc).toHaveBeenCalledWith({}, updateName);
      expect(result.data).toEqual(updateName);
    });

    it('should handle errors when updating chat information', async () => {
      const updateName = { name: 'New Chat Name' };
      const error = new Error('Failed to update chat info');

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await updateChatInfo(chat.id, updateName);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('removeMemberFromChat', () => {
    it('should remove a member from chat and return updated chat', async () => {
      const updatedChat = { ...chat, members: [userId] };

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ ref: { id: chat.id, data: () => chat } }]
      });
      (updateDoc as jest.Mock).mockResolvedValueOnce(undefined);
      (getDoc as jest.Mock).mockResolvedValueOnce({
        data: () => updatedChat
      });

      const result = await removeMemberFromChat(chat.id, member);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith({}, where('id', '==', chat.id));
      expect(result.data).toEqual(updatedChat);
    });

    it('should return an error if there is an issue with removing the member', async () => {
      const error = new Error('Something went wrong');

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ ref: { id: chat.id, data: () => chat } }]
      });
      (updateDoc as jest.Mock).mockRejectedValueOnce(error);

      const result = await removeMemberFromChat(chat.id, member);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith({}, where('id', '==', chat.id));
      expect(result.data).toBeNull();
      expect(result.error).toBe(error);
    });
  });

  describe('sendMessage', () => {
    it('should send a message successfully', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (addDoc as jest.Mock).mockResolvedValueOnce({ id: message.id });
      (getDoc as jest.Mock).mockResolvedValueOnce({
        data: () => message
      });

      const result = await sendMessage(message);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.MESSAGE);
      expect(addDoc).toHaveBeenCalledWith({}, message);
      expect(result.data).toEqual(message);
    });

    it('should handle errors when sending a message', async () => {
      const error = new Error('Failed to send message');
      (addDoc as jest.Mock).mockRejectedValueOnce(error);

      const result = await sendMessage(message);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('getMessagesByRoomId', () => {
    it('should get messages by room ID successfully', () => {
      const callback = jest.fn();

      const mockTimestamp = {
        toDate: () => new Date('2020-10-01T15:37:01.791Z')
      };

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
        callback({
          docs: messages.map((msg) => ({
            data: () => ({
              ...msg,
              time_stamp: mockTimestamp
            })
          }))
        });
        return () => { };
      });

      const unsubscribe = getMessagesByRoomId(chat.id, callback);

      expect(onSnapshot).toHaveBeenCalledWith({}, expect.any(Function));
      expect(callback).toHaveBeenCalledWith(messages);
      expect(unsubscribe).toBeInstanceOf(Function);
    });
  });

  describe('getLastMessagesByRoomId', () => {
    const roomIds = ['21b06a53-63b1-4733-9036-aa4e7e88f944'];
    const mockMessage = {
      id: '21b06a53-63b1-4733-9036-aa4e7e88f944',
      roomId: '21b06a53-63b1-4733-9036-aa4e7e88f944',
      message: 'Hello',
      time_stamp: new Date('2024-10-01T15:37:01.791Z'),
      sender: '8a741820-0253-11ef-804b-d90ac4375227'
    };

    it('should set last messages correctly', () => {
      const setLastMessages = jest.fn();
      const unsubscribe = jest.fn();

      (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
        callback({
          empty: false,
          docs: [
            {
              data: () => ({
                ...mockMessage,
                time_stamp: {
                  toDate: () => mockMessage.time_stamp
                }
              })
            }
          ]
        });
        return unsubscribe;
      });

      const cleanup = getLastMessagesByRoomId(roomIds, setLastMessages);

      expect(onSnapshot).toHaveBeenCalled();
      expect(setLastMessages).toHaveBeenCalledWith(expect.any(Function));
      const updateFunction = setLastMessages.mock.calls[0][0];
      expect(updateFunction({})).toEqual({
        [roomIds[0]]: mockMessage
      });

      cleanup();
      expect(unsubscribe).toHaveBeenCalled();
    });

    it('should handle errors', () => {
      const setLastMessages = jest.fn();
      const unsubscribe = jest.fn();
      const error = new Error('Failed to get last messages');

      (onSnapshot as jest.Mock).mockImplementation((_, __, errorCallback) => {
        if (errorCallback) errorCallback(error);
        return unsubscribe;
      });

      const cleanup = getLastMessagesByRoomId(roomIds, setLastMessages);

      expect(onSnapshot).toHaveBeenCalled();
      cleanup();
    });
  });

  describe('getRoomIdForUsers', () => {
    const selectedId = '6RSF2rRLC0gGFLZZ7MvrxHVGCRj1';
    const currentUser = 'rnJXga6cK7gyxESpAGXRwlvVXYY2';

    it('should get room ID for users successfully', async () => {
      const privateChat = {
        id: '21b06a53-63b1-4733-9036-aa4e7e88f944',
        isGroup: false,
        members: [selectedId, currentUser]
      };

      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ data: () => privateChat }]
      });

      const result = await getRoomIdForUsers(selectedId, currentUser);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.CHAT);
      expect(query).toHaveBeenCalledWith(
        collection(db, END_POINT.CHAT),
        where('isGroup', '==', false),
        where('members', 'array-contains', selectedId)
      );
      expect(result.data).toEqual(privateChat.id);
    });

    it('should handle errors while getting room ID for users', async () => {
      const error = new Error('Failed to get room ID');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await getRoomIdForUsers(selectedId, currentUser);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('updateMessage', () => {
    const updatedMessage: IMessage = {
      ...message,
      message: 'Updated message',
      isEdit: true
    };

    it('should update a message successfully', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ ref: { id: message.id, data: () => message } }]
      });
      (updateDoc as jest.Mock).mockResolvedValueOnce(undefined);

      const result = await updateMessage(updatedMessage);

      expect(query).toHaveBeenCalledWith(
        collection(db, END_POINT.MESSAGE),
        where('id', '==', updatedMessage.id)
      );
      expect(updateDoc).toHaveBeenCalledWith(expect.any(Object), {
        message: updatedMessage.message,
        isEdit: updatedMessage.isEdit
      });
      expect(result).toEqual({ data: updatedMessage, error: null });
    });

    it('should handle errors while update', async () => {
      const error = new Error('Failed to updateMessage');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await updateMessage(updatedMessage);

      expect(result).toEqual({ data: null, error });
    });
  });

  describe('removeMessage', () => {
    const messageId = message.id;
    it('should remove a message successfully', async () => {
      (collection as jest.Mock).mockReturnValue({});
      (query as jest.Mock).mockReturnValue({});
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ ref: { id: messageId, data: () => ({}) } }]
      });
      (deleteDoc as jest.Mock).mockResolvedValueOnce(undefined);

      const result = await removeMessage(messageId);

      expect(query).toHaveBeenCalledWith(
        collection(db, END_POINT.MESSAGE),
        where('id', '==', messageId)
      );
      expect(deleteDoc).toHaveBeenCalledWith(expect.any(Object));
      expect(result).toEqual({ success: true, error: null });
    });

    it('should handle errors when removing message', async () => {
      const error = new Error('Failed to removeMessage');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await removeMessage(messageId);

      expect(result).toEqual({ success: false, error });
    });
  });
});
