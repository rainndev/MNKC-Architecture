import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSideBarStore } from "@/store/SideBarStore";

const Navigation = () => {
  const setOpen = useSideBarStore((state) => state.setOpen);

  const toggleMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="sticky top-0 left-0 z-20 flex w-full justify-center border-b border-b-[#504F4F] bg-[#1E1E1E]/40 p-5 font-[SansationLight] backdrop-blur-md"
      >
        <nav className="flex w-full max-w-7xl flex-col items-center justify-between">
          <div className="flex w-full items-center justify-between">
            {/* logo */}
            <div>
              <img
                src="/images/logo/logo-with-text.svg"
                className="w-26 sm:w-30"
                alt="logo"
              />
            </div>

            {/* Desktop links */}
            <div className="hidden text-[#D9D9D9] md:block">
              <ul className="flex space-x-10">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/teams"}>Teams</Link>
                </li>
                <li>
                  <Link to={"/careers"}>Careers</Link>
                </li>
              </ul>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;
