import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLeftSideOverlayStore } from "../store/LeftSideOverlayStore";

type SectionData = {
  number: string;
  title: string;
};

export const useSectionTracker = (data: SectionData, amount: number = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });
  const [hasEntered, setHasEntered] = useState(false);
  const setLeftSideOverlayData = useLeftSideOverlayStore(
    (state) => state.setData,
  );

  useEffect(() => {
    if (isInView && !hasEntered) {
      setLeftSideOverlayData(data);
      setHasEntered(true);
    } else if (!isInView && hasEntered) {
      setHasEntered(false);
    }
  }, [isInView, hasEntered, setLeftSideOverlayData, data]);

  return ref;
};
