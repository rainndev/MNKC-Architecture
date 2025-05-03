import ServicesNew from "@/sections/homepage/ServicesNew";
import AboutUs from "@/sections/homepage/AboutUs";
import Featured from "@/sections/homepage/Featured";
import Hero from "@/sections/homepage/Hero";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Hero />
      <AboutUs />
      <ServicesNew />
      <Featured />
    </main>
  );
};

export default Homepage;
