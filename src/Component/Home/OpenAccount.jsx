import img from "../../assets/Home/OpenAccout/login.gif";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const OpenAccount = () => {
  return (
  
      <div className="  text-black my-12 px-6">
        <div className=" md:flex justify-center  items-center">
          <img src={img} className=" rounded-lg shadow-2xl px-6" />
          <div className="md:w-1/2 mt-12 md:pl-8 px-6 ">
            <h1 className="text-4xl font-bold pb-6 ">Open an Account</h1>
            <p className="pb-8">
              Explore our range of services, open an account, or reach out to
              our knowledgeable team for personalized guidance tailored to your
              financial goals
            </p>
            <PrimaryButton title={"Open An Account"}></PrimaryButton>
          </div>
        </div>
      
    </div>
  );
};

export default OpenAccount;
