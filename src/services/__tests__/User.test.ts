import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore';
import { db } from '../../../firebase/config';

// Services
import { getUsers, getProfileByUserId, getUserById } from '@/services';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IUser, IProfile } from '@/interfaces';

// Mocks data
import { mockUsers } from '@/mocks';

jest.mock('firebase/firestore');

describe('User Services', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockUser: IUser = {
    id: 'DJR287-RWPTLJUQCV-429JO',
    userName: 'John Doe',
    email: 'john@example.com',
    password: 'Pass123',
    created_at: new Date('2020-10-01T15:37:01.791Z'),
    updated_at: new Date('2020-10-01T15:37:01.791Z')
  };

  const mockProfile: IProfile = {
    id: '1',
    user_id: mockUser.id,
    avatar: '',
    phone: ''
  };

  describe('getUsers', () => {
    it('should retrieve all users', async () => {
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: mockUsers.map((user) => ({ id: user.id, data: () => user }))
      });

      const result = await getUsers();

      expect(collection).toHaveBeenCalledWith(db, END_POINT.USER);
      expect(result.data).toEqual(mockUsers);
      expect(result.error).toBeNull();
    });

    it('should handle errors when retrieving users', async () => {
      const error = new Error('Failed to get users');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await getUsers();

      expect(result.data).toBeNull();
      expect(result.error).toEqual(error);
    });
  });

  describe('getProfileByUserId', () => {
    it('should retrieve profile by userId', async () => {
      const mockQuery = {};
      (query as jest.Mock).mockReturnValue(mockQuery);
      (where as jest.Mock).mockReturnValue('mockWhereCondition');
      (getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ id: mockProfile.id, data: () => mockProfile }]
      });

      const result = await getProfileByUserId(mockUser.id);

      expect(collection).toHaveBeenCalledWith(db, END_POINT.PROFILE);
      expect(where).toHaveBeenCalledWith('user_id', '==', mockUser.id);
      expect(result.data).toEqual(mockProfile);
      expect(result.error).toBeNull();
    });

    it('should handle errors when retrieving profile by userId', async () => {
      const error = new Error('Failed to get profile');
      (getDocs as jest.Mock).mockRejectedValueOnce(error);

      const result = await getProfileByUserId(mockUser.id);

      expect(result.data).toBeNull();
      expect(result.error).toEqual(error);
    });
  });

  describe('getUserById', () => {
    it('should retrieve user by id', async () => {
      (getDoc as jest.Mock).mockResolvedValueOnce({
        data: () => mockUser
      });

      const result = await getUserById(mockUser.id);

      expect(doc).toHaveBeenCalledWith(db, END_POINT.USER, mockUser.id);
      expect(result.data).toEqual(mockUser);
      expect(result.error).toBeNull();
    });

    it('should handle errors when retrieving user by id', async () => {
      const error = new Error('Failed to get user');
      (getDoc as jest.Mock).mockRejectedValueOnce(error);

      const result = await getUserById(mockUser.id);

      expect(result.data).toBeNull();
      expect(result.error).toEqual(error);
    });
  });
});
