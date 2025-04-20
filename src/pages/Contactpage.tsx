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
      <div className="bg-logo-black border-logo-gray/20 h-full min-h-screen w-full max-w-7xl border-x p-7 py-20 md:p-20">
        <ContactContainer />
      </div>
    </div>
  );
};

export default Contactpage;
