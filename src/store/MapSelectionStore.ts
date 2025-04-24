import { create } from "zustand";
import { persist } from "zustand/middleware";
import { tileOptions } from "@/data/map-selection-data";
import { TileOption } from "@/types/map-tiles";

interface MapSelectionStore {
  selectedMap: TileOption;
  tilesData: TileOption[];
  setSelectedMap: (index: number) => void;
}

export const useMapSelectionStore = create<MapSelectionStore>()(
  persist(
    (set) => ({
      tilesData: tileOptions,
      selectedMap: {
        id: "123123",
        label: "CartoDB Dark Matter",
        value: "CartoDBDarkMatter",
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      },
      setSelectedMap: (index) =>
        set(() => ({ selectedMap: tileOptions[index] })),
    }),
    {
      name: "map-selection-storage",
    },
  ),
);
