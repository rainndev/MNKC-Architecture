import { create } from "zustand";

interface LeftSideOverlayStore {
  data: {
    title: string;
    number: string;
  };
  setData: (newData: Partial<{ title: string; number: string }>) => void;
}

export const useLeftSideOverlayStore = create<LeftSideOverlayStore>((set) => ({
  data: {
    title: "Services",
    number: "00",
  },

  setData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
}));
