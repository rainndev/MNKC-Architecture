"use client";

import { IoCloseOutline } from "react-icons/io5";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-10 [scrollbar-width:none] md:py-10"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="relative z-40 flex cursor-pointer rounded-lg border border-[#504F4F] px-6 py-3 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-medium text-white transition duration-300 ease-in-out hover:bg-[#D9D9D9]/20 active:bg-[#FCAC04] active:text-[#1E1E1E]"
            onClick={scrollLeft}
          >
            Previous
          </button>
          <button
            className="relative z-40 flex cursor-pointer rounded-lg border border-[#504F4F] px-6 py-3 font-[ClashDisplay] text-[clamp(.8rem,2vw,1rem)] font-medium text-white transition duration-300 ease-in-out hover:bg-[#D9D9D9]/20 active:bg-[#FCAC04] active:text-[#1E1E1E]"
            onClick={scrollRight}
          >
            Next
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="hide-scrollbar fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto h-fit w-full bg-[#1E1E1E]/40 font-sans md:max-w-5xl"
            >
              {/* Popup header container*/}
              <div className="px-5 py-10 md:px-10 md:py-20">
                {/* category   */}
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-[clamp(.8rem,2vw,1.125rem)] font-normal text-[#D9D9D9]"
                >
                  {card.category}
                </motion.p>

                {/* Popup close button */}
                <button
                  className="absolute top-5 right-0 ml-auto flex h-10 w-20 cursor-pointer items-center justify-center"
                  onClick={handleClose}
                >
                  <IoCloseOutline className="h-6 w-6 text-neutral-100" />
                </button>

                {/* Popup title */}
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="mt-5 text-[clamp(1.3rem,3vw,3rem)] font-semibold text-white"
                >
                  {card.title}
                </motion.p>
              </div>

              {/* Popup content */}
              <div className="border-t-1 border-dashed border-[#D9D9D9]/20 py-10">
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card image container */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden border border-dashed border-[#D9D9D9]/10 bg-[#D9D9D9]/10 p-5 md:h-[40rem] md:w-96"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-[#1E1E1E]/75 to-[#1E1E1E]/75 transition-colors duration-300 ease-in-out group-hover:to-transparent" />

        {/* Card title */}
        <div className="z-40 p-5 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-[ClashDisplay] text-[clamp(1rem,3vw,1.2rem)] font-normal text-white md:mt-3 md:text-base"
          >
            {card.title}
          </motion.p>
        </div>

        {/* Card image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="absolute inset-0 z-10 object-cover p-2 duration-300 ease-in-out group-hover:scale-105"
        />
      </motion.button>
    </>
  );
};

import { ImgHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "cursor-pointer transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
