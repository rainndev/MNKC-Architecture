import { useSideBarStore } from "@/store/SideBarStore";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosBriefcase } from "react-icons/io";
import { RiMessage3Fill } from "react-icons/ri";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

const Sidebar = () => {
  const setOpen = useSideBarStore((state) => state.setOpen);
  const isOpen = useSideBarStore((state) => state.isOpen);

  console.log("Sidebar isOpen:", isOpen); // Debugging line

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 right-0 z-20 flex h-full w-full justify-end bg-black/40 backdrop-blur-md md:hidden"
    >
      <div className="bg-striped border-logo-black w-7 border-x" />
      <motion.header
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-logo-black block h-full w-full max-w-[300px] p-5 shadow-lg md:hidden"
      >
        <nav className="mt-5 ml-5 w-full py-4">
          <div
            onClick={closeSidebar}
            className="text-logo-white hover:bg-logo-white/20 active:bg-logo-white/20 border-logo-gray absolute top-5 right-5 z-50 cursor-pointer border p-2 text-[clamp(1rem,2vw,1.5rem)] transition-all duration-300 ease-in-out md:top-10 md:right-10"
          >
            <MdClose />
          </div>

          <ul className="text-logo-white mt-10 flex flex-col items-start space-y-5 text-[clamp(1rem,2vw,1.5rem)]">
            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/"}
              >
                <AiFillHome className="mr-4" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/teams"}
              >
                <BsFillPeopleFill className="mr-4" />
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/careers"}
              >
                <IoIosBriefcase className="mr-4" />
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/projects"}
              >
                <FaFolder className="mr-4" />
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/contact"}
              >
                <RiMessage3Fill className="mr-4" />
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeSidebar}
                className="text-logo-white flex items-center"
                to={"/faqs"}
              >
                <BsFillQuestionSquareFill className="mr-4" />
                Faqs
              </NavLink>
            </li>
          </ul>
        </nav>
      </motion.header>
    </motion.aside>
  );
};

export default Sidebar;
