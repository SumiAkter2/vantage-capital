import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero h-[400px] banner-bg">
        <div className="hero-overlay bg-black opacity-70"></div>
        <div className="hero-content  text-neutral-content">
          <div className="hero min-h-screen ">
            <div className=" text-center">
              <div className="max-w-md text-secondary">
                <h1 className="md:text-5xl text-4xl font-bold my-4 ">
                  Unlock Your Financial Success
                </h1>
                <p className="py-6 mb-6">
                  Choose Vantage Capital FX for Professional Forex Account
                  Management
                </p>
                <div className="flex justify-center">
                  <PrimaryButton title={"Open An Account"}></PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed right-10 bottom-20 z-20">
          <a
            className="hover:text-primary p-2"
            href="https://chat.whatsapp.com/BZRVsWEIrSO2O4kCVSHO9B "
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp color="#1CAACA" size="55px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
