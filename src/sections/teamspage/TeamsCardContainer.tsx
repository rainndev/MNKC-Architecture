import { motion } from "framer-motion";
import CardsTeam from "@/components/CardsTeam";

export interface TeamMemberTypes {
  name: string;
  position: string;
  expertise: string[];
  image: string;
  bio: string;
  linkedIn: string;
}

const sampleData: TeamMemberTypes[] = [
  {
    name: "John Doe",
    position: "Founder",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Visionary leader with a passion for innovation and excellence.",
    linkedIn: "https://www.linkedin.com/in/johndoe",
    expertise: ["Leadership", "Strategy", "Innovation"],
  },
  {
    name: "Jane Smith",
    position: "Lead Architect",
    image: "https://i.pravatar.cc/300?img=2",
    bio: "Expert in modern architectural designs and sustainable solutions.",
    linkedIn: "https://www.linkedin.com/in/janesmith",
    expertise: ["Architecture", "Sustainability", "Design"],
  },
  {
    name: "Alice Johnson",
    position: "Interior Designer",
    image: "https://i.pravatar.cc/300?img=3",
    bio: "Creative designer specializing in functional and aesthetic interiors.",
    linkedIn: "https://www.linkedin.com/in/alicejohnson",
    expertise: ["Interior Design", "Space Planning", "Creativity"],
  },
  {
    name: "Bob Brown",
    position: "Project Manager",
    image: "https://i.pravatar.cc/300?img=4",
    bio: "Experienced manager ensuring projects are delivered on time and budget.",
    linkedIn: "https://www.linkedin.com/in/bobbrown",
    expertise: ["Project Management", "Scheduling", "Budgeting"],
  },
  {
    name: "Emily Davis",
    position: "Structural Engineer",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Engineer with a focus on safe and innovative structural designs.",
    linkedIn: "https://www.linkedin.com/in/emilydavis",
    expertise: ["Structural Engineering", "Safety", "Innovation"],
  },
  {
    name: "Michael Wilson",
    position: "Landscape Designer",
    image: "https://i.pravatar.cc/300?img=6",
    bio: "Passionate about creating sustainable and beautiful outdoor spaces.",
    linkedIn: "https://www.linkedin.com/in/michaelwilson",
    expertise: ["Landscape Design", "Sustainability", "Aesthetics"],
  },
  {
    name: "Sophia Martinez",
    position: "Sustainability Consultant",
    image: "https://i.pravatar.cc/300?img=7",
    bio: "Dedicated to promoting eco-friendly and sustainable practices.",
    linkedIn: "https://www.linkedin.com/in/sophiamartinez",
    expertise: ["Sustainability", "Eco-Friendly Practices", "Consulting"],
  },
  {
    name: "James Anderson",
    position: "Urban Planner",
    image: "https://i.pravatar.cc/300?img=8",
    bio: "Specialist in designing efficient and livable urban environments.",
    linkedIn: "https://www.linkedin.com/in/jamesanderson",
    expertise: ["Urban Planning", "Efficiency", "Livability"],
  },
  {
    name: "Olivia Thomas",
    position: "Graphic Designer",
    image: "https://i.pravatar.cc/300?img=9",
    bio: "Creative professional with expertise in visual storytelling.",
    linkedIn: "https://www.linkedin.com/in/oliviathomas",
    expertise: ["Graphic Design", "Visual Storytelling", "Creativity"],
  },
];

const TeamsCardContainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden border-x border-[#504F4F]/20 bg-[#1E1E1E] p-7 md:p-20">
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
          className="mt-1 font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty text-[#D9D9D9]"
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
      <div className="hide-scrollbar mt-30 grid h-fit w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sampleData.map((data, i) => (
          <CardsTeam key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TeamsCardContainer;
