import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { content } from "@/data/services-data";

export default function StickyScrollReveal() {
  return (
    <div className="flex h-full w-full justify-center overflow-hidden p-0 md:p-15">
      <StickyScroll content={content} />
    </div>
  );
}
