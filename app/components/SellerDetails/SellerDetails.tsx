"use client";
import React from "react";
import "./SellerDetails.scss";
import { Box, Button, Typography } from "@mui/material";
import TrustedImage from "../../../public/trusted-seller.svg";
import PremiumImage from "../../../public/super-premium.svg";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Default from "../../../public/get-distributers.svg";

type SellerDetailsProps = {
  name: string;
  gst: string;
  rating: number;
  proprietor: string;
  memberSince: number;
  address: string;
  country: string;
  tnvedCode: string;
};
export const SellerDetails: React.FC<SellerDetailsProps> = ({
  name,
  gst,
  rating,
  proprietor,
  memberSince,
  address,
  country,
  tnvedCode,
}) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <Box className="seller-details">
      <Box>
        <Typography className="sellerDetailsText">Seller Details</Typography>
      </Box>
      <Box className="sellerImageAndNameBox">
        {/* <PersonOutlineOutlinedIcon
          style={{ width: "48px", height: "48px", color: "#5E676E" }}
        /> */}
        <Image
          src="/logoTrade.png"
          className=""
          alt="Logo"
          width={90}
          height={24}
          priority
        />
        <Typography className="nameSeller">Victorum {country}</Typography>
      </Box>
      <Box className="gst-rating">
        <Box className="gstAndGstText">
          {/* <Typography className="gstText">GST</Typography> */}
          <Typography className="gstInfo">{tnvedCode}</Typography>
        </Box>
        <Typography className="rating">{rating} ★</Typography>
      </Box>
      <Box className="trusted-premium">
        <Image
          src={TrustedImage}
          height={32}
          width={64}
          alt="Trusted Seller"
          style={{ cursor: "pointer" }}
        />
        <Image src={PremiumImage} height={32} width={64} alt="Premium Seller" />
      </Box>
      {proprietor && (
        <Box className="mainInfoBox">
          <Box className="mainInfoAndIconBox">
            <PersonOutlineOutlinedIcon
              sx={{ width: "24px", height: "24px", color: "#5E676E" }}
            />{" "}
            <Typography className="mainInfoSellerHead">Proprietor</Typography>
          </Box>
          <Typography className="mainInfoSellerText">{proprietor}</Typography>
        </Box>
      )}

      {/* <Box className="mainInfoBox">
        <Box className="mainInfoAndIconBox">
          <CalendarTodayOutlinedIcon
            sx={{ width: "22px", height: "22px", color: "#5E676E" }}
          />{" "}
          <Typography className="mainInfoSellerHead">Member Since </Typography>
        </Box>
        <Typography className="mainInfoSellerText">
          {memberSince} Years
        </Typography>
      </Box> */}
      {address && (
        <Box className="mainInfoBox">
          <Box className="mainInfoAndIconBox">
            <FmdGoodOutlinedIcon
              sx={{ width: "24px", height: "24px", color: "#5E676E" }}
            />{" "}
            <Box className="addressAndViewMapBox">
              <Typography className="mainInfoSellerHead">Address</Typography>
              <Box>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Typography className="viewOnMap">View on Map</Typography>
                </a>
              </Box>
            </Box>
          </Box>
          <Typography className="mainInfoSellerText">{address}</Typography>
        </Box>
      )}
      {/* <Box className="viewContactBtnsBox">
        <Button className="viewBtn">
          <Typography className="viewBtnText">
            View Number <ChevronRightOutlinedIcon />
          </Typography>
        </Button>
        <Button className="contactBtn">
          <Typography className="contactBtnText">
            Contact Seller <ChevronRightOutlinedIcon />
          </Typography>
        </Button>
      </Box> */}
    </Box>
  );
};
