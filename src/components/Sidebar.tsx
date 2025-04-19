import { useSideBarStore } from "@/store/SideBarStore";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const setOpen = useSideBarStore((state) => state.setOpen);
  const isOpen = useSideBarStore((state) => state.isOpen);

  console.log("Sidebar isOpen:", isOpen); // Debugging line

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 right-0 z-20 flex h-full w-full justify-end bg-black/40 backdrop-blur-md md:hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="block h-full w-full max-w-[300px] bg-[#1E1E1E] p-5 shadow-lg md:hidden"
      >
        <div className="mt-5 ml-5 w-full py-4">
          <div
            onClick={closeSidebar}
            className="absolute top-5 right-5 z-50 cursor-pointer border border-[#504F4F] p-2 text-[clamp(1rem,2vw,1.5rem)] text-[#D9D9D9] transition-all duration-300 ease-in-out hover:bg-[#D9D9D9]/20 active:bg-[#D9D9D9]/20 md:top-10 md:right-10"
          >
            <MdClose />
          </div>

          <ul className="flex flex-col items-start space-y-4 text-[#D9D9D9]">
            <li onClick={closeSidebar}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={closeSidebar}>
              <Link to={"/teams"}>Teams</Link>
            </li>
            <li onClick={closeSidebar}>
              <Link to={"/careers"}>Careers</Link>
            </li>
            <li onClick={closeSidebar}>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
