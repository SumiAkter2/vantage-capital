import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
// import { IoLogoWhatsapp } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Pagination } from "swiper/modules";

const SliderBanner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#1ba9ca",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-marginBottom": "6px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
        }}
      >
        <SwiperSlide>
          <div className="hero min-h-screen banner-bg-3 relative">
            <div className="hero-overlay bg-black opacity-30"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-10 md:text-start text-center">
                  <div className="max-w-md text-secondary">
                    <h1 className="md:text-5xl text-4xl font-bold my-4 ">
                      Unlock Your Financial Success
                    </h1>
                    <p className="py-6 mb-6">
                      Choose Vantage Capital FX for Professional Forex Account
                      Management
                    </p>

                    <PrimaryButton title={"Open An Account"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen banner-bg relative">
            <div className="hero-overlay bg-black opacity-30"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute right-20 md:text-start text-center">
                  <div className="max-w-md text-secondary">
                    <h1 className="md:text-5xl text-4xl font-bold my-4 ">
                      Unlock Your Financial Success
                    </h1>
                    <p className="py-6 mb-6">
                      Choose Vantage Capital FX for Professional Forex Account
                      Management
                    </p>

                    <PrimaryButton title={"Open An Account"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
