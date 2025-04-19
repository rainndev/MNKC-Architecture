import { useSectionTracker } from "@/hooks/use-section-tracker";
import ContactContainer from "@/sections/contacts/ContactContainer";

const Contactpage = () => {
  const ref = useSectionTracker({
    title: "Contact",
    number: "01",
  });

  return (
    <div
      ref={ref}
      className="bg-striped flex h-full w-full flex-col items-center justify-center"
    >
      <div className="h-full w-full max-w-7xl border-x border-[#504F4F]/20 bg-[#1E1E1E] p-7 py-20 md:p-20">
        <ContactContainer />
      </div>
    </div>
  );
};

export default Contactpage;
