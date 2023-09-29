import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Autoplay, Pagination } from "swiper/modules";

const SliderBanner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
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
                      Unlock Financial Success Today!
                    </h1>
                    <p className="py-4 text-2xl">
                      Follow the Best, Earn the Best
                    </p>
                    <div className="text-sm mb-12 ">
                      <p className="flex justify-start items-center py-2 gap-x-2">
                        <BiSolidRightArrow size="18px" /> No Guesswork: Follow
                        Top Strategies in Real-Time!
                      </p>
                      <p className="flex justify-start items-center py-2 gap-x-2">
                        <BiSolidRightArrow size="18px" /> Flexible Withdrawals:
                        100% Control at Your Fingertips
                      </p>
                    </div>

                    <PrimaryButton title={"Open An Account"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero min-h-screen banner-bg-1 relative">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-20 md:text-start text-center">
                  <div className="max-w-md text-secondary">
                    <h1 className="md:text-5xl text-4xl font-bold my-4 ">
                      Partner with Success
                    </h1>
                    <p className="py-4 text-2xl">
                      Earn Big as an Affiliate Agent
                    </p>
                    <div className="text-sm mb-12 ">
                      <p className="flex justify-start items-center py-2 gap-x-2">
                        <BiSolidRightArrow size="18px" /> Join Us as an
                        Affiliate Partner and Start Earning!
                      </p>
                      <p className="flex justify-start items-center py-2 gap-x-2">
                        <BiSolidRightArrow size="18px" /> Get Paid for Every
                        Client&apos;s Daily Trading Activities
                      </p>
                      <p className="flex justify-start items-center py-2 gap-x-2">
                        <BiSolidRightArrow size="18px" /> Build a Passive Income
                        Stream with Vantage Capital FX
                      </p>
                    </div>

                    <PrimaryButton title={"Open An Account"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="fixed md:right-10 right-2 lg:bottom-20 bottom-5 z-20">
        <a
          className="hover:text-primary p-2"
          href="https://chat.whatsapp.com/BZRVsWEIrSO2O4kCVSHO9B "
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp color="#1CAACA" size="55px" />
        </a>
      </div>
    </div>
  );
};

export default SliderBanner;
