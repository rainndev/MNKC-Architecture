import { create } from "zustand";

interface SideBarStore {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const useSideBarStore = create<SideBarStore>((set) => ({
  isOpen: false,
  setOpen: (value) => set({ isOpen: value }),
}));
