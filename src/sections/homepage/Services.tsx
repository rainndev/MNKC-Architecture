import StickyScrollReveal from "@/components/StickyScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { useServicesStore } from "@/store/ServicesStore";
import { useSectionTracker } from "@/hooks/use-section-tracker";

const Services = () => {
  const ref = useSectionTracker({ title: "Services we offer", number: "02" });
  const isContentVisible = useServicesStore((state) => state.isContentVisbile);

  return (
    <div
      ref={ref}
      id="services"
      className="relative flex h-screen w-full flex-col justify-center bg-[linear-gradient(to_right,rgba(80,79,79,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1E1E1E] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
      <AnimatePresence>
        {!isContentVisible && (
          <motion.div
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-7xl p-7">
              {/* header title */}
              <div className="my-6 flex items-center text-nowrap">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                  exit={{ opacity: 0, y: -30 }}
                  className="font-[ClashDisplay] text-[clamp(1.5rem,3vw,3rem)] font-medium text-[#D9D9D9]"
                >
                  <span className="text-[#FCAC04]">Services</span> we offer
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
                className="mt-10 font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] leading-loose font-normal text-[#D9D9D9] md:leading-[44px]"
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
