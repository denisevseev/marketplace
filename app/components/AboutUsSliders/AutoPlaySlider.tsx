"use client";
import React from "react";
import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AutoPlay.module.scss";
import Image from "next/image";

interface AutoPlaySliderProps {
  images: string[];
}

const AutoPlaySlider: React.FC<AutoPlaySliderProps> = ({ images }) => {
  const slickSettings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    pauseOnHover: false,
    vertical: true,
  };

  return (
    <Box className="sliderAboutUsMain">
      <Slider {...slickSettings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image
              src={`${image}`}
              style={{
                borderRadius: "15px",
                objectFit: "cover",
              }}
              height={190}
              width={140}
              alt={`Image ${index + 1}`}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoPlaySlider;
