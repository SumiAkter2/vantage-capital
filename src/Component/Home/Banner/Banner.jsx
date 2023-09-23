import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner-bg">
        <div className="hero-overlay bg-black opacity-70"></div>
        <div className="hero-content  text-neutral-content">
          <div className="hero min-h-screen ">
            <div className=" text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold my-4">
                  Unlock Your Financial Successe
                </h1>
                <p className="py-6 mb-6">
                  Choose Vantage CapitalFX for Professional Forex Account
                  Management
                </p>
                <div className="flex justify-center">
                  <PrimaryButton title={"Open An Account"}></PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
