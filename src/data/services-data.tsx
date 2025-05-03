import { GrPlan } from "react-icons/gr";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { SiRender } from "react-icons/si";
import { LuConstruction } from "react-icons/lu";

export const content = [
  {
    title: "Space Planning",
    description:
      "We help you make the most out of your space, whether it's big or small. We’ll figure out the best layout so everything flows and feels just right.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img1.png"
            className="h-full w-full rounded-lg object-cover opacity-70"
          />
        </div>
      </div>
    ),

    icon: <GrPlan />,
  },
  {
    title: "Exterior Design",
    description:
      "We design the outside look of your home or building to make a great first impression. From the shape to the style, we make sure it reflects you.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img2.png"
            className="h-full w-full rounded-lg object-cover opacity-70"
          />
        </div>
      </div>
    ),

    icon: <BsLayoutSidebarReverse />,
  },
  {
    title: "Interior Design",
    description:
      "We bring life to your indoor spaces with colors, furniture, lighting, and layout that match your taste and lifestyle. We want it to feel like you.",
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

    icon: <BsLayoutSidebarInset />,
  },
  {
    title: "Rendering Services",
    description:
      "We create realistic 3D visuals so you can see what your space will look like before it's built. It helps you make smart choices early on.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img4.png"
            className="h-full w-full rounded-lg object-cover opacity-60"
          />
        </div>
      </div>
    ),

    icon: <SiRender />,
  },
  {
    title: "Construction Services",
    description:
      "We turn ideas into reality by handling the building process from start to finish. You can count on us to get it done right and on time.",
    content: (
      <div className="h-full w-full items-center justify-center bg-black/20 p-5 text-white">
        <div className="h-full w-full rounded-lg opacity-55">
          <img
            src="/images/services/img5.png"
            className="h-full w-full rounded-lg object-cover opacity-70"
          />
        </div>
      </div>
    ),

    icon: <LuConstruction />,
  },
];
