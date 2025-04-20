import { useSectionTracker } from "@/hooks/use-section-tracker";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide full architectural services including design, planning, 3D visualization, interior architecture, and project management.",
  },
  {
    question: "What types of projects do you work on?",
    answer:
      "We specialize in residential, commercial, and mixed-use developments — from small renovations to large-scale builds.",
  },
  {
    question: "How does the design process work?",
    answer:
      "Our process includes consultation, concept design, design development, approvals, and construction documentation. We guide you at every step.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Every project is unique, so fees are tailored based on scope, size, and complexity. We’ll provide a detailed quote after our initial consultation.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free initial consultation to understand your needs and see how we can help.",
  },
  {
    question: "Can you work with my contractor or builder?",
    answer:
      "Absolutely. We’re happy to collaborate with your preferred professionals, or we can recommend trusted partners we work with.",
  },
  {
    question: "Do you handle building permits?",
    answer:
      "Yes, we assist with all necessary permits and documentation to ensure compliance with local building codes.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "Just click “Start Your Project” or reach out through our contact form. We’ll schedule a meeting to learn more about your vision.",
  },
];

const Faqs = () => {
  const ref = useSectionTracker({
    title: "FAQS",
    number: "01",
  });

  return (
    <div
      ref={ref}
      className="bg-striped flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="bg-logo-black border-logo-gray/20 flex h-full w-full max-w-7xl flex-col items-center justify-center border-x p-5 py-20 md:p-20">
        <div>
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
        </div>

        {/* Container card   */}
        <div className="mt-30 h-full w-full">
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqs.map(({ question, answer }, index) => (
              <AccordionItem value={String(index)} className="h-fit p-2">
                <AccordionTrigger className="text-logo-white font-[ClashDisplay] text-[clamp(.8rem,3vw,1.125rem)] font-medium">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-logo-white mt-4 ml-4 font-[SansationLight] text-[clamp(.5rem,3vw,1rem)] font-normal">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
