import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useMapSelectionStore } from "@/store/MapSelectionStore";

const Map = () => {
  const selectedMap = useMapSelectionStore((state) => state.selectedMap);
  const { attribution, url } = selectedMap;
  const position: [number, number] = [15.2480356, 120.6774088];

  return (
    <MapContainer
      center={position}
      zoomControl={false}
      zoom={100}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url={url} attribution={attribution} />
      <Marker
        icon={
          new Icon({
            iconUrl: "/images/map/location.png",
            iconSize: [41, 41],
            iconAnchor: [12, 41],
          })
        }
        position={position}
      ></Marker>
    </MapContainer>
  );
};

export default Map;
