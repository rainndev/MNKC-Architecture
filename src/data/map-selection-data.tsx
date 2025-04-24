import { TileOption } from "@/types/map-tiles";

export const tileOptions: TileOption[] = [
  {
    id: "0",
    label: "OpenStreetMap",
    value: "OpenStreetMap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  },

  {
    id: "1",
    label: "CartoDB Positron",
    value: "CartoDBPositron",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  },
  {
    id: "2",
    label: "CartoDB Dark Matter",
    value: "CartoDBDarkMatter",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  },
  {
    id: "3",
    label: "OSM France",
    value: "OSMFrance",
    url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
    attribution:
      '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  },

  {
    id: "4",
    label: "Esri Satellite",
    value: "EsriSatellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri — Imagery from Esri, Maxar & contributors",
  },
];
