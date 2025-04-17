import { useSectionTracker } from "@/hooks/use-section-tracker";

const Careerspage = () => {
  const ref = useSectionTracker({
    title: "Careers",
    number: "00",
  });

  return (
    <div
      ref={ref}
      className="flex h-screen w-full items-center justify-center bg-[#1E1E1E] text-amber-300"
    >
      Careerspage
    </div>
  );
};

export default Careerspage;
