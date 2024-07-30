import { create } from 'zustand';

interface AppState {
  chatName: string;
  setChatName: (name: string) => void;
  chatAvatar: string;
  setChatAvatar: (avatar: string) => void;
  checkedUsers: string[];
  addCheckedUser: (id: string) => void;
  removeCheckedUser: (id: string) => void;
  resetStore: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  chatName: '',
  setChatName: (name: string) => set({ chatName: name }),
  chatAvatar: '',
  setChatAvatar: (avatar: string) => set({ chatAvatar: avatar }),
  checkedUsers: [],
  addCheckedUser: (id: string) =>
    set((state) => ({ checkedUsers: [...state.checkedUsers, id] })),
  removeCheckedUser: (id: string) =>
    set((state) => ({
      checkedUsers: state.checkedUsers.filter((userId) => userId !== id)
    })),
  resetStore: () => set({ chatName: '', chatAvatar: '', checkedUsers: [] })
}));
