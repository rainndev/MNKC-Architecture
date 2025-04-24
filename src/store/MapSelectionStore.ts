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
        id: "-1",
        label: "Esri Satellite",
        value: "EsriSatellite",
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution:
          "Tiles &copy; Esri — Imagery from Esri, Maxar & contributors",
      },
      setSelectedMap: (index) =>
        set(() => ({ selectedMap: tileOptions[index] })),
    }),
    {
      name: "map-selection-storage",
    },
  ),
);
