import { useEffect } from "react";
import Homepage from "@/pages/Homepage";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { useLeftSideOverlayStore } from "@/store/LeftSideOverlayStore";
import { Routes, Route } from "react-router-dom";
import Teamspage from "@/pages/Teamspage";
import Navigation from "@/components/Navigation";

const App = () => {
  const leftSidedata = useLeftSideOverlayStore((state) => state.data);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-[#1E1E1E]">
        <Navigation />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/teams" element={<Teamspage />} />
        </Routes>
        <div className="z-50 hidden md:bottom-10 lg:fixed lg:left-10 lg:block lg:w-[20%]">
          <AnimatePresence mode="wait">
            {leftSidedata.number !== "00" && (
              <motion.div
                key={leftSidedata.number}
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
                  className="h-[1px] w-15 bg-[#FCAC04]"
                />
                <p className="text-nowrap">{leftSidedata.title}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* <div className="fixed right-0 bottom-0 left-0 z-50 flex h-16 w-full bg-gradient-to-t from-[#1E1E1E] to-transparent"></div> */}
    </>
  );
};

export default App;
