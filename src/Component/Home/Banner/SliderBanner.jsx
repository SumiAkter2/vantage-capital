import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { IoLogoWhatsapp } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Autoplay, Pagination } from "swiper/modules";
import BannerInfo from "./BannerInfo";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const SliderBanner = () => {
  return (
    <div className="z-10 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
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
          <div className="hero min-h-screen banner-bg-3  ">
            <div className="hero-overlay bg-black md:opacity-30 opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-10 md:text-start text-center">
                  <div className="text-secondary">
                    <h1 className="md:text-5xl text-4xl font-bold my-4  leading-normal">
                      Unlock Financial Success Today!
                    </h1>
                    <p className="py-4 text-2xl font-semibold">
                      Follow the Best, Earn the Best
                    </p>
                    <div className="text-sm mb-12 ">
                      <p className=" md:py-2 ">
                        No Guesswork: Follow Top Strategies in Real-Time!
                      </p>
                      <p className="md:py-2 ">
                        Flexible Withdrawals: 100% Control at Your Fingertips
                      </p>
                    </div>

                    <PrimaryButton title={"Open An Account"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className="hero min-h-screen banner-bg-1 relative">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className="md:text-5xl text-4xl font-bold my-4 ">
                    Partner with Success
                  </h1>
                  <p className="py-4 text-2xl font-semibold">
                    Earn Big as an Affiliate Agent
                  </p>
                  <div className="text-sm mb-12 ">
                    <p className=" md:py-2 ">
                      Join Us as an Affiliate Partner and Start Earning!
                    </p>
                    <p className="md:py-2 ">
                      Get Paid for Every Client&apos;s Daily Trading Activities
                    </p>
                    <p className=" md:py-2 ">
                      Build a Passive Income Stream with Vantage Capital FX
                    </p>
                  </div>

                  <PrimaryButton title={"Open An Account"}></PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-24 mx-12 mt-12">
        <BannerInfo
          cardTitle="Profit Split "
          cardInfo="You Take 60%,We Take 40%"
          bgClass="bg-black border-white border-4  hover:border-primary"
        ></BannerInfo>
        <BannerInfo
          cardTitle="Maximize Your Gains with Vantage Capital FX"
          cardInfo="Our expert team maximizes your investment potential with exceptional service."
          bgClass="bg-primary border-white border-4  hover:border-black"
        ></BannerInfo>
        <BannerInfo
          cardTitle="Trustability"
          cardInfo="We are 100% loyal to our clients "
          bgClass="bg-black border-white border-4 hover:border-primary"
        ></BannerInfo>
      </div>
      <div className="fixed md:right-10 right-2  bottom-5 z-30 text-black">
        <WhatsAppWidget
          phoneNumber="27764396155"
          message="🌟 Welcome to our WhatsApp Business channel! 🌟
We are delighted to assist you in achieving the best results and ensuring your trust in our services. Your satisfaction is our priority.
 **For any other inquiries or assistance, please enter your name and your inquiry below, and we'll be at your service.**"
          companyName="Vantage Capital FX"
        >
          <IoLogoWhatsapp color="#1CAACA" size="55px" />
        </WhatsAppWidget>
      </div>
    </div>
  );
};

export default SliderBanner;
