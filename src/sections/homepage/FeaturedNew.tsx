import { useSectionTracker } from "@/hooks/use-section-tracker";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { NavLink } from "react-router-dom";
import { projects } from "@/data/projects-data";

const FeaturedNew = () => {
  const projectsArray = projects.map((project) => project.img);

  const ref = useSectionTracker({ title: "Featured Projects", number: "03" });
  return (
    <div
      ref={ref}
      className="group z-0 flex w-full max-w-7xl flex-col items-center justify-center p-7 text-white"
    >
      <div className="bg-logo-black/40 ring-logo-gray/20 relative mx-auto my-10 w-full max-w-7xl overflow-hidden p-3 ring-1">
        {/* Overlay */}
        <div className="bg-logo-black/70 pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-10 opacity-100 transition-all duration-500 ease-in-out">
          <h1 className="text-center font-[ClashDisplay] text-[clamp(1.125rem,3vw,3rem)] font-medium text-pretty">
            <span className="text-logo-yellow">Explore Some </span>of Our
            Previous Projects
          </h1>
          <NavLink to={"/projects"} className="group pointer-events-auto">
            <div className="bg-striped border-logo-gray mt-2 inline-block border">
              <button className="text-logo-white border-logo-yellow/30 bg-logo-black/70 relative m-[2px] cursor-pointer overflow-hidden border px-5 py-2 font-[ClashDisplay] text-[clamp(.7rem,2vw,1rem)] font-normal">
                <span className="relative z-10 transition-colors duration-300 ease-in-out">
                  See Our Work
                </span>
                <span className="absolute top-0 left-0 z-0 h-full w-0 transition-all duration-500 ease-in-out group-hover:w-full active:w-full" />
              </button>
            </div>
          </NavLink>
        </div>
        <ThreeDMarquee images={projectsArray} />
      </div>
    </div>
  );
};

export default FeaturedNew;
