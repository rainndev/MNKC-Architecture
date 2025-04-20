import { GoArrowUpRight } from "react-icons/go";

interface CareersPageProps {
  data: {
    jobTitle: string;
    jobShortDescription: string;
    jobType: string;
    jobLocation: string;
    jobDescription: string;
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
    <div className="border-logo-gray border text-white shadow-lg">
      {/* Info about careers */}
      <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
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
      </div>
      <hr className="bg-logo-gray h-[1px] border-none" />

      {/* Job Info*/}
      <div className="bg-striped grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        {/* Job type */}
        <div className="space-y-4">
          <div>
            <p className="text-logo-white font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)]">
              Job Type
            </p>
            <h1 className="mt-1 font-[ClashDisplay] text-[clamp(1rem,3vw,1.25rem)] font-normal text-white">
              {jobType}
            </h1>
          </div>

          <div>
            <p className="text-logo-white font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)]">
              Location
            </p>
            <h1 className="mt-1 font-[ClashDisplay] text-[clamp(1rem,3vw,1.25rem)] font-normal text-white">
              {jobLocation}
            </h1>
          </div>
        </div>

        {/* Job description */}
        <div>
          <h1 className="font-[ClashDisplay] text-[clamp(1.2rem,3vw,1rem)] font-normal text-white">
            Job Description
          </h1>
          <p className="text-logo-white mt-2 font-[SansationLight] text-[clamp(.9rem,3vw,1rem)]">
            {jobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
