import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex w-full items-center justify-center border-b border-[#504F4F] bg-[linear-gradient(to_right,rgba(80,79,79,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <div className="grid h-screen w-full max-w-7xl grid-cols-2 items-center justify-center">
        <div className="w-full">
          {/* Heading  */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="font-[ClashDisplay] text-7xl font-medium text-[#D9D9D9]"
          >
            <span className="text-[#FCAC04]">Designing the Future</span>{" "}
            Building Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="mt-4 font-[SansationLight] text-lg font-normal text-[#D9D9D9]"
          >
            Award wining architectural solutions that transform spaces and
            elevate experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="mt-10"
          >
            {/* buttons */}
            <button className="text-md rounded-lg bg-[#D9D9D9]/10 px-6 py-3 font-[ClashDisplay] font-medium text-[#D9D9D9] transition duration-300 ease-in-out hover:bg-[#D9D9D9]/20">
              Start Your Project
            </button>
            <button className="text-md ml-5 rounded-lg border border-[#504F4F] px-6 py-3 font-[ClashDisplay] font-medium text-white transition duration-300 ease-in-out hover:bg-[#FCAC04] hover:text-[#1E1E1E]">
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="flex h-full w-full items-center"></div>
        <img
          className="absolute -top-5 right-0 h-full"
          src="/images/hero-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
