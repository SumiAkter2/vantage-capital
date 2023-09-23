import { Outlet } from "react-router";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
