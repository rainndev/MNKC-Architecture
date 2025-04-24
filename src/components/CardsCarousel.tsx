"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { featuredContent } from "@/data/featured-projects-data";

export function CardsCarousel() {
  const cards = featuredContent.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return <Carousel items={cards} />;
}
