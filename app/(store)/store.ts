import { ItutorStore } from "@/Interfaces";
import { create } from "zustand";

const useStore = create<ItutorStore>()((set: any) => ({
  currentSlide: 1,
  toNextSlide: () =>
    set((state: ItutorStore) => ({ currentSlide: state.currentSlide + 1 })),
  toPreviousSlide: () =>
    set((state: ItutorStore) => ({ currentSlide: state.currentSlide - 1 })),
  setCurrentSlide: (to: number) =>
    set((state: ItutorStore) => ({ currentSlide: 1 })),
  emails: [],
  addToEmails: (newEmail) =>
    set((state: ItutorStore) => ({
      emails: [...state.emails, newEmail],
    })),
  removeFromEmails: (targetEmail) =>
    set((state: ItutorStore) => ({
      emails: state.emails.filter((email) => email !== targetEmail),
    })),
}));

export default useStore;
