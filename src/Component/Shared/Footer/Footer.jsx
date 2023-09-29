import "./Footer.css";

import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import BrandLogo from "../../../assets/Logo/ideogram2__74_-removebg-preview.png";
const Footer = () => {
  return (
    <div className="footer-bg " id="footer">
      <div className="bg-black opacity-70">
        <footer className="footer p-10   ">
          <div>
            <div className="flex justify-center items-center">
              <img className="w-12 mr-2" src={BrandLogo} alt="brand-logo" />
              <div className="text-white">
                <p className="text-2xl font-bold"> Vantage Capital FX</p>
                <p className="font-semibold mt-1">
                  Unlock Your Financial Success
                </p>
              </div>
            </div>
          </div>
          <nav>
            <header className=" text-secondary font-semibold text-xl">
              Social
            </header>
            <div className="grid grid-flow-col gap-4 ">
              {/* <a
                className="hover:text-primary"
                href="https://chat.whatsapp.com/BZRVsWEIrSO2O4kCVSHO9B "
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp size="28px" />
              </a> */}
              <a
                className="hover:text-primary"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/+WamrIarbGCdhNDhk"
              >
                <BsTelegram size="28px" />
              </a>
              <a
                className="hover:text-primary"
                href="https://www.facebook.com/vantagecapitalfx"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook size="28px" />
              </a>
            </div>
          </nav>
        </footer>
        <div className="text-center text-sm pb-2 text-secondary font-bold">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
