import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: () => set((state, payload) => ({ user: payload })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
