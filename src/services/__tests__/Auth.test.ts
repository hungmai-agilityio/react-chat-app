import {
  setDoc,
  doc,
  collection,
  getDocs,
  updateDoc
} from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../../firebase/config';

// Services
import {
  addUser,
  addProfileUser,
  getUserByEmail,
  signIn,
  updateUser
} from '@/services';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Constants
import { END_POINT } from '@/constants';

// Mock Firebase functions
jest.mock('firebase/firestore');
jest.mock('firebase/auth');

describe('Auth Services', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockUser: IUser = {
    id: 'DJR287-RWPTLJUQCV-429JO',
    email: 'test@example.com',
    password: 'Pass123',
    userName: 'Test User',
    created_at: new Date(),
    updated_at: new Date()
  };
  const mockProfile: IProfile = {
    id: '460120-f347ll81h348249-14j4058ff',
    user_id: 'DJR287-RWPTLJUQCV-429JO',
    phone: '',
    avatar: ''
  };

  describe('addUser', () => {
    it('should add a new user successfully', async () => {
      (setDoc as jest.Mock).mockResolvedValueOnce(undefined);
      const result = await addUser(mockUser);
      expect(setDoc).toHaveBeenCalledWith(
        doc(collection(db, END_POINT.USER), mockUser.id),
        mockUser
      );
      expect(result).toEqual({ data: mockUser, error: null });
    });

    it('should handle errors when adding a new user', async () => {
      const error = new Error('Failed to add user');
      (setDoc as jest.Mock).mockRejectedValueOnce(error);
      const result = await addUser(mockUser);
      expect(result).toEqual({ data: null, error });
    });
  });

  describe('addProfileUser', () => {
    it('should add a new profile successfully', async () => {
      (setDoc as jest.Mock).mockResolvedValueOnce(undefined);
      const result = await addProfileUser(mockProfile);
      expect(setDoc).toHaveBeenCalledWith(
        doc(collection(db, END_POINT.PROFILE), mockProfile.id),
        mockProfile
      );
      expect(result).toEqual({ data: mockProfile, error: null });
    });

    it('should handle errors when adding a new profile', async () => {
      const error = new Error('Failed to add profile');
      (setDoc as jest.Mock).mockRejectedValueOnce(error);
      const result = await addProfileUser(mockProfile);
      expect(result).toEqual({ data: null, error });
    });
  });

  describe('getUserByEmail', () => {
    it('should get a user by email successfully', async () => {
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ data: () => mockUser }]
      });
      const result = await getUserByEmail('test@example.com');
      expect(result).toEqual({ data: mockUser, error: null });
    });

    it('should handle errors when getting a user by email', async () => {
      const error = new Error('Failed to get user by email');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);
      const result = await getUserByEmail('test@example.com');
      expect(result).toEqual({ data: null, error });
    });
  });

  describe('signIn', () => {
    it('should sign in a user successfully', async () => {
      (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
        user: mockUser
      });
      const result = await signIn('test@example.com', 'password');
      expect(result).toEqual({ data: mockUser, error: null });
    });

    it('should handle errors when signing in a user', async () => {
      const error = new Error('Failed to sign in');
      (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce(error);
      const result = await signIn('test@example.com', 'password');
      expect(result).toEqual({ data: null, error });
    });
  });

  describe('updateUser', () => {
    it('should update a user successfully', async () => {
      (updateDoc as jest.Mock).mockResolvedValueOnce(undefined);
      const result = await updateUser(END_POINT.USER, mockUser.id, {
        name: 'Updated Name'
      });
      expect(updateDoc).toHaveBeenCalledWith(
        doc(db, END_POINT.USER, mockUser.id),
        { name: 'Updated Name' }
      );
      expect(result).toEqual({ data: { name: 'Updated Name' }, error: null });
    });

    it('should handle errors when updating a user', async () => {
      const error = new Error('Failed to update user');
      (updateDoc as jest.Mock).mockRejectedValueOnce(error);
      const result = await updateUser(END_POINT.USER, mockUser.id, {
        name: 'Updated Name'
      });
      expect(result).toEqual({ data: null, error });
    });
  });
});
