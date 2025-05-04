import { motion } from "framer-motion";

interface ProjectCardProps {
  data: {
    title: string;
    img: string;
  };
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div>
      <h1 className="text-logo-white text-[clamp(.8rem,2vw,1rem)]">
        {data.title}
      </h1>
      <div className="bg-logo-black/20 border-logo-gray/20 mt-3 flex h-fit w-full items-center justify-center rounded-lg border p-2 shadow-lg md:mr-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden rounded-lg"
        >
          <img
            loading="lazy"
            src={data.img}
            alt={data.title}
            className="aspect-video h-full w-full rounded-lg object-cover opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
