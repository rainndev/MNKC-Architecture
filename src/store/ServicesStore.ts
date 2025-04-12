import { create } from "zustand";

interface ServicesStore {
  isContentVisbile: boolean;
  setIsContentVisible: (isVisible: boolean) => void;
}

export const useServicesStore = create<ServicesStore>((set) => ({
  isContentVisbile: false,
  setIsContentVisible: (isVisible: boolean) =>
    set({ isContentVisbile: isVisible }),
}));
