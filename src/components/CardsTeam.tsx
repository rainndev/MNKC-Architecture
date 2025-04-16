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
    <div className="z-50">
      <div className="h-96 w-72 overflow-hidden border border-[#504F4F] bg-white/10">
        <img
          loading="lazy"
          src={image}
          className="h-full w-full object-cover opacity-20 transition-all duration-300 ease-in-out hover:scale-103 hover:opacity-100"
        />
      </div>

      {/* Info */}
      <div className="mt-2">
        <h4 className="text-[clamp(.9rem,3vw,1.3rem)]">{name}</h4>
        <p className="font-[SansationLight] text-white/60">{position}</p>
      </div>
    </div>
  );
};

export default CardsTeam;
