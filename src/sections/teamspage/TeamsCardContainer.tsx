import { motion } from "framer-motion";
import CardsTeam from "@/components/CardsTeam";
import { teamsContent } from "@/data/teams-card-data";

const TeamsCardContainer = () => {
  return (
    <div className="bg-logo-black border-logo-gray/20 flex h-full w-full flex-col items-center justify-center overflow-hidden border-x p-7 pt-20 md:p-20 md:pb-50">
      {/* Header info */}

      <header>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[#767676]"
        >
          Our Team
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-logo-white mt-1 font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty"
        >
          <span className="text-logo-yellow">Meet</span> Our Team
        </motion.h1>
        <p className="text-logo-white relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal">
          Get to know the awesome people behind our designs. We're a team of
          architects, designers, and creative thinkers working together to build
          cool, sustainable spaces
          <motion.span
            initial={{ height: "0%", opacity: 0, width: "0%" }}
            whileInView={{
              height: "100%",
              opacity: 0.7,
              width: ["100%", "0%"],
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
          />
        </p>
      </header>

      {/* Team members */}
      <section className="hide-scrollbar mt-30 grid h-fit w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamsContent.map((data, i) => (
          <CardsTeam key={i} data={data} />
        ))}
      </section>
    </div>
  );
};

export default TeamsCardContainer;
