import { Link } from "react-router-dom";
import logo from "../../assets/Logo/ideogram2__74_-removebg-preview.png";

const Navbar = () => {
  const navItem = (
    <>
      <li className="mr-2">
        <Link to="/">Affiliate</Link>
      </li>
      <li className="mr-2">
        <Link to="/">Services</Link>
      </li>
      <li className="mr-2">
        <Link to="/">Resources</Link>
      </li>
      <li className="mr-2">
        <Link to="/">Testimonials</Link>
      </li>
      <li className="mr-2">
        <Link to="/">FAQ</Link>
      </li>
      <li className="mr-2">
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl navbar fixed z-10 opacity-70 bg-black text-white font-bold md:h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className=" text-xl ">
            <div className="flex justify-center items-center">
              <img className="w-16 p-2" src={logo} alt="brand-logo" /> Vantage
              Capital Fx
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
