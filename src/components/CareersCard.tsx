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
      <div className="flex p-10">
        <div className="w-full">
          <h1 className="font-[ClashDisplay] text-2xl">{jobTitle}</h1>
          <p className="mt-3 font-[SansationLight] text-base font-normal text-[#D9D9D9]">
            {jobShortDescription}
          </p>
        </div>
        <div className="flex cursor-pointer items-center font-[SansationLight] text-lg">
          Apply{" "}
          <span className="ml-3 text-2xl">
            <GoArrowUpRight />
          </span>
        </div>
      </div>
      <hr className="h-[1px] border-none bg-[#504F4F]" />

      {/* Job Info*/}
      <div className="grid grid-cols-2 gap-10 p-10 py-20">
        {/* Job type */}
        <div className="space-y-4">
          <div>
            <p className="font-[ClashDisplay] text-sm text-[#D9D9D9]">
              Job Type
            </p>
            <h1 className="mt-2 font-[ClashDisplay] text-xl font-normal text-white">
              {jobType}
            </h1>
            <hr className="mt-1 h-[1px] border-none bg-[#504F4F]" />
          </div>

          <div>
            <p className="font-[ClashDisplay] text-sm text-[#D9D9D9]">
              Location
            </p>
            <h1 className="mt-2 font-[ClashDisplay] text-xl font-normal text-white">
              {jobLocation}
            </h1>
            <hr className="mt-1 h-[1px] border-none bg-[#504F4F]" />
          </div>
        </div>

        {/* Job description */}
        <div>
          <h1 className="font-[ClashDisplay] text-2xl font-normal text-white">
            Job Description
          </h1>
          <p className="mt-2 font-[SansationLight] text-[#D9D9D9]">
            {jobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
