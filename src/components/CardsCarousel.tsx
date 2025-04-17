"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const DummyContent = () => {
  return (
    <div data-lenis-prevent>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content" + index} className="mb-4 p-8 md:p-14">
            <p className="mx-auto text-start font-sans text-base font-normal text-neutral-600 md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a
              consequatur facere quae consequuntur, laborum perspiciatis ab
              excepturi illum repellat similique eum suscipit reprehenderit
              dolore ducimus aperiam dolor sapiente odio!
            </p>
            <img
              src="https://static.wixstatic.com/media/2480ac_6c9774ba349648d4a7826b8b82075d00~mv2.jpg"
              alt="Macbook mockup from Aceternity UI"
              className="mx-auto mt-10 h-full w-full rounded-2xl object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    category: "Design Innovation",
    title: "Solara Industries Headquarters",
    src: "https://static.wixstatic.com/media/2480ac_6c9774ba349648d4a7826b8b82075d00~mv2.jpg", // change to your image
    content: <DummyContent />,
  },
  {
    category: "Visualization",
    title: "Horizon Living Complex",
    src: "https://static.wixstatic.com/media/2480ac_de8f619a329e44d1bddc4814db343c95~mv2.jpg", // change to your image
    content: <DummyContent />,
  },
  {
    category: "Sustainable Architecture",
    title: "Greenline Tech Campus",
    src: "https://static.wixstatic.com/media/2480ac_8b9a3c56482d46a3acc6fcea32e15b61~mv2_d_1764_1890_s_2.jpg", // change to your image
    content: <DummyContent />,
  },
  {
    category: "Urban Planning",
    title: "Lakeside Community Redevelopment",
    src: "https://static.wixstatic.com/media/2480ac_afde5d08f8674c7d90e90f0c401b2124~mv2.jpg/v1/fit/w_2320,h_893,q_90,enc_avif,quality_auto/2480ac_afde5d08f8674c7d90e90f0c401b2124~mv2.jpg", // change to your image
    content: <DummyContent />,
  },
  {
    category: "Interior Architecture",
    title: "Aura Spa & Wellness",
    src: "https://static.wixstatic.com/media/2480ac_3803e2f4ae154bb58c248e3c7a0de6c6~mv2_d_3624_2160_s_2.jpg", // change to your image
    content: <DummyContent />,
  },
  {
    category: "Commercial Design",
    title: "Nexa Pavilion Retail Center",
    src: "https://static.wixstatic.com/media/2480ac_a1b89d8a7ba34112b8df088199f7dc6d~mv2.jpg/v1/fit/w_1280,h_632,q_90,enc_avif,quality_auto/2480ac_a1b89d8a7ba34112b8df088199f7dc6d~mv2.jpg", // change to your image
    content: <DummyContent />,
  },
];

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return <Carousel items={cards} />;
}
