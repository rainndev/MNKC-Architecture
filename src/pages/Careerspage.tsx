import CareersCard from "@/components/CareersCard";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";
import { careersContent } from "@/data/careers-data";

const Careerspage = () => {
  const ref = useSectionTracker({
    title: "Build the Future, Together",
    number: "01",
  });

  return (
    <section
      ref={ref}
      className="bg-striped flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="border-logo-gray/20 h-full min-h-screen w-full max-w-7xl border-x">
        <div
          ref={ref}
          className="bg-logo-black flex h-full w-full flex-col items-center justify-center p-7 py-20 md:p-20 md:pb-50"
        >
          {/* Container */}
          <header>
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
              We're looking for passionate, creative people who love
              architecture. If you're someone who thinks big, pays attention to
              the details, and wants to design spaces that matter, let's talk
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

          <div className="mt-30 flex w-full flex-col space-y-10">
            {careersContent.map((jobData, i) => (
              <CareersCard key={i} data={jobData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careerspage;
