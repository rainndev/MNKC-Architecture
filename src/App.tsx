import { useEffect } from "react";
import Homepage from "@/pages/Homepage";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";
import Teamspage from "@/pages/Teamspage";
import Navigation from "@/components/Navigation";
import LeftSideOverlay from "./components/LeftSideOverlay";

const App = () => {
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

        {/* Left side overlay */}
        <LeftSideOverlay />
      </div>
    </>
  );
};

export default App;
