import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="bg-logo-black flex h-screen w-full items-center justify-center">
      <div className="bg-striped border-logo-gray/20 flex max-w-4xl flex-col items-center justify-center gap-5 border-x-5 p-5 text-center md:p-20">
        <h1 className="text-logo-yellow font-[ClashDisplay] text-[clamp(1.5rem,3vw,5rem)] font-medium text-pretty">
          Thanks for the message!
        </h1>
        <p className="text-logo-white font-[SansationLight] text-[clamp(.8rem,2vw,1.125rem)] font-normal">
          Thank you for reaching out. We’ll be in touch as soon as possible. In
          the meantime, feel free to explore our website and learn
        </p>
        <Link to={"/"}>
          <div className="group border-logo-gray inline-block border">
            <button className="bg-striped relative m-[3px] cursor-pointer overflow-hidden px-5 py-2 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-medium">
              {/* Animated Background */}
              <span className="bg-logo-yellow absolute top-0 left-0 z-10 h-full w-full transition-all duration-500 ease-in-out group-hover:w-0 active:w-0" />

              {/* Text on Top */}
              <span className="group-hover:text-logo-white text-logo-black relative z-20 font-medium transition-colors duration-300 ease-in-out">
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
