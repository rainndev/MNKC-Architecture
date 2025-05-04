import ServicesNew from "@/sections/homepage/ServicesNew";
import AboutUs from "@/sections/homepage/AboutUs";
import Hero from "@/sections/homepage/Hero";
import FeaturedNew from "@/sections/homepage/FeaturedNew";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Hero />
      <AboutUs />
      <ServicesNew />
      <FeaturedNew />
    </main>
  );
};

export default Homepage;
