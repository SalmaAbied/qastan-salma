import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const oplossingenData = [
  {
    id: 1,
    title: "Digitaliseren",
    imageSrc: "https://th.bing.com/th/id/OIG3.ftLTbgmg9wTyyDxvCyr.?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "digitalisering",
  },
  {
    id: 2,
    title: "Automatiseren",
    imageSrc: "https://th.bing.com/th/id/OIG3.F5nsU2ETP0w_caYzeO3y?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "automatiseren",
  },
  {
    id: 3,
    title: "Plannen",
    imageSrc: "https://th.bing.com/th/id/OIG2.OEHBq1JW7Z7_zmAqMZl0?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "plannen",
  },
  {
    id: 4,
    title: "IT-beheer",
    imageSrc: "https://th.bing.com/th/id/OIG1.VgM1jFInMMX6h0InRZEG?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "IT-beheer",
  },
];

function Card() {
  return (
    <section className="container mx-auto mb-10">
      <div className="hidden xl:flex gap-2 flex-wrap justify-around">
        {oplossingenData.map((oplossing) => (
          <div key={oplossing.id} className="relative rounded-xl bg-darkblue overflow-hidden w-72 h-72 group bg-darkblue shadow-lg shadow-darkblue/50 text-gray-700">
            <div className="relative w-full h-96">
              <img src={oplossing.imageSrc} alt={oplossing.altText} className="opacity-85" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center p-6 bg-darkblue w-48 mx-auto rounded-t-lg h-12">
              <h3 className="text-white text-xl font-regular">{oplossing.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="block xl:hidden">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            840: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {oplossingenData.map((oplossing) => (
            <SwiperSlide key={oplossing.id}>
              <div className="relative rounded-xl bg-darkblue overflow-hidden w-72 h-72 group bg-darkblue shadow-lg shadow-darkblue/50 text-gray-700 mx-auto">
                <div className="relative w-full h-96">
                  <img src={oplossing.imageSrc} alt={oplossing.altText} className="opacity-85" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center p-6 bg-darkblue w-48 mx-auto rounded-t-lg h-12">
                  <h3 className="text-white text-xl font-regular">{oplossing.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Card;
