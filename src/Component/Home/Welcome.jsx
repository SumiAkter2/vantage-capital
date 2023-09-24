import welcomeImg from "../../assets/Home/Banner/mark.gif";
const Welcome = () => {
  return (
    <div>
      <div className="hero min-h-screen text-black mb-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={welcomeImg} className="md:max-w-lg rounded-lg " />
          <div className="w-1/2 ">
            <p className="text-primary my-2 font-semibold ">
              You are most welcome
            </p>
            <h1 className="text-4xl font-bold mb-6">
              Welcome to Vantage Capital fx
            </h1>
            <p className="py-6 text-xl">
              Your trusted partner for expert MAM account management services
              specializing in forex trading. Our team of seasoned professionals
              is dedicated to maximizing your investment potential while
              providing exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
