import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Autoplay, Pagination } from "swiper/modules";
import BannerInfo from "./BannerInfo";
// import { ReactComponent as CompanyIcon } from "./assets/crown.svg";

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
                    <h1 className="md:text-5xl text-4xl font-bold my-4 leading-loose">
                      Unlock Financial Success Today!
                    </h1>
                    <p className="py-4 text-2xl font-semibold">
                      Follow the Best, Earn the Best
                    </p>
                    <div className="text-sm mb-12 ">
                      <p className="flex  justify-start items-start md:py-2 ">
                        <ImArrowRight size="18px" className="mr-2" /> No
                        Guesswork: Follow Top Strategies in Real-Time!
                      </p>
                      <p className="flex  justify-start items-start md:py-2 ">
                        <ImArrowRight size="18px" className="mr-2" /> Flexible
                        Withdrawals: 100% Control at Your Fingertips
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
                    <p className="flex justify-start items-start md:py-2 ">
                      <ImArrowRight size="18px" className="mr-2" /> Join Us as
                      an Affiliate Partner and Start Earning!
                    </p>
                    <p className="flex  justify-start items-start md:py-2 ">
                      <ImArrowRight size="18px" className="mr-2" /> Get Paid for
                      Every Client&apos;s Daily Trading Activities
                    </p>
                    <p className="flex  justify-start items-start md:py-2 ">
                      <ImArrowRight size="18px" className="mr-2" /> Build a
                      Passive Income Stream with Vantage Capital FX
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
      <div className="fixed md:right-10 right-2  bottom-5 z-30">
        <WhatsAppWidget phoneNumber="27764396155">
          {" "}
          <IoLogoWhatsapp color="#1CAACA" size="55px" />
        </WhatsAppWidget>
        <a
          className="hover:text-primary p-2"
          href="https://wa.me/27764396155?text=Welcome%20to%20our%20WhatsApp%20Business%20channel!%20%F0%9F%8C%9F%0A%0AWe%20are%20delighted%20to%20assist%20you%20in%20achieving%20the%20best%20results%20and%20ensuring%20your%20trust%20in%20our%20services.%20Your%20satisfaction%20is%20our%20priority.%0A%0APlease%20choose%20one%20of%20the%20following%20options%20to%20help%20us%20serve%20you%20better%3A%0A%0A1%EF%B8%8F%E2%83%A3%20**Do%20you%20already%20have%20an%20account%20with%20us%3F**%0A-%20If%20yes%2C%20access%20your%20account%20%5Bhere%5D(https%3A%2F%2Fct.topfx.com%2Fprofiles%2Ff2iQWOeROA%3Fu%3Dthulanis).%0A-%20If%20no%2C%20you%20can%20easily%20create%20an%20account%20%5Bhere%5D(https%3A%2F%2Fsignup.topfx.com.sc%2FRegistration%2FMain%2FAccount%3Fdest%3Dlive%26camp%3D8138).%0A%0A2%EF%B8%8F%E2%83%A3%20**Liquidity%20Fund%20Investors%3A**%0AIf%20you're%20interested%20in%20our%20Liquidity%20Fund%2C%20please%20provide%20us%20with%20some%20initial%20information%3A%0A-%20Your%20name%0A-%20Investment%20amount%0A-%20Preferred%20contact%20email%0A-%20Any%20additional%20questions%20or%20comments%3F%0A%0AWe%20will%20promptly%20respond%20with%20all%20the%20details%20you%20require%20for%20your%20investment%20journey.%20%F0%9F%93%88%0A%0A3%EF%B8%8F%E2%83%A3%20**For%20any%20other%20inquiries%20or%20assistance%2C%20please%20enter%20your%20name%20and%20your%20inquiry%20below%2C%20and%20we'll%20be%20at%20your%20service.**%0A%0AYour%20queries%20and%20feedback%20are%20valuable%20to%20us.%20Please%20choose%20the%20option%20that%20suits%20your%20needs%2C%20and%20we'll%20ensure%20a%20seamless%20experience.%20%F0%9F%9A%80"
          // href="https://chat.whatsapp.com/BZRVsWEIrSO2O4kCVSHO9B "
          target="_blank"
          rel="noreferrer"
        >
          {/* https://wa.me/27764396155/?text=Hello%21%20I%20have%20a%20question%3A%20%5BYour%20Question%20Here%5D%0A%0AJoin%20Our%20Lucrative%20Affiliate%20Program%3A%20Partner%20with%20the%20Experts%20in%20Money%20Management%0A%0AAre%20you%20a%20motivated%20individual%20looking%20for%20a%20rewarding%20opportunity%20in%20the%20financial%20industry%3F%20If%20yes%2C%20please%20provide%20us%20with%20the%20following%20information%3A%0A%0AYour%20Full%20Name%3A%0AContact%20Email%3A%0APhone%20Number%3A%0AHow%20did%20you%20hear%20about%20our%20affiliate%20program%3F%0AAny%20additional%20questions%20or%20comments%3F
           */}

          {/* <IoLogoWhatsapp color="#1CAACA" size="55px" /> */}
        </a>
      </div>
    </div>
  );
};

export default SliderBanner;
