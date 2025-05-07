import { useTeamsModalStore } from "@/store/TeamsModalStore";
import { TeamData } from "@/types/teams-card";
import { useState } from "react";

const CardsTeam = ({ data }: { data: TeamData }) => {
  const { name, position, image } = data;
  const [loaded, setLoaded] = useState(false);

  const openModal = useTeamsModalStore((state) => state.openModal);
  const setData = useTeamsModalStore((state) => state.setData);

  const handleClick = () => {
    openModal(true);
    setData(data);
  };

  return (
    <article onClick={handleClick} className="group">
      <div className="border-logo-gray relative h-80 w-full cursor-pointer overflow-hidden border">
        {/* Skeleton loader */}
        {!loaded && (
          <div className="bg-logo-white/10 absolute inset-0 animate-pulse" />
        )}

        {/* team image */}
        <img
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          src={image}
          className="h-full w-full object-cover grayscale-50 transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:grayscale-0 group-active:scale-103"
        />

        <span className="bg-striped bg-logo-black absolute bottom-0 left-0 flex h-full w-full items-center justify-center opacity-70 transition-all duration-300 ease-in-out group-hover:h-0 group-hover:opacity-0 group-active:opacity-0"></span>
      </div>

      {/* Info */}
      <header className="mt-5">
        <h4 className="text-logo-white flex items-center pb-[2px] font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.3rem)]">
          {name}
        </h4>
        <p className="font-[SansationLight] text-sm text-white/60 transition-all">
          {position}
        </p>
      </header>
    </article>
  );
};

export default CardsTeam;
