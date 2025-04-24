import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsContent } from "@/data/faqs-data";

const Faqs = () => {
  const ref = useSectionTracker({
    title: "FAQS",
    number: "01",
  });

  return (
    <section
      ref={ref}
      className="bg-striped flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="bg-logo-black border-logo-gray/20 flex h-full w-full max-w-7xl flex-col items-center justify-center border-x p-5 py-20 md:p-20 md:pb-50">
        <header>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-logo-white mt-1 text-start font-[ClashDisplay] text-[clamp(2rem,3vw,5rem)] font-medium text-pretty"
          >
            Frequently <span className="text-logo-yellow">Asked Questions</span>
          </motion.h1>
          <p className="text-logo-white relative mt-2 text-start font-[SansationLight] text-[clamp(1rem,3vw,1.125rem)] font-normal">
            We know starting a project comes with a lot of questions. Here’s a
            quick guide to help you feel more confident and informed before we
            begin.
            <motion.span
              initial={{ height: "0%", opacity: 0, width: "0%" }}
              whileInView={{
                height: "100%",
                opacity: 0.7,
                width: ["100%", "0%"],
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-logo-yellow absolute top-0 right-0 z-0 h-full"
            />
          </p>
        </header>

        {/* Container card   */}
        <div className="mt-30 h-full w-full">
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqsContent.map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                value={String(index)}
                className="h-fit p-2"
              >
                <AccordionTrigger className="text-logo-white font-[ClashDisplay] text-[clamp(.9rem,3vw,1.125rem)] font-medium">
                  <p className="bg-striped border-logo-gray flex h-5 w-5 items-center justify-center border p-4 md:h-10 md:w-10">
                    {index + 1}
                  </p>{" "}
                  <p>{question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-logo-white mt-4 ml-4 font-[SansationLight] text-[clamp(.8rem,3vw,1rem)] font-normal">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
