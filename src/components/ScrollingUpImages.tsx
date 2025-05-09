import { motion } from "framer-motion";

const IMAGE_COUNT = 10;
const IMAGE_HEIGHT = 240; // equivalent to h-60
const SCROLL_DURATION = 60;

const ImageColumn = ({
  startIndex,
  count,
}: {
  startIndex: number;
  count: number;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: `-${IMAGE_HEIGHT * count}px` }}
    transition={{ duration: SCROLL_DURATION, ease: "linear", repeat: Infinity }}
    className="w-full space-y-5"
  >
    {[...Array(count)].map((_, i) => {
      const index = startIndex + i;
      return (
        <div
          key={index}
          className="border-logo-white/10 bg-logo-white/10 h-60 w-full max-w-md overflow-hidden border border-dashed p-2"
        >
          <img
            loading="lazy"
            src={`/images/about-us/about-img${index + 1}.webp`}
            alt={`About image ${index + 1}`}
            className="h-full w-full rounded-xl object-cover opacity-50"
          />
        </div>
      );
    })}
  </motion.div>
);

const ScrollingUpImages = () => {
  return (
    <div className="fade-left flex max-h-screen w-full space-x-5 overflow-hidden">
      <ImageColumn startIndex={0} count={IMAGE_COUNT} />
      <ImageColumn startIndex={IMAGE_COUNT} count={IMAGE_COUNT - 2} />
    </div>
  );
};

export default ScrollingUpImages;
