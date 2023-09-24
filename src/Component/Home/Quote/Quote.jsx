import img from "../../../assets/Home/quote/quote (2).png";
const Quote = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={img} className="max-w-sm rounded-lg mb-12 px-6" />
          <div>
            <div className="md:w-1/2 mx-auto  text-black px-6 ">
              <h1 className="md:text-5xl text-4xl font-bold  text-start my-6">
                Request For Quote
              </h1>
              <p className="my-8 font-bold">
                We think it is very important to have a feedback loop, where you
                are constantly thinking about what you have done and how you
                could be doing it better.
              </p>

              <form action="" className="px-8">
                <div className="grid md:grid-cols-2  gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input  input-primary w-full max-w-sm"
                  />
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input  input-primary w-full max-w-sm"
                  />
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input  input-primary w-full max-w-sm"
                  />
                  <input
                    type="Submit"
                    value="Submit"
                    className="btn  btn-primary w-full max-w-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
