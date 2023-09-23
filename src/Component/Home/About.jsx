import bg from "../../assets/Home/Banner/bg3.jpg";
import AboutImg from "../../assets/Home/About/group.jpg";
const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80 "></div>
        <div className="text-secondary ">
          <div className="flex justify-center items-center">
            <img
              className="md:w-[600px] absolute z-9  top-[-100px] mb-12"
              src={AboutImg}
              alt="About-Img"
            />
          </div>

          <div className="md:absolute left-0">
            <div className="text-center my-6">
              <p className="text-sm">Our Little Story</p>
              <h1 className="md:text-4xl font-bold">Something About Us</h1>
            </div>
            <div className="md:flex justify-center items-start gap-6 px-6 text-xl  ">
              <p className="w-1/2 mb-6">
                Discover the foundation of Vantage Capital fx, built on a
                deep-rooted commitment to integrity, transparency, and
                delivering superior results. Our team comprises industry
                veterans with years of experience in the forex trading markets.
              </p>
              <p className="w-1/2">
                We stay ahead of the curve by continuously honing our skills and
                staying abreast of market trends. At Vantage Capital fx, we
                stand out through our unwavering dedication to exceptional
                service, proactive risk management, and our passion for helping
                clients achieve their financial aspirations. We have partnered
                with the best brokerage firms in the world, which is considered
                one of the best brokerage firms in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
