"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./News.scss";
import { Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import { globalDetails } from "../utils/constants";
import HeadData from "../components/head";

export default function NewsPage() {
  const handleContact = () => {
    window.location.href = "mailto:" + globalDetails.email;
  };

  return (
    <>
      <HeadData
        title="News | Victorum Trade"
        description="Stay updated with the latest news and publications from Victorum Trade. "
        keywords="News, publications, press reports, Victorum Trade, transparency, updates"
      />
      <Box className="newsMainContainer">
        <Box className="titleHeadlineImgBg">
          <Box className="newsTitleHeadlineMW">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* TITLE */}
              <Box className="newsTitleBg">
                <Typography className="newsTitleBgText">News</Typography>
              </Box>
              {/* HEADLINE */}
              <Typography className="newsTitle">Stay tuned!</Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                borderRadius: "12px",
              }}
            >
              <Box className="newsBg"></Box>
            </Box>
          </Box>
        </Box>
        {/* TEXT */}
        <Box className="newsTextContainerPadding">
          <Box className="newstextContainer">
            <Typography className="newsSubtitle">
              Transparency is one of the pillars of our business - so that you
              always know what is happening at our company, you will find all
              relevant publications, news and press reports on our company
              below.
            </Typography>
            <Typography className="newsSubtitle">
              You want to learn more? You are interested to talk to someone from
              our News Desk?
            </Typography>
            <Typography className="newsSubtitle">
              {" "}
              Send us a message to{" "}
              <span className="mailToText" onClick={handleContact}>
                {globalDetails.email}
              </span>{" "}
              or dial {globalDetails.phone} - we are glad to assist you!
            </Typography>
          </Box>
        </Box>
        <Box className="contactUsContainer">
          <ContactUsForm />
        </Box>
      </Box>
    </>
  );
}
