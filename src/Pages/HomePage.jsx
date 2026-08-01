
import About from "../components/home/About";
import FocusAreas from "../components/home/FocusAreas";
import Hero from "../components/home/Hero";
import Impact from "../components/home/Impact";
//import Programs from "../components/home/Programs";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About/>
      <Impact/>
      <FocusAreas/>
      <Testimonials/>
     </>
  );
};

export default HomePage;