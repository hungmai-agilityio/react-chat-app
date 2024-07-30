// Firebase
import {
  setDoc,
  doc,
  collection,
  query,
  getDocs,
  where,
  updateDoc
} from 'firebase/firestore';
import { auth, db } from '../../fireBase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Interfaces
import { ApiResponse, IProfile, IUser } from '@/interfaces';

const userCollection = collection(db, 'users');
const profileCollection = collection(db, 'profiles');

/**
 * Add a new user account
 * @param {IUser} data
 * @returns {Promise<ApiResponse<IUser>>}
 */
export const addUser = async (data: IUser): Promise<ApiResponse<IUser>> => {
  try {
    const docRef = doc(userCollection, data.id);
    await setDoc(docRef, data);
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
 * Add a new profile user
 * @param {IProfile} data
 * @returns {Promise<ApiResponse<IProfile>>}
 */
export const addProfileUser = async (
  data: IProfile
): Promise<ApiResponse<IProfile>> => {
  try {
    const docRef = doc(profileCollection, data.id);
    await setDoc(docRef, data);
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
 * Get user by email
 * @param {string} email
 * @returns {Promise<ApiResponse<IUser>>}
 */
export const getUserByEmail = async (
  email: string
): Promise<ApiResponse<IUser>> => {
  try {
    const queryEmail = query(userCollection, where('email', '==', email));
    const querySnapshot = await getDocs(queryEmail);
    const account = querySnapshot.docs[0]?.data() as IUser;

    return {
      data: account,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/** Sign in to app
 * @param {string} email
 * @param {string} password
 * @returns {Object}
 */
export const signIn = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    return {
      data: response.user,
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
 * Update user by id
 * @param {String} collection - link to endpoint request
 * @param {String} id - id of the data to be updated
 * @param {Object} data - transmission data
 *
 * @returns {Object}
 */
export const updateUser = async <T>(
  collection: string,
  id: string,
  data: Partial<T>
) => {
  try {
    const docRef = doc(db, collection, id);
    await updateDoc(docRef, data);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
