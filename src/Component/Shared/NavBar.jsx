import logo from "../../assets/Logo/ideogram2__74_-removebg-preview.png";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const navItem = (
    <>
      <li className="mr-2">
        <a href="#affiliate">Affiliate</a>
      </li>
      <li className="mr-2">
        <a href="#service">Services</a>
      </li>
      <li className="mr-2">
        <a href="#resource">Resources</a>
      </li>
      <li className="mr-2">
        <a href="#review">Testimonials</a>
      </li>
      <li className="mr-2">
        <a href="#faq ">FAQ</a>
      </li>
      <li className="mr-2">
        <a href="#footer">Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl navbar fixed z-10 opacity-90 bg-black  font-bold p-4">
      <div className="navbar-start">
        <a href="# " className=" flex justify-center items-center">
          <img src={logo} alt="logo" className="md:w-12 w-8" />
          <p className="text-white pl-2 md:text-xl text-sm">
            Vantage Capital FX
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MdMenu color="#1ba9ca" size="25px" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white bg-black gap-y-4"
          >
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
