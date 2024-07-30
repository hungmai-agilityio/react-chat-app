import { IMessage } from '@/interfaces';
import { sortMessagesByTimestamp } from '../sort';

describe('sortMessagesByTimestamp', () => {
  it('should sort messages in ascending order by timestamp', () => {
    const messages: IMessage[] = [
      {
        id: '1',
        message: 'Hello',
        sender: 'user1',
        time_stamp: '2024-07-21T12:00:00Z',
        roomId: 'room1'
      },
      {
        id: '2',
        message: 'World',
        sender: 'user2',
        time_stamp: '2024-07-21T10:00:00Z',
        roomId: 'room1'
      },
      {
        id: '3',
        message: 'Test',
        sender: 'user3',
        time_stamp: '2024-07-21T11:00:00Z',
        roomId: 'room1'
      }
    ];

    const sortedMessages = sortMessagesByTimestamp(messages);

    expect(sortedMessages).toEqual([
      {
        id: '2',
        message: 'World',
        sender: 'user2',
        time_stamp: '2024-07-21T10:00:00Z',
        roomId: 'room1'
      },
      {
        id: '3',
        message: 'Test',
        sender: 'user3',
        time_stamp: '2024-07-21T11:00:00Z',
        roomId: 'room1'
      },
      {
        id: '1',
        message: 'Hello',
        sender: 'user1',
        time_stamp: '2024-07-21T12:00:00Z',
        roomId: 'room1'
      }
    ]);
  });

  it('should handle an empty array', () => {
    const sortedMessages = sortMessagesByTimestamp([]);
    expect(sortedMessages).toEqual([]);
  });
});
