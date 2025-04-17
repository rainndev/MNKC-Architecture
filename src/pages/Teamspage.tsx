import TeamsCardContainer from "@/sections/teamspage/TeamsCardContainer";
import { useSectionTracker } from "@/hooks/use-section-tracker";

const Teamspage = () => {
  const ref = useSectionTracker({
    title: "Teams",
    number: "00",
  });
  return (
    <div
      ref={ref}
      className="bg-striped flex h-full w-full flex-col items-center justify-center"
    >
      <TeamsCardContainer />
      <div className="h-screen font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal text-[#D9D9D9]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        accusantium nobis vel ex alias voluptates blanditiis impedit rem nam
        magnam deleniti vero reprehenderit in atque velit, aliquid quibusdam
        officia?
      </div>
    </div>
  );
};

export default Teamspage;
