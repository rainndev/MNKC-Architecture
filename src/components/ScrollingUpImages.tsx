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
          className="h-60 w-full max-w-md overflow-hidden rounded-2xl bg-[#D9D9D9]/10"
        >
          <img
            src={`/images/about-us-images/about-img${index + 1}.jpg`}
            alt={`About image ${index + 1}`}
            className="h-full w-full object-cover opacity-70"
          />
        </div>
      );
    })}
  </motion.div>
);

const ScrollingUpImages = () => {
  return (
    <div className="fade-left flex max-h-screen w-full space-x-5 overflow-hidden p-5">
      <ImageColumn startIndex={0} count={IMAGE_COUNT} />
      <ImageColumn startIndex={IMAGE_COUNT} count={IMAGE_COUNT - 2} />
    </div>
  );
};

export default ScrollingUpImages;
