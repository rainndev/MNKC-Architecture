import { useEffect } from "react";
import Homepage from "./pages/Homepage";
import Lenis from "lenis";

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
        <Homepage />
      </div>

      <div className="fixed right-0 bottom-0 left-0 z-50 flex h-16 w-full bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
    </>
  );
};

export default App;
