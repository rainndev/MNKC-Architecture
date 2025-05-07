import { GrPlan } from "react-icons/gr";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineImageAspectRatio } from "react-icons/md";

export const content = [
  {
    title: "Space Planning",
    description:
      "We help you make the most out of your space, whether it's big or small. ",
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
      "We design the outside look of your home or building to make a great first impression.",

    icon: <BsLayoutSidebarReverse />,
  },
  {
    title: "Interior Design",
    description:
      "We bring life to your indoor spaces with colors, furniture, lighting, and layout that match your taste and lifestyle.",

    icon: <BsLayoutSidebarInset />,
  },
  {
    title: "Rendering Services",
    description:
      "We create realistic 3D visuals so you can see what your space will look like before it's built. ",

    icon: <MdOutlineImageAspectRatio />,
  },
  {
    title: "Construction Services",
    description:
      "We turn ideas into reality by handling the building process from start to finish. ",

    icon: <LuConstruction />,
  },

  {
    title: "Design Consultation",
    description:
      "We guide you through every step of your project with expert advice.",

    icon: <FaRegLightbulb />,
  },
];
