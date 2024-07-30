export interface IUser {
  id: string;
  userName: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IProfile {
  id: string;
  user_id: string;
  avatar: string;
  phone: string;
}