import TeamsCardContainer from "@/sections/teamspage/TeamsCardContainer";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import TeamsModal from "@/components/TeamsModal";

const Teamspage = () => {
  const ref = useSectionTracker({
    title: "Meet Our Team",
    number: "01",
  });
  return (
    <>
      <TeamsModal />

      <section
        ref={ref}
        className="bg-striped flex h-full w-full flex-col items-center justify-center"
      >
        <div className="w-full max-w-7xl">
          <TeamsCardContainer />
        </div>
      </section>
    </>
  );
};

export default Teamspage;
