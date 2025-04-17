import { create } from "zustand";

interface TeamsModalStore {
  isOpen: boolean;
  openModal: (isOpenBoolean: boolean) => void;
  data: {
    name: string;
    expertise: String[];
    position: string;
    image: string;
    bio: string;
    linkedIn: string;
  };

  setData: (data: {
    name: string;
    position: string;
    expertise: String[];
    image: string;
    bio: string;
    linkedIn: string;
  }) => void;
}

export const useTeamsModalStore = create<TeamsModalStore>((set) => ({
  isOpen: false,
  data: {
    name: "",
    expertise: [],
    position: "",
    image: "",
    bio: "",
    linkedIn: "",
  },

  openModal: (isOpenBoolean) => set({ isOpen: isOpenBoolean }),

  setData: (data) => set({ data }),
}));
