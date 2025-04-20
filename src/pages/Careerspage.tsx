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
    title: "Build the Future, Together",
    number: "01",
  });

  return (
    <div
      ref={ref}
      className="bg-striped flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="border-logo-gray/20 h-full min-h-screen w-full max-w-7xl border-x">
        <div
          ref={ref}
          className="bg-logo-black flex h-full w-full flex-col items-center justify-center p-7 py-20 md:p-20"
        >
          {/* Container */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-logo-white border-logo-gray w-fit border px-4 py-2 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)]"
            >
              We are hiring!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-logo-white mt-2 font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty"
            >
              <span className="text-logo-yellow">Build the Future,</span>{" "}
              Together
            </motion.h1>
            <p className="text-logo-white relative mt-2 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal">
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
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
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
