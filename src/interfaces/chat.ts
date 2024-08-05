export interface IMessage {
  id: string;
  message: string;
  sender: string;
  time_stamp: Date;
  roomId: string;
  isEdit?: boolean;
}

export interface IChat {
  id: string;
  title: string;
  avatar: string;
  members: string[];
  isGroup: boolean;
  owner?: string;
}
