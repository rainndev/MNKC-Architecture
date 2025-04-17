import { useTeamsModalStore } from "@/store/TeamsModalStore";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const TeamsModal = () => {
  const data = useTeamsModalStore((stata) => stata.data);
  const isOpen = useTeamsModalStore((state) => state.isOpen);
  const openModal = useTeamsModalStore((state) => state.openModal);

  const { position, expertise, image, bio, linkedIn } = data;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div>
          {/* Overlay profile */}
          <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-2xl">
            <div
              onClick={() => openModal(false)}
              className="absolute top-10 right-10 cursor-pointer border border-[#504F4F] p-2 text-2xl text-[#D9D9D9] transition-all duration-300 ease-in-out hover:bg-[#D9D9D9]/20 active:bg-[#D9D9D9]/20"
            >
              <MdClose />
            </div>
            <div className="flex h-96 w-fit max-w-4xl items-center justify-center">
              <div className="bg-striped relative flex h-full w-full items-center justify-center overflow-hidden border border-dashed border-[#504F4F]/50">
                <img
                  src={image}
                  className="aspect-square h-96 w-96 border border-[#504F4F] object-cover opacity-75"
                  alt=""
                />

                <div className="item flex h-full w-fit flex-col items-start justify-center space-y-5 p-5 text-[#D9D9D9]">
                  {/* Job title */}
                  <h1 className="font-[ClashDisplay] text-4xl font-normal">
                    {position}
                  </h1>

                  {/* expertise/skills */}
                  <div className="flex space-x-2">
                    {expertise.map((skills, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/20 px-3 py-1 text-sm"
                      >
                        {skills}
                      </span>
                    ))}
                  </div>

                  {/* short bio */}

                  <p>{bio}</p>

                  {/* LinkedIn button */}
                  <div className="flex items-center text-2xl">
                    <FaLinkedin />
                    <a href={linkedIn} className="ml-2 text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamsModal;
