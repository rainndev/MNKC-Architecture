interface CardsTeamProps {
  data: {
    name: string;
    position: string;
    image: string;
  };
}

const CardsTeam = ({ data }: CardsTeamProps) => {
  const { name, position, image } = data;
  return (
    <div className="group">
      <div className="relative h-80 w-full overflow-hidden border border-[#504F4F]">
        <img
          loading="lazy"
          src={image}
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-103 group-active:scale-103"
        />

        <span className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-[#1E1E1E] opacity-70 transition-all duration-300 ease-in-out group-hover:h-0 group-hover:opacity-0 group-active:opacity-0"></span>
      </div>

      {/* Info */}
      <div className="mt-5">
        <h4 className="flex items-center pb-[2px] font-[ClashDisplay] text-[clamp(.9rem,3vw,1.3rem)] text-[#D9D9D9]">
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
