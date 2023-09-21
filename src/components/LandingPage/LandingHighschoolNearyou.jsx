import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VancouverCollege from "../../assets/SchoolLogo/VancouverCollege.png";
import EricHamber from "../../assets/SchoolLogo/EricHamber.png";
import FraserHeights from "../../assets/SchoolLogo/FraserHeights.png";
import Kits from "../../assets/SchoolLogo/Kits.jpg";
import Magee from "../../assets/SchoolLogo/Magee.png";
import Matheson from "../../assets/SchoolLogo/Matheson.png";
import McNair from "../../assets/SchoolLogo/McNair.png";
import McRoberts from "../../assets/SchoolLogo/McRoberts.png";
import NorthSurrey from "../../assets/SchoolLogo/NorthSurrey.png";
import Palmer from "../../assets/SchoolLogo/Palmer.png";
import SLSS from "../../assets/SchoolLogo/SLSS.png";

const images = [
  VancouverCollege,
  EricHamber,
  FraserHeights,
  Kits,
  Magee,
  Matheson,
  McNair,
  McRoberts,
  NorthSurrey,
  Palmer,
  SLSS,
];

function StoreScrollBar() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Adjust the interval (in milliseconds) for the slide change

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    infinite: true, // Make the carousel infinite
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Adjust the autoplay speed (in milliseconds)
  };

  return (
    <div>
      <div className="mt-4 text-center md:mt-10">
        <h1 className=" text-xl font-bold mb-10 md:text-3xl">
          Coming to a <span className="text-lime-400">Highschool</span> Near you
        </h1>
      </div>
      <div className="z-10 p-2 mt-2 mb-2 md:p-4 md:mt-4 md:mb-10">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image}
                alt={`${index}`}
                className="w-52 h-36 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StoreScrollBar;
