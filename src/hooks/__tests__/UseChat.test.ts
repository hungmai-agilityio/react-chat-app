import { act, renderHook, waitFor } from '@testing-library/react';
import { onSnapshot } from 'firebase/firestore';

// Hooks
import { useChats } from '@/hooks';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  onSnapshot: jest.fn(),
  getFirestore: jest.fn(() => ({})),

}));

describe('useChats', () => {
  const mockChat = [
    {
      id: '1',
      title: 'Chat 1',
      avatar: 'avatar1.png',
      members: [
        'ed1721l2017993-d187k3240j3dl123-993jd15',
        'e124457017993-d187k31783dl123-911vrw'
      ],
      isGroup: false
    },
    {
      id: '2',
      title: 'Chat 2',
      avatar: 'avatar2.png',
      members: [
        'ed1721l2017993-d187k3240j3dl123-993jd15',
        'e124457017993-d187k31783dl123-911vrw'
      ],
      isGroup: true,
      owner: 'e124457017993-d187k31783dl123-911vrw'
    },
  ];

  it('should fetch and return chats data', async () => {
    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      const snapshot = {
        docs: mockChat.map((chat) => ({
          id: chat.id,
          data: () => chat,
        })),
      };
      callback(snapshot);
      return jest.fn();
    });

    const { result } = renderHook(() => useChats());

    await act(async () => {
      await waitFor(() => {
        expect(result.current).toEqual(mockChat);
      });
    });

    expect(result.current).toEqual(mockChat);
  });
});
