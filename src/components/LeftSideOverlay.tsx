import { useLeftSideOverlayStore } from "@/store/LeftSideOverlayStore";
import { AnimatePresence, motion } from "framer-motion";

const LeftSideOverlay = () => {
  const leftSidedata = useLeftSideOverlayStore((state) => state.data);
  return (
    <div>
      <div className="z-50 hidden md:bottom-10 lg:fixed lg:left-10 lg:block lg:w-[20%]">
        <AnimatePresence mode="wait">
          {leftSidedata.number !== "00" && (
            <motion.div
              key={leftSidedata.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pointer-events-none flex origin-bottom-left -rotate-90 items-center space-x-5 font-[ClashDisplay] text-sm font-light tracking-widest text-white"
            >
              <p className="whitespace-nowrap">{leftSidedata.number}</p>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-logo-yellow h-[1px] w-15"
              />
              <p className="text-nowrap">{leftSidedata.title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeftSideOverlay;
