import { motion } from "framer-motion";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useSectionTracker({ title: "Hero", number: "00" });

  return (
    <div
      ref={ref}
      id="hero"
      className="border-logo-gray relative flex w-full items-center justify-center border-b bg-[linear-gradient(to_right,rgba(80,79,79,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.4)_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <div className="bg-logo-black pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      <div className="grid h-[100dvh] w-full max-w-7xl grid-cols-1 items-center justify-center p-7 md:grid-cols-2">
        <div className="z-10 w-full">
          {/* Heading  */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="text-logo-white font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] leading-tight font-medium text-pretty"
          >
            <span className="text-logo-yellow">Designing the Future</span>{" "}
            Building Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="text-logo-white mt-4 font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal"
          >
            Award wining architectural solutions that transform spaces and
            elevate experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="mt-10 space-x-5"
          >
            {/* buttons */}

            <Link to={"/contact"}>
              <div className="group border-logo-gray inline-block border">
                <button className="bg-striped relative m-[3px] cursor-pointer overflow-hidden px-5 py-2 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-medium">
                  {/* Animated Background */}
                  <span className="bg-logo-yellow absolute top-0 left-0 z-10 h-full w-full transition-all duration-500 ease-in-out group-hover:w-0 active:w-0" />

                  {/* Text on Top */}
                  <span className="group-hover:text-logo-white text-logo-black relative z-20 font-medium transition-colors duration-300 ease-in-out">
                    Start Your Project
                  </span>
                </button>
              </div>
            </Link>

            <a href="#about">
              <div className="bg-striped border-logo-gray mt-2 inline-block border">
                <button className="group text-logo-white border-logo-gray relative m-[2px] cursor-pointer overflow-hidden border px-5 py-2 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-normal">
                  <span className="relative z-10 transition-colors duration-300 ease-in-out">
                    Learn More
                  </span>
                  <span className="bg-logo-white/20 absolute top-0 left-0 z-0 h-full w-0 transition-all duration-500 ease-in-out group-hover:w-full active:w-full" />
                </button>
              </div>
            </a>
          </motion.div>
        </div>
        <div className="hidden h-full w-full items-center md:flex">
          <img
            className="pointer-events-none absolute -top-5 right-0 z-5 h-full object-cover opacity-40"
            src="/images/hero/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
