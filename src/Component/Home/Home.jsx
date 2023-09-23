import About from "./About";

import Banner from "./Banner/Banner";
import Services from "./Services";

import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />

      <About />
      <Services />
    </div>
  );
};

export default Home;
