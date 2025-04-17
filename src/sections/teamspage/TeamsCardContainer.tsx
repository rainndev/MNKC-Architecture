import { motion } from "framer-motion";
import CardsTeam from "@/components/CardsTeam";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const sampleData: TeamMember[] = [
  {
    name: "John Doe",
    position: "Founder",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Jane Smith",
    position: "Lead Architect",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Alice Johnson",
    position: "Interior Designer",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Bob Brown",
    position: "Project Manager",
    image: "https://i.pravatar.cc/300?img=4",
  },
];

const TeamsCardContainer = () => {
  return (
    <div className="flex h-full max-w-7xl flex-col items-center justify-center overflow-hidden border border-[#504F4F] bg-[#1E1E1E] p-10">
      {/* Header info */}
      <div>
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
          className="font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty text-[#D9D9D9]"
        >
          Meet Our Team
        </motion.h1>
        <p className="relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal text-[#D9D9D9]">
          Get to know the passionate minds behind our designs. Our team is a
          blend of architects, designers, and thinkers—working together to bring
          innovative and sustainable spaces to life.
          <motion.span
            initial={{ height: "0%", opacity: 0, width: "0%" }}
            whileInView={{
              height: "100%",
              opacity: 0.7,
              width: ["100%", "0%"],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 right-0 z-0 h-full bg-[#FCAC04]"
          />
        </p>
      </div>

      {/* Team members */}
      <div
        data-lenis-prevent
        className="hide-scrollbar mt-10 grid h-fit grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {sampleData.map((data, i) => (
          <CardsTeam key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TeamsCardContainer;
