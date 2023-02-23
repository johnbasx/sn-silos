import { create } from "zustand";

interface FilterState {
  categorytoFilter: string;
  setFilter: (category: string) => void;
}

const useFilterStore = create<FilterState>()((set) => ({
  categorytoFilter: "All",
  setFilter: (category) => set((state) => ({ categorytoFilter: category })),
}));

export default useFilterStore;
