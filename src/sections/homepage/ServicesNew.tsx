import { content } from "@/data/services-data";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";

const ServicesNew = () => {
  const ref = useSectionTracker({ title: "Services we offer", number: "02" });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[linear-gradient(to_right,rgba(80,79,79,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.4)_1px,transparent_1px)] bg-[size:2rem_2rem] p-7"
    >
      <div className="bg-logo-black pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="md:bg-logo-yellow/70 absolute -top-20 left-100 z-5 hidden h-[1100px] w-[200px] -rotate-45 rounded-full blur-[200px] sm:block" />

      <div className="z-10 flex h-full w-full flex-col items-center justify-center text-center font-[ClashDisplay]">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          className="text-logo-white/50 mt-5 mb-0 w-full text-[clamp(.9rem,3vw,1.25rem)]"
        >
          Our services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="text-logo-white w-full text-[clamp(1.5rem,3vw,3rem)] font-medium md:whitespace-nowrap"
        >
          <span className="text-logo-yellow">What we offer</span> to Bring Your
          Vision to Life
        </motion.h1>
      </div>

      <div className="z-10 mt-15 grid h-full max-w-7xl grid-cols-1 items-center justify-center gap-4 p-0 md:grid-cols-2 md:gap-4 md:p-7 lg:grid-cols-3">
        {content.map((data, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-logo-white h-full w-full"
          >
            <div className="group border-logo-gray/50 relative h-full rounded-md border transition-all duration-500 ease-in-out md:rounded-xl md:p-[2px]">
              {/* Gradient border layer --Desktop */}
              <div className="from-logo-white/10 via-logo-gray/30 to-logo-yellow/20 absolute inset-0 hidden rounded-md bg-gradient-to-r opacity-100 transition-opacity duration-500 ease-in-out md:block md:rounded-xl md:opacity-0 md:group-hover:opacity-100"></div>

              {/* Gradient border layer --Mobile */}
              <div className="from-logo-white/5 via-logo-gray/10 to-logo-yellow/15 absolute inset-0 block rounded-md bg-gradient-to-r p-[2px] md:hidden">
                <div className="bg-logo-black/20 h-full w-full rounded-md"></div>
              </div>

              {/* Inner content card */}
              <div className="group border-logo-gray/30 bg-logo-black/60 group-hover:bg-logo-black/70 relative h-full rounded-md border p-5 transition-all duration-500 ease-in-out md:rounded-xl md:p-8">
                <div className="flex items-center justify-start gap-4">
                  <span className="text-logo-yellow bg-logo-gray/30 bg-striped rounded-full p-3 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                    {data.icon}
                  </span>
                  <h1 className="text-logo-white text-[clamp(1.1rem,3vw,1.25rem)] font-semibold">
                    {data.title}
                  </h1>
                </div>
                <p className="text-logo-white/80 mt-5 font-[SansationLight] text-[clamp(.9rem,3vw,1.1rem)] leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesNew;
