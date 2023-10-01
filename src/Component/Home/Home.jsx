import About from "./About";
import Affiliate from "./Affiliate/Affiliate";
import SliderBanner from "./Banner/SliderBanner";
import Contact from "./Contact";
import Faq from "./Faq/Faq";
import OpenAccount from "./OpenAccount";
import Resource from "./Resource";
import Services from "./Services";
import Testimonial from "./Testimonial";

import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <Welcome />
      <About />
      <Services />
      <Affiliate />
      <OpenAccount />
      <Resource />
      <Testimonial />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
