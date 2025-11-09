import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/projects-data";
import { useState } from "react";
import { useSectionTracker } from "@/hooks/use-section-tracker";

const ContainerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childrenVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },

  exit: {
    opacity: 0,
    y: -20,
  },
};

const ProjectsPage = () => {
  const ref = useSectionTracker({ title: "Featured Projects", number: "01" });
  const tabTitles = [...new Set(projects.map((data) => data.category))];
  tabTitles.unshift("All Projects");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeTab, setActiveTab] = useState("All Projects");

  // Filter projects based on the selected tab title
  const handleTabClick = (title: string) => {
    const filteredProjects =
      title === "All Projects"
        ? projects
        : projects.filter((data) => data.category === title);

    setFilteredProjects(filteredProjects);
    setActiveTab(title);
  };

  return (
    <section
      ref={ref}
      className="text-logo-yellow flex min-h-screen w-full max-w-7xl flex-col items-center p-7"
    >
      {/* Header */}
      <header className="bg-logo-black/20 border-logo-gray/50 md:bg-striped flex w-full flex-col items-start justify-center border-b pb-4 md:border md:p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: ["easeInOut"] }}
          className="text-logo-white mt-1 font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty"
        >
          <span className="text-logo-yellow">Project</span> Showcase
        </motion.h1>
        <p className="text-logo-white relative font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal">
          Here are some example projects we've built
          <motion.span
            initial={{ height: "0%", opacity: 0, width: "0%" }}
            whileInView={{
              height: "100%",
              opacity: 0.7,
              width: ["100%", "0%"],
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
          />
        </p>
      </header>

      {/* Tab bar */}

      <div className="mt-5 h-fit w-full space-x-2">
        {tabTitles.map((title) => (
          <span
            key={title}
            onClick={() => handleTabClick(title)}
            className={`${activeTab === title ? "bg-logo-yellow text-logo-black" : "bg-logo-white/5 text-logo-white"} mt-2 inline-block cursor-pointer rounded-sm p-2 px-3 text-[clamp(.7rem,2vw,.9rem)]`}
          >
            {title}
          </span>
        ))}
      </div>

      {/* Projects Card*/}
      <motion.div
        variants={ContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mt-10 grid h-full w-full items-center gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((data, i) => (
          <motion.div variants={childrenVariant} key={i}>
            <ProjectCard data={data} key={i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
