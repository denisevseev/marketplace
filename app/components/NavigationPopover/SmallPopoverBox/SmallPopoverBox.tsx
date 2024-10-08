"use client";
import React from "react";
import "./SmallPopoverBox.scss";
import Image from "next/image";
import { Box } from "@mui/material";

const openNewTab = (url: any, sameWindow: boolean = false) => {
  if (sameWindow) {
    console.log("sameWindow", url);
    window.location.href = url; // Opens the link in the same window
  } else {
    const newWindow = window.open(url, "_blank"); // Opens the link in a new tab
    if (newWindow) newWindow.opener = null; // Ensures security by disowning the new window
  }
};

interface SmallPopoverBoxProps {
  imgSrc: string;
  text: string;
  redirectUrl?: string;
  sameWindow?: boolean;
  width?: number;
  height?: number;
}
const SmallPopoverBox: React.FC<SmallPopoverBoxProps> = ({
  imgSrc,
  text,
  redirectUrl,
  sameWindow,
  width = 26,
  height = 26,
}) => {
  const handleClick = () => {
    openNewTab(redirectUrl, sameWindow);
  };
  return (
    <Box onClick={handleClick} sx={{ width: "100%" }}>
      <p className="box-container" rel="noopener noreferrer">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={text}
            width={width}
            height={height}
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="box-title">{text}</div>
      </p>
    </Box>
  );
};

export default SmallPopoverBox;
