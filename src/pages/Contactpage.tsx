import { useSectionTracker } from "@/hooks/use-section-tracker";

const Contactpage = () => {
  const ref = useSectionTracker({
    title: "Contact",
    number: "01",
  });

  return (
    <div
      ref={ref}
      className="flex h-screen w-full items-center justify-center text-2xl text-amber-300"
    >
      Contact
    </div>
  );
};

export default Contactpage;
