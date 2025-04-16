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
      <div className="h-96 w-72 overflow-hidden border border-[#504F4F] bg-white/10">
        <img
          loading="lazy"
          src={image}
          className="h-full w-full object-cover opacity-20 transition-all duration-300 ease-in-out group-hover:scale-103 hover:opacity-100"
        />
      </div>

      {/* Info */}
      <div className="mt-2">
        <h4 className="font-[ClashDisplay] text-[clamp(.9rem,3vw,1.3rem)] text-[#D9D9D9] transition-all duration-300 ease-in-out group-hover:text-2xl">
          {name}
        </h4>
        <p className="font-[SansationLight] text-sm text-white/60 transition-all duration-300 ease-in-out group-hover:text-base">
          {position}
        </p>
      </div>
    </div>
  );
};

export default CardsTeam;
