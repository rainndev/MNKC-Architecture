import AboutUs from "../sections/AboutUs";
import Featured from "../sections/Featured";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";

const Homepage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Hero />
      <AboutUs />
      <Services />
      <Featured />
      <Footer />
    </main>
  );
};

export default Homepage;
