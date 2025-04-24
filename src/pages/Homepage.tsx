import AboutUs from "@/sections/homepage/AboutUs";
import Featured from "@/sections/homepage/Featured";
import Hero from "@/sections/homepage/Hero";
import Services from "@/sections/homepage/Services";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Hero />
      <AboutUs />
      <Services />
      <Featured />
    </main>
  );
};

export default Homepage;
