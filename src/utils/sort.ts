import { IMessage } from '@/interfaces';

/**
 *  Display messages by sent time
 * @param {IMessage[]} messages
 * @returns {IMessage[]}
 */
export const sortMessagesByTimestamp = (messages: IMessage[]) => {
  return messages.sort(
    (a, b) =>
      new Date(a.time_stamp).getTime() - new Date(b.time_stamp).getTime()
  );
};
