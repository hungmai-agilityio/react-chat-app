import { create } from 'zustand';
import { auth, db } from '../../fireBase/config';
import {
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
  collection
} from 'firebase/firestore';

interface AuthState {
  currentUser?: DocumentData;
  currentUserProfile?: DocumentData;
  fetchUserData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: undefined,
  currentUserProfile: undefined,
  fetchUserData: async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        set({ currentUser: undefined, currentUserProfile: undefined });
        return;
      }

      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        set({ currentUser: undefined, currentUserProfile: undefined });
        return;
      }

      const profileQuery = query(
        collection(db, 'profiles'),
        where('user_id', '==', user.uid)
      );
      const profileSnapshot = await getDocs(profileQuery);

      let profileData: DocumentData | undefined;
      if (!profileSnapshot.empty) {
        profileData = profileSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))[0];
      }

      set({
        currentUser: userDocSnap.data(),
        currentUserProfile: profileData
      });
    });

    return unsubscribe;
  }
}));
