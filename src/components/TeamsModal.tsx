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
          <div className="fixed top-0 right-0 z-50 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-2xl">
            <div
              onClick={() => openModal(false)}
              className="text-logo-white hover:bg-logo-white/20 active:bg-logo-white/20 border-logo-gray absolute top-5 right-5 z-50 cursor-pointer border p-2 text-[clamp(1rem,2vw,1.5rem)] transition-all duration-300 ease-in-out md:top-10 md:right-10"
            >
              <MdClose />
            </div>
            <div className="m-5 w-fit max-w-4xl items-center justify-center">
              <div className="bg-striped border-logo-gray/50 grid h-full w-full grid-cols-1 items-center justify-center border border-dashed md:grid-cols-2">
                <div>
                  <img
                    loading="lazy"
                    src={image}
                    className="border-logo-gray aspect-square w-full border object-cover opacity-75"
                    alt=""
                  />
                </div>

                {/* Profile info */}
                <div className="item text-logo-white flex h-full w-full flex-col items-start justify-center p-7 md:p-10">
                  {/* Job title */}
                  <h1 className="font-[ClashDisplay] text-[clamp(1.8rem,2vw,2.25rem)] font-normal">
                    {position}
                  </h1>

                  {/* expertise/skills */}
                  <div className="space-x-2">
                    {expertise.map((skills, i) => (
                      <span
                        key={i}
                        className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[clamp(.75rem,2vw,.9rem)]"
                      >
                        {skills}
                      </span>
                    ))}
                  </div>

                  {/* short bio */}

                  <p className="mt-5 text-[clamp(.875rem,2vw,1.2rem)]">{bio}</p>

                  {/* LinkedIn button */}
                  <div className="mt-3 flex items-center text-2xl">
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
