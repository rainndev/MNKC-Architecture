import CountUp from "../component/CountUp";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div
      id="about"
      className="relative flex h-full w-full items-center justify-center border-b border-[#504F4F] bg-[#1E1E1E]"
    >
      {/* Dotted Background FIRST, behind everything */}
      <div className="absolute top-0 flex h-full w-full items-center justify-center border-b border-[#504F4F] bg-[#1E1E1E] bg-[radial-gradient(rgba(80,79,79,0.5)_1px,#1E1E1E_1px)] bg-[size:30px_30px]" />

      <div className="z-5 grid h-screen w-full max-w-7xl grid-cols-[40%_60%] flex-col items-center justify-center border-x border-[#504F4F] bg-[rgba(30,30,30,.5)]">
        {/* item 1 */}
        <div className="relative left-20 z-50 flex h-full w-full items-center">
          <div className="mt-10 w-full max-w-3xl py-10">
            {/* heading */}
            <div className="flex w-full items-center justify-start text-nowrap">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                className="font-[ClashDisplay] text-5xl font-medium text-[#D9D9D9]"
              >
                <span className="text-[#FCAC04]">About</span> us
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="ml-10 h-[1px] w-full bg-[#504F4F]"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="mt-10 font-[ClashDisplay] text-lg leading-[44px] font-normal text-[#D9D9D9]"
            >
              At MNKC Architecture, we specialize in designing modern homes and
              buildings that blend creativity with functionality. Our team is
              dedicated to crafting spaces that are not only visually stunning
              but also practical for everyday living. We strive to create
              strong, stylish, and timeless structures that align with the
              unique needs and desires of our clients
            </motion.p>

            <div className="grid-about mt-15 grid w-full grid-cols-2 gap-4">
              <div className="col-span-1 row-span-2 h-full">
                <p className="text-white">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + Years of <br />
                  <span className="text-amber-400"> Experience</span>
                </p>
              </div>

              <div>
                <p className="text-white">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + <span className="text-amber-400">Projects</span>
                </p>
              </div>

              <div>
                <p className="text-white">
                  <CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + <span className="text-amber-400">Clients</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <img
            className="fade-left h-full w-7xl object-cover opacity-50"
            src="/images/about-us-img1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
