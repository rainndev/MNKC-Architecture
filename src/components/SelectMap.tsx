import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMapSelectionStore } from "@/store/MapSelectionStore";

export function SelectMap() {
  const setSelectedMap = useMapSelectionStore((state) => state.setSelectedMap);
  const tilesData = useMapSelectionStore((state) => state.tilesData);

  const handleMapChange = (index: string) => {
    setSelectedMap(parseInt(index));
    console.log("Selected Map Index:", index);
  };

  return (
    <Select onValueChange={handleMapChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Map" />
      </SelectTrigger>
      <SelectContent>
        {tilesData.map(({ label, id }) => (
          <SelectItem key={label} value={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
