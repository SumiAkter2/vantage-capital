import { BiBullseye } from "react-icons/bi";
import "./Fund.css";
const Fund = () => {
  return (
    <div>
      <div className="h-56 bg-[#202e3d]">
        <h1 className="md:text-5xl text-lg text-center pt-32 font-bold mb-6 text-primary">
          Liquidity Fund Investors
        </h1>
      </div>
      <div
        className="card p-12 w-[300px] md:w-[700px] shadow-2xl  mt-6 mx-auto"
        style={{
          backgroundImage: "linear-gradient(#202e3d, #3a5371, #202e3d)",
        }}
      >
        <div>
          <p className="bg-slate-600 p-6 rounded-md ">
            <span className="font-semibold ">
              Min : 5.000 $ / Max : 500.000 $ <br /> Lock in Period : 90 Days
              <br /> Profit Rate : %4 - %7 (Monthly)
            </span>
          </p>
          <p className=" text-sm py-4">
            If you&apos;re interested in our Liquidity Fund, please provide us
            with some initial information:
          </p>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your name:</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Investment amount:</span>
            </label>
            <input
              type="text"
              placeholder="Amount($) eg: 5000"
              className="input input-bordered"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Preferred contact email:</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Any additional questions or comments?
              </span>
            </label>
            <input
              type="text"
              placeholder="Text here"
              className="textarea  textarea-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen my-12 info-container relative">
        <div className="hero-overlay min-h-screen bg-black bg-opacity-80 md:w-4/5 md:absolute md:left-0"></div>
        <div className="hero-content text-white ">
          <div className="md:w-4/5 md:absolute md:left-8 md:px-12 ">
            <h1 className="my-5 md:text-3xl text-xl font-bold uppercase flex items-center">
              <BiBullseye size="25px" className="mr-2" /> What is The Liquidity
              Fund ?
            </h1>
            <p className="mb-2">
              A liquidity fund is a type of investment fund that focuses on
              safety and easy access to cash. It primarily invests in
              short-term, low-risk securities like Treasury bills, commercial
              paper, and certificates of deposit. The goal is to preserve the
              invested money while providing quick access to it. Liquidity funds
              offer stable share prices, are highly liquid, and are suitable for
              holding cash reserves or short-term savings, although they offer
              relatively low returns compared to riskier investments. They are
              subject to regulatory oversight to protect investors.
            </p>
            <p>
              Discover our liquidity Fund, a unique investment opportunity
              designed for low-risk, high-return seekers.
            </p>
            <h1 className="my-4 md:text-3xl text-xl font-bold uppercase flex items-center">
              <BiBullseye size="25px" className="mr-2" /> How It Works ?
            </h1>
            <p className="mb-5">
              Zero Risk Investment: Your capital remains secure, as it doesn’t
              directly engage in trading activities.
            </p>
            <h1 className="my-4 md:text-3xl text-xl font-bold uppercase flex items-center">
              <BiBullseye size="25px" className="mr-2" /> Benefits
            </h1>
            <p className="mb-5">
              “Secure Your Future: Invest in our Illiquidity Fund and enjoy
              expected returns of 7% to 10% per month.”
            </p>
            <h1 className="my-4 md:text-3xl text-xl font-bold uppercase flex items-center">
              <BiBullseye size="25px" className="mr-2" />
              Why Choose Us ?
            </h1>
            <p className="mb-5">
              Trust in Experience: With our years of expertise, we provide
              liquidity to traders for profitable volume trading.
            </p>
            <h1 className="my-4 md:text-3xl text-xl font-bold uppercase flex items-center">
              <BiBullseye size="25px" className="mr-2" />
              Call to Action (CTA)
            </h1>
            <p className="mb-5">
              Get Started Today: Invest in the liquidity Fund and watch your
              wealth grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fund;
