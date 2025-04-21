import { useEffect } from "react";
import Homepage from "@/pages/Homepage";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";
import Teamspage from "@/pages/Teamspage";
import Navigation from "@/components/Navigation";
import LeftSideOverlay from "@/components/LeftSideOverlay";
import Careerspage from "@/pages/Careerspage";
import Sidebar from "@/components/Sidebar";
import { useSideBarStore } from "@/store/SideBarStore";
import { AnimatePresence } from "framer-motion";
import Contactpage from "@/pages/Contactpage";
import ThankYouPage from "@/pages/ThankYouPage";
import Faqs from "@/pages/Faqs";
import Footer from "./sections/homepage/Footer";

const App = () => {
  const isOpen = useSideBarStore((state) => state.isOpen);

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
      <div className="bg-logo-black flex h-full w-full flex-col items-center justify-center">
        <Navigation />
        <AnimatePresence>{isOpen && <Sidebar />}</AnimatePresence>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/teams" element={<Teamspage />} />
          <Route path="/careers" element={<Careerspage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/contact/success-form" element={<ThankYouPage />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
        <Footer />
        {/* Left side overlay */}
        <LeftSideOverlay />
      </div>
    </>
  );
};

export default App;
