import About from "./About";
import Affiliate from "./Affiliate/Affiliate";
import Banner from "./Banner/Banner";
import OpenAccount from "./OpenAccount";
import Services from "./Services";
import Testimonial from "./Testimonial";

import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />

      <About />
      <Services />
      <Affiliate />
      <Testimonial />
      <OpenAccount />
    </div>
  );
};

export default Home;
