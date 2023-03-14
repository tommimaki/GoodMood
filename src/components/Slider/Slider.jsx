import React from "react";
import "./slider.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.JPG";

const Slider = () => {
  const sliderArr = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div key={index} className="slide">
              <img src={item.image} alt="slider img" />
            </div>
          );
        })}
      </div>
      <div className="mobile-img">
        <img src={sliderArr[0].image} alt="slider img" />
      </div>
    </div>
  );
};

export default Slider;
