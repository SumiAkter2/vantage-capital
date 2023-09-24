import { resourceInfo } from "../../Info/ResourceInfo";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Resource = () => {
  return (
    <div id="resource">
      <div className="bg-black   p-12 ">
        <div className="text-center my-6">
          <p>Be a part with us</p>
          <h1 className="md:text-5xl text-4xl text-primary font-bold ">
            Unleash the Potential of Forex Trading
          </h1>
        </div>

        <p className="py-4 text-white">
          With Vantage Capital fx, you can confidently entrust your investments
          to our skilled traders and cutting-edge strategies. We work diligently
          to ensure that your hard-earned money is actively working for you,
          delivering the best possible returns.Stay informed and empowered to
          make well-informed investment decisions.We also offer an opportunity
          for you to become our agent by referring people to us. Make money as
          they make money every day, up to 7% of their profit made plus a 20%
          portion of the rebate fees.
        </p>
        <h1 className="text-5xl font-bold text-primary text-center mb-8">
          Investor Resources
        </h1>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper hidden"
          >
            {resourceInfo.map((info) => (
              <SwiperSlide key={info.id}>
                <div className="card w-96 h-[280px] bg-white shadow-xl text-black p-6 mb-12 border-primary border-4">
                  <figure>
                    <img className="w-16 " src={info.img} alt="icon" />
                  </figure>
                  <div className=" pt-6">
                    <h2 className="card-title font-bold">{info.name}</h2>
                    <p className="text-sm">{info.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid md:hidden px-6">
          {resourceInfo.map((info) => (
            <div key={info.id}>
              <div className="card md:w-96 md:h-[280px] bg-white shadow-xl text-black p-6 my-4">
                <figure>
                  <img className="w-16 " src={info.img} alt="icon" />
                </figure>
                <div className=" pt-6">
                  <h2 className="card-title font-bold">{info.name}</h2>
                  <p className="text-sm">{info.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
