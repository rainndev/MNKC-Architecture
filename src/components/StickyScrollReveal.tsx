import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "3D Architectural Visualization",
    description:
      "Bring your ideas to life with high-quality 3D renders and animations. Our visualization services help clients understand the design before construction begins, ensuring alignment with your vision.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img1.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Concept Design & Planning",
    description:
      "We turn your ideas into buildable concepts. From sketches to zoning analysis, our team develops creative and functional designs tailored to your needs and budget.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img2.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Schematic Design & Development",
    description:
      "We refine initial concepts into detailed plans, integrating aesthetics, functionality, and sustainability. Our process ensures smooth transition to construction documentation.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-40">
          <img
            src="/images/services/img3.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Construction Documentation",
    description:
      "We prepare complete sets of drawings and specifications required for construction, permitting, and bidding. Accuracy and detail ensure smooth execution on-site.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img1.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Project Management",
    description:
      "From planning to handover, we manage timelines, budgets, and coordination between contractors and consultants to deliver your project successfully.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img1.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Sustainable Design",
    description:
      "We integrate green building principles and energy-efficient strategies into your project to reduce environmental impact and operating costs.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img1.png"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
];
export default function StickyScrollReveal() {
  return (
    <div className="flex h-full w-full justify-center overflow-hidden p-0 md:p-15">
      <StickyScroll content={content} />
    </div>
  );
}
