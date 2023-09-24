import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer/Footer";
import NavBar from "../Component/Shared/NavBar/";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
