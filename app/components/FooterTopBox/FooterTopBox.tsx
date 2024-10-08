"use client";
import React, { useState } from "react";
import "./FooterTopBox.scss";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactUs from "../ContactUs/ContactUs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FooterTopBox() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();


  const [openModal, setOpenModal] = useState(false);

  const handleNavigateToContactUs = () => {
    const url = '/contact-us?from=top-box';
    router.push(url);
  };
  
  

  const logoWidth = isMobile ? 106 : 181;
  const logoHeight = isMobile ? 28 : 48;
  const gPartnerHeight = isMobile ? 66 : 100;
  return (
    <div className="main-container-top">
      <div className="top-box-container">
        <div className="two-images">
          <a href="/">
            <Image
              src="/logoTrade.png"
              alt="Logo"
              width={logoWidth}
              height={logoHeight}
              priority
            />
          </a>
          {/* </a> */}
        </div>

        <div className="follow-us">
          <h3>Follow us</h3>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.youtube.com/c"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <YouTubeIcon />
          </a>
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            onClick={handleNavigateToContactUs}
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
              <p className="font-size-16">Contact us</p>
              {/* <ArrowForwardIcon /> */}
            </div>
          </Button>
        </div>
      </div>
      <ContactUs open={openModal} setOpen={setOpenModal} />

      <div className="follow-us-down">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/c"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <YouTubeIcon />
        </a>
      </div>

      <div className="btn-container-big">
        <Button
          variant="contained"
          onClick={handleNavigateToContactUs}
          sx={{
            width: "100%",
            ".button-text p": {
              textTransform: "none",
            },
          }}
          className="coontactUsButton"
        >
          <div className="button-text">
            <p className="font-size-16">Contact us</p>
            {/* <ArrowForwardIcon /> */}
          </div>
        </Button>
      </div>
    </div>
  );
}
