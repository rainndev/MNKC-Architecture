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
    <div className="border border-[#504F4F] text-white">
      {/* Info about careers */}
      <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        <div className="w-full">
          <h1 className="font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.5rem)] text-[#FCAC04]">
            {jobTitle}
          </h1>
          <p className="mt-3 font-[SansationLight] text-base text-[clamp(.9rem,3vw,1rem)] text-[#D9D9D9]">
            {jobShortDescription}
          </p>
        </div>
        <div className="flex cursor-pointer items-center justify-end font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)]">
          Apply{" "}
          <span className="ml-3 text-2xl">
            <GoArrowUpRight />
          </span>
        </div>
      </div>
      <hr className="h-[1px] border-none bg-[#504F4F]" />

      {/* Job Info*/}
      <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        {/* Job type */}
        <div className="space-y-4">
          <div>
            <p className="font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] text-[#D9D9D9]">
              Job Type
            </p>
            <h1 className="mt-1 font-[ClashDisplay] text-[clamp(1.1rem,3vw,1.25rem)] font-normal text-white">
              {jobType}
            </h1>
            <hr className="mt-3 h-[1px] border-none bg-[#504F4F]" />
          </div>

          <div>
            <p className="font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] text-[#D9D9D9]">
              Location
            </p>
            <h1 className="mt-1 font-[ClashDisplay] text-[clamp(1.1rem,3vw,1.25rem)] font-normal text-white">
              {jobLocation}
            </h1>
            <hr className="mt-3 h-[1px] border-none bg-[#504F4F]" />
          </div>
        </div>

        {/* Job description */}
        <div>
          <h1 className="font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.5rem)] font-normal text-white">
            Job Description
          </h1>
          <p className="mt-2 font-[SansationLight] text-[clamp(.9rem,3vw,1rem)] text-[#D9D9D9]">
            {jobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
