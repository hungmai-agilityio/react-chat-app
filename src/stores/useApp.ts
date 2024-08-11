import { create } from 'zustand';

interface AppState {
  checkedUsers: string[];
  addCheckedUser: (id: string) => void;
  removeCheckedUser: (id: string) => void;
  resetStore: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  checkedUsers: [],
  addCheckedUser: (id: string) =>
    set((state) => ({ checkedUsers: [...state.checkedUsers, id] })),
  removeCheckedUser: (id: string) =>
    set((state) => ({
      checkedUsers: state.checkedUsers.filter((userId) => userId !== id)
    })),
  resetStore: () => set({ checkedUsers: [] })
}));
