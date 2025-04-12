const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex w-full items-center justify-center border-b border-[#504F4F] bg-[linear-gradient(to_right,rgba(80,79,79,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,79,79,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <div className="grid h-screen w-full max-w-7xl grid-cols-2 items-center justify-center">
        <div className="w-full">
          <h1 className="font-[ClashDisplay] text-7xl font-medium text-[#D9D9D9]">
            <span className="text-[#FCAC04]">Designing the Future</span>{" "}
            Building Today
          </h1>
          <p className="mt-4 font-[SansationLight] text-lg font-normal text-[#D9D9D9]">
            Award wining architectural solutions that transform spaces and
            elevate experiences
          </p>

          <div className="mt-10">
            <button className="text-md rounded-lg bg-[#D9D9D9]/10 px-6 py-3 font-[ClashDisplay] font-medium text-[#D9D9D9] transition duration-300 ease-in-out hover:bg-[#D9D9D9]/20">
              Start Your Project
            </button>
            <button className="text-md ml-5 rounded-lg border border-[#504F4F] px-6 py-3 font-[ClashDisplay] font-medium text-white transition duration-300 ease-in-out hover:bg-[#FCAC04] hover:text-[#1E1E1E]">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex h-full w-full items-center"></div>

        <img
          className="absolute right-0 h-full"
          src="/images/hero-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
