import { GoArrowUpRight } from "react-icons/go";

interface CareersPageProps {
  data: {
    jobTitle: string;
    jobShortDescription: string;
    jobType: string;
    jobLocation: string;
    jobDescription: string[];
  };
}

const CareersCard = ({ data }: CareersPageProps) => {
  const {
    jobTitle,
    jobShortDescription,
    jobType,
    jobLocation,
    jobDescription,
  } = data;

  return (
    <article className="border-logo-gray/30 border text-white">
      {/* Info about careers */}
      <header className="bg-striped grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        <div className="w-full">
          <h1 className="text-logo-yellow font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.5rem)]">
            {jobTitle}
          </h1>
          <p className="text-logo-white mt-3 font-[SansationLight] text-base text-[clamp(.9rem,3vw,1rem)]">
            {jobShortDescription}
          </p>
        </div>
        <div className="flex w-full items-center justify-end">
          <a
            href="mailto:mnkcarchitecture@gmail.com"
            className="group hover:text-logo-gray flex w-fit cursor-pointer items-center justify-end font-[SansationLight] text-[clamp(.9rem,3vw,1rem)] transition-colors duration-300"
          >
            Apply{" "}
            <span className="ml-2 text-2xl transition-transform duration-400 ease-in-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
              <GoArrowUpRight />
            </span>
          </a>
        </div>
      </header>

      <hr className="bg-logo-gray/30 h-[1px] border-none" />

      {/* Job Info*/}
      <section className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        {/* Job type */}
        <div className="space-y-4">
          <div>
            <p className="border-logo-white/20 border-b-[1px] pb-2 font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] text-white">
              Job Type
            </p>
            <h1 className="text-logo-white/80 mt-5 font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] font-normal">
              {jobType}
            </h1>
          </div>

          <div>
            <p className="border-logo-white/20 border-b-[1px] pb-2 font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] text-white">
              Location
            </p>
            <h1 className="text-logo-white/80 mt-5 font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] font-normal">
              {jobLocation}
            </h1>
          </div>
        </div>

        {/* Job description */}
        <div>
          <h1 className="border-logo-white/20 border-b-[1px] pb-2 font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] font-normal text-white">
            Job Description
          </h1>

          <ul className="mt-5 space-y-2">
            {jobDescription.map((text) => (
              <li className="marker:text-logo-yellow text-logo-white/95 list-inside list-disc font-[SansationLight] text-[clamp(.8rem,3vw,1rem)]">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default CareersCard;
