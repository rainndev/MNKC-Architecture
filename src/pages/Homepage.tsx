import Navigation from "../components/Navigation";
import AboutUs from "../sections/AboutUs";
import Featured from "../sections/Featured";
import Hero from "../sections/Hero";
import Services from "../sections/Services";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Featured />
    </main>
  );
};

export default Homepage;
