// Import necessary components from MUI or another UI library if you're using one
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import { Mic } from "@mui/icons-material";
import "./PostBuyRequirement.scss";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import AudioRecorder from "../shared/AudioRecorder/AudioRecorder";
import InquiryModal from "../FeaturedProducts/InquiryModal/InquiryModal";

const PostBuyRequirement = () => {
  const [productName, setProductName] = useState("");
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isModalOpen, setModalOpen] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const textFieldRef = useRef<HTMLDivElement>(null);
  const [resetAudioKey, setResetAudioKey] = useState(0); // New state for controlling the reset


  const handleCloseModal = () => {
    setModalOpen(false);
    setProductName("");
    setAudioData(null);
    setResetAudioKey(prevKey => prevKey + 1); // Increment key to force remount
  };
  
  const handleOpenModal = () => setModalOpen(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const testna = (data: any) => {
    setAudioData(data);
  };

  return (
    <div className="container-banner">
      <div className="image-section">
        <Image
          src="/postbuybg.png"
          alt="Background"
          height={isMobile ? 200 : 324}
          width={isMobile ? 300 : 400}
        />
      </div>
      <div className="form-section">
        <div className="text-logo">
          <div>
            <h1>Post Buy Requirement</h1>
            <p style={{ marginBottom: "2rem" }}>
              Get the Best Deals and Exclusive Offers with Victorum Trading
            </p>
          </div>
          <div style={{ marginTop: "16px" }} className="logo-banner">
            <Image
              src="/logoTrade.png"
              alt="Logo"
              width={139}
              height={37}
              priority
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "-25px" }}>
            <p style={{ fontSize: "14px" }}>Tell us about your requirement*</p>
          </div>
          <TextField
            placeholder="Enter the product you are looking for..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "56px",
                backgroundColor: "white",
              },
            }}
          />
          <div>
            <p className="font-size-14">Personalise your inquiry</p>
            <p className="font-size-12">
              Now, record your requirement to communicate clearly & faster with{" "}
              <br /> sellers than ever before.
            </p>
          </div>
          <div className="record-section">
            <AudioRecorder
             key={resetAudioKey}
              onAudioRecorded={testna}
            />
            <Image
              src="/background.png"
              alt="Logo"
              className="recordImage"
              width={136}
              height={113}
              priority
            />
          </div>

          <div style={{ textAlign: "end" }}>
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                mt: 6,
                mb: 5,
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#2A5182",
                ".button-text p": {
                  textTransform: "none",
                },
              }}
              disabled={!productName}
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </div>

          {isModalOpen && (
            <InquiryModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              productName={productName}
              isAudio={true}
              audioData={audioData}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default PostBuyRequirement;
