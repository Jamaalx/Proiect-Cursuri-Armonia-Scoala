import { create } from 'zustand';

interface UIStore {
  isLoading: boolean;
  isBusy: () => void;
  isIdle: () => void;
}

export const uiStore = create<UIStore>((set) => ({
  isLoading: false,
  isIdle: () => set({ isLoading: false }),
  isBusy: () => set({ isLoading: true })
}));