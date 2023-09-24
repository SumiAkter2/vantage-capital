import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { AiFillStar } from "react-icons/ai";
import { client } from "../../Info/TestomonialInfo";

const Testimonial = () => {
  return (
    <div id="review">
      <div className="lg:px-24 px-6 py-6">
        <h1 className="text-black text-3xl lg:text-5xl font-bold text-center mb-12">
          What Our Clients Say
        </h1>
      </div>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#1ba9ca",
          "--swiper-pagination-color": "#1ba9ca",
        }}
        className="mySwiper "
      >
        {client.map((c) => (
          <SwiperSlide key={c.id}>
            <div className="  text-black ">
              <div className="md:flex justify-center items-center">
                <img
                  src={c.img}
                  className="w-56 md:w-96  rounded-lg border-4 p-6 lg:p-12 mx-auto lg:mx-auto bg-black border-[#1ba9ca]"
                  alt="man-img"
                />
                <div className="text-start lg:w-1/2 md:px-6 px-12 mt-6">
                  <h1 className="text-4xl font-bold text-primary">{c.name}</h1>
                  <p className="py-6 ">{c.des}</p>

                  <div className="flex justify-start items-center mb-2">
                    <AiFillStar fill="orange" />
                    <AiFillStar fill="orange" />
                    <AiFillStar fill="orange" />
                    <AiFillStar fill="orange" />
                    <AiFillStar fill="orange" />
                  </div>
                  <p>Rating: {c.ratting}/5</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
