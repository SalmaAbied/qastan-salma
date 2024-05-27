import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    id: 1,
    name: "Gaverzicht",
    logoUrl: "https://www.qastan.be/swfiles/files/Gaverzicht.jpg?nc=1709650208",
  },
  {
    id: 2,
    name: "AVIA",
    logoUrl: "https://www.qastan.be/swfiles/files/AVIA.jpg?nc=1709650208",
  },
  {
    id: 3,
    name: "Brouwerij Van Honsebrouck",
    logoUrl: "https://www.qastan.be/swfiles/files/Brouwerij-Van-Honsebrouck.jpg?nc=1709650208",
  },
  {
    id: 4,
    name: "Frame",
    logoUrl: "https://www.qastan.be/swfiles/files/Frame.svg?nc=1709650208",
  },
  {
    id: 5,
    name: "KV Kortrijk",
    logoUrl: "https://www.qastan.be/swfiles/files/club-logo-kv-kortrijk-qastan.png?nc=1709650208",
  },
  {
    id: 6,
    name: "Bpost",
    logoUrl: "https://www.qastan.be/swfiles/files/Bpost_logo-1.svg?nc=1709650208",
  },
  {
    id: 7,
    name: "Lecot",
    logoUrl: "https://www.qastan.be/swfiles/files/Lecot.jpg?nc=1709650208",
  },
  {
    id: 8,
    name: "Televic",
    logoUrl: "https://www.qastan.be/swfiles/files/Televic_logo_new_600-1.svg?nc=1709650208",
  },
];

function LogoSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="pt-44 container mx-auto">
        <h1 className="pl-5 text-4xl">Onze partners</h1>
        <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
        <Slider ref={sliderRef} {...settings} className="py-10 flex justify-center">
          {partners.map((partner) => (
            <div key={partner.id} className="px-2">
              <div className="border-2 border-darkblue rounded-3xl">
                <div className="p-4 flex justify-center">
                  <img src={partner.logoUrl} alt={partner.name} className="w-36 h-36 object-contain" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-4">
          <button onClick={goToPrevSlide} className="mx-2">
            <ArrowLeftIcon size={24} />
          </button>
          <button onClick={goToNextSlide} className="mx-2">
            <ArrowRightIcon size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

export default LogoSlider;
