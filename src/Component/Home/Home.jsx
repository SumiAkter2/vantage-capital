import About from "./About";
import Affiliate from "./Affiliate/Affiliate";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import OpenAccount from "./OpenAccount";
import Quote from "./Quote/Quote";
import Resource from "./Resource";
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
      <OpenAccount />
      <Resource />
      <Testimonial />
      <Faq />
      <Quote />
    </div>
  );
};

export default Home;
