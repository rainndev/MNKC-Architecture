import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useSideBarStore } from "@/store/SideBarStore";
import { useEffect, useState } from "react";

const Navigation = () => {
  const setOpen = useSideBarStore((state) => state.setOpen);
  const [title, setTitle] = useState("Home");

  const toggleMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.title = `${title} | MNKC Architecture`;
  }, [title]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-logo-black/40 border-b-logo-gray sticky top-0 left-0 z-20 flex w-full justify-center border-b p-5 font-[SansationLight] backdrop-blur-md"
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

            {/* Desktop NavLinks */}
            <div className="text-logo-white hidden md:block">
              <ul className="flex space-x-10">
                <li onClick={() => setTitle("Home")}>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li onClick={() => setTitle("Teams")}>
                  <NavLink to={"/teams"}>Teams</NavLink>
                </li>
                <li onClick={() => setTitle("Careers")}>
                  <NavLink to={"/careers"}>Careers</NavLink>
                </li>
                <li onClick={() => setTitle("Projects")}>
                  <NavLink to={"/projects"}>Projects</NavLink>
                </li>
                <li onClick={() => setTitle("Contact")}>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>

                <li onClick={() => setTitle("Faqs")}>
                  <NavLink to={"/faqs"}>Faqs</NavLink>
                </li>
              </ul>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Navigation;
