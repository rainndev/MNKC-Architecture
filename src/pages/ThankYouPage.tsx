import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1E1E1E]">
      <div className="bg-striped flex flex-col items-center justify-center gap-5 border-x-5 border-[#504F4F]/20 p-10 text-center md:p-20">
        <h1 className="font-[ClashDisplay] text-[clamp(1.5rem,4vw,4rem)] font-medium text-pretty text-[#FCAC04]">
          Thanks for the message!
        </h1>
        <p className="font-[SansationLight] text-[clamp(.8rem,3vw,1.125rem)] font-normal text-[#D9D9D9]">
          Thank you for reaching out. We’ll be in touch as soon as possible.
        </p>
        <Link to={"/"}>
          <div className="group inline-block border border-[#504F4F]">
            <button className="bg-striped relative m-[3px] cursor-pointer overflow-hidden px-5 py-2 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-medium">
              {/* Animated Background */}
              <span className="absolute top-0 left-0 z-10 h-full w-full bg-[#FCAC04] transition-all duration-500 ease-in-out group-hover:w-0 active:w-0" />

              {/* Text on Top */}
              <span className="relative z-20 font-medium text-[#1E1E1E] transition-colors duration-300 ease-in-out group-hover:text-[#D9D9D9]">
                Go Back to Homepage
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
