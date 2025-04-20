import { useTeamsModalStore } from "@/store/TeamsModalStore";

interface TeamData {
  name: string;
  position: string;
  expertise: String[];
  image: string;
  bio: string;
  linkedIn: string;
}

const CardsTeam = ({ data }: { data: TeamData }) => {
  const { name, position, image } = data;

  const openModal = useTeamsModalStore((state) => state.openModal);
  const setData = useTeamsModalStore((state) => state.setData);

  const handleClick = () => {
    openModal(true);
    setData(data);
  };

  return (
    <div onClick={handleClick} className="group">
      <div className="border-logo-gray relative h-80 w-full cursor-pointer overflow-hidden border">
        <img
          loading="lazy"
          src={image}
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-103 group-active:scale-103"
        />

        <span className="bg-striped bg-logo-black absolute bottom-0 left-0 flex h-full w-full items-center justify-center opacity-70 transition-all duration-300 ease-in-out group-hover:h-0 group-hover:opacity-0 group-active:opacity-0"></span>
      </div>

      {/* Info */}
      <div className="mt-5">
        <h4 className="text-logo-white flex items-center pb-[2px] font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.3rem)]">
          {name}
        </h4>
        <p className="font-[SansationLight] text-sm text-white/60 transition-all">
          {position}
        </p>
      </div>
    </div>
  );
};

export default CardsTeam;
