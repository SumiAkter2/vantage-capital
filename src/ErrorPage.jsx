import { Link, useRouteError } from "react-router-dom";
import Img from "./assets/Home/NotFound/404.gif";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <div className="flex justify-center items-center my-6">
        <img src={Img} alt="404-gif" />
      </div>
      <div className="flex justify-center items-center my-4">
        <Link to="/">
          <button className="btn  btn-primary w-56">Home </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
