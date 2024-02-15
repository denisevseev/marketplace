"use client";
import "./DownloadOurApp.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DownloadAppMobileImage from "../../../public/downloadOurNewApp.png";
import QRCodeImage from "../../../public/qrCodeMobileAppImage.jpg";
import GooglePlayImage from "../../../public/googlePlayImage.svg";
import AppStoreImage from "../../../public/appStoreImage.svg";

export default function DownloadOurApp() {
  return (
    <Box>
      <Box className="downloadOurAppMainBox">
        <Box className="downloadOurAppMain">
          <Box className="mobileImagesBox">
            <Image
              height={372}
              width={406}
              style={{ width: "100%", objectFit: "cover" }}
              src={DownloadAppMobileImage}
              alt="Download Our New App"
            />
          </Box>
          <Box className="downloadOurAppBox">
            <Typography className="downloadOurAppText">
              Download Our New App
            </Typography>
            <Typography className="scanTheQrCodeText">
              Scan the QR Code to download the app on your smartphone
            </Typography>
            <Box className="qrCodeStoresImageBox">
              <Image
                height={130}
                width={130}
                style={{ objectFit: "cover" }}
                src={QRCodeImage}
                alt="QR Code"
              />
              <Box className="storesImagesBox">
                <Image
                  height={48}
                  width={160}
                  style={{ objectFit: "cover", cursor: "pointer" }}
                  src={GooglePlayImage}
                  alt="Google Play Image"
                />
                <Image
                  height={48}
                  width={160}
                  style={{ objectFit: "cover", cursor: "pointer" }}
                  src={AppStoreImage}
                  alt="App Store Image"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="downloadMobileBox">
        <Image
          height={48}
          width={160}
          style={{ objectFit: "cover", cursor: "pointer" }}
          src={GooglePlayImage}
          alt="Google Play Image"
        />
        <Image
          height={48}
          width={160}
          style={{ objectFit: "cover", cursor: "pointer" }}
          src={AppStoreImage}
          alt="App Store Image"
        />
      </Box>
    </Box>
  );
}
