import { Link } from "react-router-dom";
import logo from "../../assets/Logo/ideogram2__74_-removebg-preview.png";
import { CgMenuGridO } from "react-icons/cg";
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
      <div className="max-w-screen-xl navbar fixed z-10 opacity-90 bg-black text-white p-4">
        <div className="navbar-start ">
          <Link to="/">
            <img className="w-12" src={logo} alt="logo" />
          </Link>
          <Link
            to="/"
            className="font-bold lg:text-2xl text-xl 
          "
          >
            Vantage Capital Fx
          </Link>
        </div>
        <div className="navbar-center hidden lg:block">
          <ul className="menu menu-horizontal gap-x-1 font-bold">{navItem}</ul>
        </div>
        <div className="navbar-start lg:hidden block ">
          <div className="dropdown dropdown-left absolute right-3 top-4 ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <CgMenuGridO color="#1ba9ca" size="35px" />
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-compact dropdown-content  mt-3 p-6 shadow text-secondary rounded-box w-48 gap-y-4 backdrop-blur-sm bg-black font-bold"
            >
              {navItem}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
