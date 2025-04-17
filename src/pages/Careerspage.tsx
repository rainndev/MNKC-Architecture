import CareersCard from "@/components/CareersCard";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";

const data = [
  {
    jobTitle: "3D Visualizer",
    jobShortDescription:
      "Join us as a 3D visualizer and bring our designs to life.",
    jobType: "Full-time",
    jobLocation: "Magalang, Pampanga",
    jobDescription:
      "You will create stunning 3D models and renderings for our projects.",
  },
  {
    jobTitle: "Architectural Apprentice",
    jobShortDescription:
      "We are looking for an architectural apprentice to join our team.",
    jobType: "Part-time",
    jobLocation: "Remote",
    jobDescription:
      "You will assist in the design and development of architectural projects.",
  },
];

const Careerspage = () => {
  const ref = useSectionTracker({
    title: "Careers",
    number: "00",
  });

  return (
    <div
      ref={ref}
      className="bg-striped flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="h-full w-full max-w-7xl border-x border-[#504F4F]/20">
        <div
          ref={ref}
          className="flex h-full w-full flex-col items-center justify-center bg-[#1E1E1E] p-7 md:p-20"
        >
          {/* Container */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-fit border border-[#504F4F] px-4 py-2 font-[ClashDisplay] text-[clamp(.9rem,2vw,1rem)] text-[#D9D9D9]"
            >
              We are hiring!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-2 font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty text-[#D9D9D9]"
            >
              Build the Future, Together
            </motion.h1>
            <p className="relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal text-[#D9D9D9]">
              We’re on the lookout for passionate, creative people who love
              architecture as much as we do. At MNKC, we believe great design
              starts with great people. If you're someone who dreams big, cares
              about the details, and wants to make an impact through thoughtful
              spaces — we’d love to meet you.
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

          <div className="mt-30 flex w-full flex-col space-y-10">
            {data.map((jobData, i) => (
              <CareersCard key={i} data={jobData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerspage;
