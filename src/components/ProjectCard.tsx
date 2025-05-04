import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  data: {
    title: string;
    img: string;
  };
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="aspect-video">
      <h1 className="text-logo-white text-[clamp(.8rem,2vw,1rem)]">
        {data.title}
      </h1>
      <div className="bg-logo-black/20 border-logo-gray/20 mt-3 flex h-fit w-full items-center justify-center rounded-lg border p-2 shadow-lg md:mr-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative aspect-video w-full overflow-hidden rounded-lg"
        >
          {/* Skeleton loader */}
          {!loaded && (
            <div className="bg-logo-white/10 absolute inset-0 animate-pulse rounded-lg" />
          )}

          <img
            loading="lazy"
            src={data.img}
            alt={data.title}
            onLoad={() => setLoaded(true)}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className={`h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out select-none hover:scale-105 hover:opacity-100 active:scale-105 active:opacity-100 ${
              loaded ? "opacity-30" : "opacity-0"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
