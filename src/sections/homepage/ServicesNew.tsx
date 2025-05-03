import { content } from "@/data/services-data";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";

const ServicesNew = () => {
  const ref = useSectionTracker({ title: "Services we offer", number: "02" });

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center p-7"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center font-[ClashDisplay]">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          className="text-logo-white/50 mt-5 mb-0 w-full text-[clamp(.9rem,3vw,1.25rem)] md:mb-1"
        >
          Our services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="text-logo-white w-full text-[clamp(1.5rem,3vw,3rem)] font-medium md:whitespace-nowrap"
        >
          What <span className="text-logo-yellow">we offer</span>
        </motion.h1>
      </div>

      <div className="mt-15 grid h-full grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.map((data, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-logo-white bg-logo-black h-full w-full"
          >
            <div className="hover:bg-logo-white/10 hover:border-logo-yellow/10 border-logo-gray/30 border p-5 transition-all duration-300 ease-in-out md:p-10">
              <div className="flex items-center justify-start gap-4">
                <span className="text-logo-yellow">{data.icon}</span>

                <h1 className="text-[clamp(1.1rem,3vw,1.25rem)] font-semibold">
                  {data.title}
                </h1>
              </div>

              <p className="text-logo-white/90 mt-5 text-[clamp(.9rem,3vw,1rem)] leading-relaxed">
                {data.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesNew;
