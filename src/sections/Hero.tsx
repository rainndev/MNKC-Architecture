import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLeftSideOverlayStore } from "../store/LeftSideOverlayStore";

const Hero = () => {
  const ref = useRef(null);

  const setLeftSideOverlayData = useLeftSideOverlayStore(
    (state) => state.setData,
  );

  const isInView = useInView(ref, { amount: 0.3 });
  useEffect(() => {
    if (isInView) {
      setLeftSideOverlayData({ number: "00" });
    }
  }, [isInView, setLeftSideOverlayData]);

  return (
    <div
      ref={ref}
      id="hero"
      className="relative flex w-full items-center justify-center border-b border-[#504F4F] bg-[linear-gradient(to_right,rgba(80,79,79,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.4)_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1E1E1E] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      <div className="grid h-screen w-full max-w-7xl grid-cols-1 items-center justify-center p-10 py-32 md:grid-cols-2">
        <div className="z-10 w-full">
          {/* Heading  */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] leading-tight font-medium text-pretty text-[#D9D9D9]"
          >
            <span className="text-[#FCAC04]">Designing the Future</span>{" "}
            Building Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="mt-4 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal text-[#D9D9D9]"
          >
            Award wining architectural solutions that transform spaces and
            elevate experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="mt-10 space-y-2 space-x-5"
          >
            {/* buttons */}

            <a href="https://www.facebook.com/MNKCArchitecture" target="_blank">
              <button className="group relative cursor-pointer overflow-hidden rounded-lg border border-[#504F4F] bg-[#D9D9D9]/10 px-6 py-3 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-normal text-white">
                <span className="relative z-10 transition-colors duration-300 ease-in-out">
                  Start Your Project
                </span>
                <span className="absolute top-0 left-0 z-0 h-full w-0 bg-[#D9D9D9]/20 transition-all duration-500 ease-in-out group-hover:w-full active:w-full" />
              </button>
            </a>

            <a href="#about">
              <button className="group relative cursor-pointer overflow-hidden rounded-lg border border-[#504F4F] px-6 py-3 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-normal text-white">
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#1E1E1E]">
                  Learn More
                </span>
                <span className="absolute top-0 left-0 z-0 h-full w-0 bg-[#FCAC04] transition-all duration-500 ease-in-out group-hover:w-full active:w-full" />
              </button>
            </a>
          </motion.div>
        </div>
        <div className="flex h-full w-full items-center"></div>
        <img
          className="pointer-events-none absolute -top-5 right-0 z-5 h-full object-cover"
          src="/images/hero-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
