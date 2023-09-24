import "./Footer.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import BrandLogo from "../../../assets/Logo/ideogram2__74_-removebg-preview.png";
const Footer = () => {
  return (
    <div className="footer-bg ">
      <div className="bg-black opacity-60">
        <footer className="footer p-10  text-white ">
          <aside>
            <div className="flex justify-center items-center">
              <img className="w-12 mr-2" src={BrandLogo} alt="brand-logo" />
              <div>
                <p className="text-2xl font-bold"> Vantage Capital Fx</p>
                <p className="font-semibold mt-1">
                  Unlock Your Financial Success
                </p>
              </div>
            </div>
          </aside>
          <nav>
            <header className=" text-secondary font-semibold text-xl">
              Social
            </header>
            <div className="grid grid-flow-col gap-4 ">
              <a
                className="hover:text-primary"
                href="https://chat.whatsapp.com/BZRVsWEIrSO2O4kCVSHO9B "
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp size="28px" />
              </a>
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
                href="https://www.facebook.com/profile.php?id=100094119369342"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook size="28px" />
              </a>
            </div>
          </nav>
        </footer>
        <p className="text-center text-sm pb-2 text-secondary font-bold">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
