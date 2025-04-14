import { motion } from "framer-motion";
import { CardsCarousel } from "../components/CardsCarousel";

const Featured = () => {
  return (
    <div
      id="featured"
      className="mb-20 flex min-h-screen w-full flex-col items-center justify-center p-10 text-center text-5xl font-bold text-white"
    >
      {/* Header and desc */}
      <div className="w-full max-w-7xl">
        {/* header title */}
        <div className="my-6 flex items-center justify-start text-nowrap">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -30 }}
            className="font-[ClashDisplay] text-[clamp(1.8rem,3vw,3rem)] font-medium text-[#D9D9D9]"
          >
            <span className="text-[#FCAC04]">Featured</span> Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="ml-5 h-[1px] w-full bg-[#504F4F] md:ml-10"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="mt-10 text-start font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] leading-loose font-normal text-[#D9D9D9] md:leading-[44px]"
        >
          Explore a selection of our signature projects that showcase MNKC
          Architecture’s commitment to innovation, sustainability, and timeless
          design. Each project reflects our passion for creating spaces that
          elevate everyday life
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="mt-10 flex w-full max-w-7xl items-center justify-center overflow-hidden">
        <CardsCarousel />
      </div>
    </div>
  );
};

export default Featured;
