"use client";
import React from "react";
import "./footerTopBox.scss";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FooterTopBox() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const logoWidth = isMobile ? 100 : 181;
  const logoHeight = isMobile ? 27 : 41;
  const gPartnerHeight = isMobile ? 66 : 100;
  return (
    <div className="main-container-top">

   
    <div className="top-box-container">
      <div className="two-images">
        <Image
          src="/logo.png"
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
          priority
        />
        <Image
          src="/g-partner.svg"
          className="ml-left-logo"
          alt="Logo"
          width={logoWidth}
          height={gPartnerHeight}
          priority
        />
      </div>

      <div className="follow-us">
        <h3>Follow us</h3>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          sx={{
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#2A5182",
            width: "185px",
            ".button-text p": {
              textTransform: "none",
            },
          }}
        >
          <div className="button-text">
            <p>Contact us</p>
            <ArrowForwardIcon />
          </div>
        </Button>
      </div>
    </div>

    <div className="follow-us-down">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>

      <div className="btn-container-big">
        <Button
          variant="contained"
          sx={{
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#2A5182",
            width: "100%",
            ".button-text p": {
              textTransform: "none",
            },
          }}
        >
          <div className="button-text">
            <p>Contact us</p>
            <ArrowForwardIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}
