// Firebase
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../fireBase/config';

//Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IUser, IProfile, ApiResponse } from '@/interfaces';

/** Get all users
 * @returns {Promise<ApiResponse<IUser | null>>}
 */
export const getUsers = async (): Promise<ApiResponse<IUser[]>> => {
  try {
    const querySnapshot = await getDocs(collection(db, END_POINT.USER));
    const users: IUser[] = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data()
        }) as IUser
    );
    return {
      data: users,
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
 * Get profile by user id
 * @param {string} userId
 * @returns {Promise<ApiResponse<IProfile | null>>}
 */

export const getProfileByUserId = async (
  userId: string
): Promise<ApiResponse<IProfile | null>> => {
  try {
    const profilesCollection = collection(db, END_POINT.PROFILE);
    const profileQuery = query(profilesCollection, where('user_id', '==', userId));
    const docSnap = await getDocs(profileQuery);

    const profile = docSnap.docs.map(doc => {
      const data = doc.data() as IProfile;
      return {
        ...data,
        id: doc.id,
      };
    })[0];

    return {
      data: profile,
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
 * Get user by id
 * @param {string} userId
 * @returns {Promise<ApiResponse<IUser | null>>}
 */
export const getUserById = async (userId: string): Promise<ApiResponse<IUser | null>> => {
  try {
    const userDocRef = doc(db, END_POINT.USER, userId);
    const userDoc = await getDoc(userDocRef);

    const userData = userDoc.data() as IUser;
    return {
      data: userData,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};