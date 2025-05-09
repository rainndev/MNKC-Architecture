import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";
import ScrollingUpImages from "@/components/ScrollingUpImages";
import { useSectionTracker } from "@/hooks/use-section-tracker";

const AboutUs = () => {
  const ref = useSectionTracker({ title: "About us", number: "01" });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-logo-black border-logo-gray relative flex h-full w-full items-center justify-center border-b"
    >
      {/* Dotted Background FIRST, behind everything */}
      <div className="bg-logo-black border-logo-gray absolute top-0 flex h-full w-full items-center justify-center border-b bg-[radial-gradient(rgba(80,79,79,0.5)_1px,#1E1E1E_1px)] bg-[size:10px_10px]" />

      <div className="bg-logo-black pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative grid min-h-screen w-full max-w-7xl grid-cols-1 flex-col items-center justify-center bg-[rgba(30,30,30,.5)] lg:grid-cols-[60%_40%]">
        {/* item 1 */}
        <div className="z-19 flex h-full w-full items-center justify-center p-7">
          <div className="mt-10 w-full max-w-3xl py-10">
            {/* heading */}
            <header className="flex w-full items-center justify-start text-nowrap">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                className="text-logo-white font-[ClashDisplay] text-[clamp(1.5rem,3vw,3rem)] font-medium"
              >
                <span className="text-logo-yellow">About</span> us
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="bg-logo-gray ml-5 h-[1px] w-full md:ml-10"
              />
            </header>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="group text-logo-white relative mt-10 font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] leading-loose font-normal md:leading-[44px]"
            >
              At MNKC Architecture, we specialize in designing modern homes and
              buildings that blend creativity with functionality. Our team is
              dedicated to crafting spaces that are not only visually stunning
              but also practical for everyday living. We strive to create
              strong, stylish, and timeless structures that align with the
              unique needs and desires of our clients
              <motion.span
                initial={{ height: "0%", opacity: 0, width: "0%" }}
                whileInView={{
                  height: "100%",
                  opacity: 0.7,
                  width: ["100%", "0%"],
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
              />
            </motion.p>

            <div className="grid-about bg-striped border-logo-white/10 mt-15 grid w-full grid-cols-2 gap-2 border p-2">
              <div className="col-span-2 row-span-2 h-full md:col-span-1">
                <p className="text-[clamp(.8rem,3vw,1.125rem)] text-pretty text-white">
                  <CountUp
                    from={0}
                    to={8}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + Years of <br />
                  <span className="text-logo-yellow"> Experience</span>
                </p>
              </div>

              <div>
                <p className="text-[clamp(.8rem,3vw,1.125rem)] text-pretty text-white">
                  <CountUp
                    from={0}
                    to={150}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + <span className="text-logo-yellow">Projects</span>
                </p>
              </div>

              <div>
                <p className="text-[clamp(.8rem,3vw,1.125rem)] text-pretty text-white">
                  <CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  + <span className="text-logo-yellow">Clients</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="absolute right-0 z-5 hidden h-full w-full max-w-2xl justify-center overflow-hidden lg:flex">
          {/* <img
            className="fade-left h-full w-7xl object-cover opacity-50"
            src="/images/about-us-img1.jpg"
            alt=""
          /> */}

          <ScrollingUpImages />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
