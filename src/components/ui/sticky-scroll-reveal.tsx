import React, { useEffect, useRef } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { motion, useInView } from "motion/react";
import { cn } from "../../lib/utils";
import { useServicesStore } from "../../store/ServicesStore";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const setIsContentVisible = useServicesStore(
    (state) => state.setIsContentVisible,
  );

  const isContentVisible = useServicesStore((state) => state.isContentVisbile);

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsContentVisible(false);
      }, 1000);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0a0a0a", // black
    "#171717", // neutral-900
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
          opacity: isContentVisible ? 1 : 0,
          height: isContentVisible ? "100%" : 0,
          width: isContentVisible ? "100%" : 0,
        }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        className="flex h-full w-full justify-center space-x-10 rounded-4xl p-10 md:p-20"
      >
        <div
          data-lenis-prevent
          ref={ref}
          className="hide-scrollbar relative flex w-full max-w-7xl flex-col overflow-y-scroll md:flex-row"
        >
          {/* text content */}
          <div className="relative flex w-full lg:w-[50%]">
            <div className="w-full">
              {content.map((item, index) => (
                <div key={item.title + index} className="my-52">
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="font-[ClashDisplay] text-[clamp(1.2rem,3vw,1.875rem)] font-semibold text-slate-100"
                    >
                      {item.title}
                      <motion.div
                        initial={{
                          opacity: 0,
                          width: 0,
                        }}
                        animate={{
                          opacity: activeCard === index ? 1 : 0.3,
                          width: activeCard === index ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-5 h-[1px] w-full bg-[#504F4F]"
                      />
                    </motion.h2>
                  </div>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="mt-10 w-full text-lg text-[clamp(.9rem,3vw,1.125rem)] leading-loose font-thin text-slate-300 lg:max-w-sm"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
              <div className="h-5 md:h-40" />
            </div>
          </div>

          {/* image content */}

          <div className="sticky top-0 hidden h-full w-[50%] flex-col justify-center opacity-50 lg:flex">
            <motion.div
              key={activeCard}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className={cn(
                "top-10 hidden h-full overflow-hidden rounded-4xl lg:block",
                contentClassName,
              )}
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
