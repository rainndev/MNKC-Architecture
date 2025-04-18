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
    <div className="border border-[#504F4F] bg-black/10 text-white shadow-lg">
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
        <div className="flex w-full items-center justify-end">
          <div className="group flex w-fit cursor-pointer items-center justify-end font-[SansationLight] text-[clamp(.9rem,3vw,1rem)] transition-colors duration-300 hover:text-[#504F4F]">
            Apply{" "}
            <span className="ml-2 text-2xl transition-transform duration-400 ease-in-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
              <GoArrowUpRight />
            </span>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-none bg-[#504F4F]" />

      {/* Job Info*/}
      <div className="bg-striped grid grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-10">
        {/* Job type */}
        <div className="space-y-4">
          <div>
            <p className="font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] text-[#D9D9D9]">
              Job Type
            </p>
            <h1 className="mt-1 font-[ClashDisplay] text-[clamp(1rem,3vw,1.25rem)] font-normal text-white">
              {jobType}
            </h1>
          </div>

          <div>
            <p className="font-[ClashDisplay] text-[clamp(.8rem,3vw,1rem)] text-[#D9D9D9]">
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
          <p className="mt-2 font-[SansationLight] text-[clamp(.9rem,3vw,1rem)] text-[#D9D9D9]">
            {jobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
