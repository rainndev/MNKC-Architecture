import Navigation from "../component/Navigation";
import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Navigation />
      <Hero />
      <AboutUs />
    </main>
  );
};

export default Homepage;
