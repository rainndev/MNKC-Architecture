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
      <div className="h-92 w-full overflow-hidden border border-[#504F4F] bg-white/10">
        <img
          loading="lazy"
          src={image}
          className="h-full w-full object-cover opacity-20 transition-all duration-300 ease-in-out group-hover:scale-103 group-active:scale-103 hover:opacity-100 active:opacity-100"
        />
      </div>

      {/* Info */}
      <div className="mt-5">
        <div className="relative mb-2 flex items-center pb-[2px] font-[ClashDisplay] text-[clamp(.9rem,3vw,1.3rem)] text-[#D9D9D9] transition-all duration-300 ease-in-out group-hover:text-2xl group-active:text-2xl">
          <h4>{name}</h4>
          <span className="absolute bottom-0 inline-block h-[1px] w-0 bg-[#FCAC04] opacity-0 transition-all duration-400 ease-in-out group-hover:w-full group-hover:opacity-100" />
        </div>
        <p className="font-[SansationLight] text-sm text-white/60 transition-all">
          {position}
        </p>
      </div>
    </div>
  );
};

export default CardsTeam;
