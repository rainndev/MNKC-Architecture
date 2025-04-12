import StickyScrollReveal from "../component/StickyScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { useServicesStore } from "../store/ServicesStore";

const Services = () => {
  const isContentVisible = useServicesStore((state) => state.isContentVisbile);

  return (
    <div
      id="services"
      className="mt-15 flex h-screen w-full flex-col justify-center"
    >
      <AnimatePresence>
        {!isContentVisible && (
          <motion.div
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-7xl p-10">
              {/* header title */}
              <div className="my-6 flex items-center text-nowrap">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                  exit={{ opacity: 0, y: -30 }}
                  className="font-[ClashDisplay] text-[clamp(2.5rem,3vw,3rem)] font-medium text-[#D9D9D9]"
                >
                  <span className="text-[#FCAC04]">Services</span> we offer
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  className="ml-10 h-[1px] w-full bg-[#504F4F]"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="mt-10 font-[ClashDisplay] text-[clamp(1rem,3vw,1.125rem)] leading-[44px] font-normal text-[#D9D9D9]"
              >
                At MNKC Architecture, we specialize in designing modern homes
                and buildings that blend creativity with functionality. Our team
                is dedicated to crafting spaces that are not only visually
                stunning but also practical for everyday living.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="flex h-full w-full items-center justify-center bg-amber-200">
        test
      </div> */}

      <StickyScrollReveal />
    </div>
  );
};

export default Services;
