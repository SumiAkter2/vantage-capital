import { Outlet } from "react-router";

import Footer from "../Component/Shared/Footer/Footer";
import NavBar from "../Component/Shared/NavBar/";

const Main = () => {
  return (
    <div className="max-w-screen-xl">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
