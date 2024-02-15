"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../about-us/style.scss";

const OurJourneySlider = () => {
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const [totalSlides, setTotalSlides] = useState<number>(0);

  // const slider = useRef<Slider>(null);

  const slickSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // afterChange: (index) => setCurrentSlide(index),
  };

  // useEffect(() => {
  //   if (
  //     slider.current &&
  //     slider.current.props &&
  //     slider.current.props.children
  //   ) {
  //     setTotalSlides(React.Children.count(slider.current.props.children));
  //   }
  // }, [slider]);

  // const previousSlide = () => {
  //   if (slider.current) {
  //     slider.current.slickPrev();
  //   }
  // };

  // const nextSlide = () => {
  //   if (slider.current && slickSettings.slidesToShow !== undefined) {
  //     slider.current.slickNext();
  //   }
  // };
  return (
    <Box className="sicthSectionMain">
      <Box className="sixthSectionBox">
        <Typography className="meetOurForceText">Our Journey</Typography>
        {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          type="button"
          className="slick-arrow slick-prev"
        />

        <button
          onClick={nextSlide}
          disabled={
            currentSlide ===
            totalSlides - (slickSettings.slidesToShow || 1)
          }
          type="button"
          className="slick-arrow slick-next nextOurJourneySlickBtn"
        />
      </Box> */}
        <Box sx={{ width: "100%" }}>
          <Slider {...slickSettings}>
            {/* Slide 1 */}
            <Box className="ourJourneySlideItems">
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyTextBox">
                  <Typography className="ourJourneyText">Launched</Typography>
                </Box>
                <Box className="ourJourneyLine"></Box>
                <Box className="ourJourneyYearBox">
                  <Typography className="ourJourneyYear">2003</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyBoxUp">
                  <Typography className="ourJourneyText">
                    Formation of B2B portal and launch of template based
                    catalogue
                  </Typography>
                </Box>
                <Box className="ourJourneyLineDown"></Box>
                <Box className="ourJourneyYearDownBox">
                  <Typography className="ourJourneyYear">2004</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyTextBox">
                  <Typography className="ourJourneyText">
                    Trade leads section launched & started coming out with
                    CDroms
                  </Typography>
                </Box>
                <Box className="ourJourneyLine"></Box>
                <Box className="ourJourneyYearBox">
                  <Typography className="ourJourneyYear">2005</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyBoxUp">
                  <Typography className="ourJourneyText">
                    CRM and MY TradeIndia operations started
                  </Typography>
                </Box>
                <Box className="ourJourneyLineDown"></Box>
                <Box className="ourJourneyYearDownBox">
                  <Typography className="ourJourneyYear">2006</Typography>
                </Box>
              </Box>
            </Box>
            {/* Slide 2 */}
            <Box className="ourJourneySlideItems">
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyTextBox">
                  <Typography className="ourJourneyText">
                    Trade show related supplement started
                  </Typography>
                </Box>
                <Box className="ourJourneyLine"></Box>
                <Box className="ourJourneyYearBox">
                  <Typography className="ourJourneyYear">2007</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyBoxUp">
                  <Typography className="ourJourneyText">
                    Became ICANN Accredited registrar & super seller launched
                  </Typography>
                </Box>
                <Box className="ourJourneyLineDown"></Box>
                <Box className="ourJourneyYearDownBox">
                  <Typography className="ourJourneyYear">2008</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyTextBox">
                  <Typography className="ourJourneyText">
                    Customized websites, customized header & e-seller
                  </Typography>
                </Box>
                <Box className="ourJourneyLine"></Box>
                <Box className="ourJourneyYearBox">
                  <Typography className="ourJourneyYear">2009</Typography>
                </Box>
              </Box>
              <Box className="ourJourneySingleItem">
                <Box className="ourJourneyDot"></Box>
                <Box className="ourJourneyBoxUp">
                  <Typography className="ourJourneyText">
                    Online video
                  </Typography>
                </Box>
                <Box className="ourJourneyLineDown"></Box>
                <Box className="ourJourneyYearDownBox">
                  <Typography className="ourJourneyYear">2010</Typography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default OurJourneySlider;
