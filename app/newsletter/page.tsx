"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import OurCoreValue from "../../public/sub1.jpeg";
import OurCoreValue2 from "../../public/unsub1.webp";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Newsletter() {
  const formRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // email start
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const subscribeUser = async (e: any) => {
    const res = await fetch("/api", {
      body: JSON.stringify({
        email: email,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    if (res.ok) {
      setEmail("");
      toast.success("Subscribed successfully!");
    } else {
      console.log("error", res);
      toast.error("Email already exists!");
    }
  };

  const handleEmailChange = (event: any) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailValid(emailValidationRegex.test(emailValue));
  };

  const handleSubscribe = (event: any) => {
    event.preventDefault();
    if (isEmailValid) {
      subscribeUser(email);
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  // email end

  const [from, setFrom] = useState<"top-box" | "seller-details" | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const fromParam = searchParams.get("from");
      if (fromParam === "top-box" || fromParam === "seller-details") {
        setFrom(fromParam);
      } else {
        setFrom(null);
      }
    }
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Box>
        {/* FIRST SECTION */}
        <Box className="aboutUsMainBox">
          <Box className="firstSectionAboutUs">
            <Box className="badgeAboutUs">
              <Typography className="badgeAboutUsText">
                Get Newsletter
              </Typography>
            </Box>

            <Box className="mainHeadingAboutUs">
              <Typography className="mainHeadingAboutUsText" color={"#21130d"}>
                {from === "top-box" ? "Get in Touch" : "Don't miss it!"}
              </Typography>
            </Box>

            <Box className="mainHeadingContent"></Box>
          </Box>
        </Box>

        {/* SECOND SECTION */}
        <Box className="fifthSectionMain">
          <Box className="fifthSectionBox">
            <Box className="fifthSectionContent">
              <Typography className="meetOurForceText">
                Our Newsletter Info
              </Typography>
              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue}
                    width={509}
                    height={284}
                    layout="responsive"
                    style={{ height: "100%" }}
                    alt="Customer Service"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Subscribe
                  </Typography>

                  {/* {from === "top-box" ? ( */}
                  <Typography
                    className="ourCoreValueContentDesc"
                    sx={{
                      marginBottom: "16px",
                    }}
                  >
                    Here you can easily{" "}
                    <span
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginLeft: "0px",
                      }}
                      onClick={scrollToForm}
                    >
                      sign up
                    </span>{" "}
                    to our newsletter. Be the first to find out the latest news,
                    tips for buying and selling through Victorum as well as
                    general updates throughout the year.
                  </Typography>
                  {/* {from === "top-box" ? (
                    <Typography className="ourCoreValueContentDesc">
                      If you are not a client yet, you can dial 00000000 in
                      order to reach our support desk.
                    </Typography>
                  ) : null} */}
                </Box>
              </Box>

              <Box className="ourCoreValueItems2">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue2}
                    width={509}
                    style={{ height: "100%" }}
                    layout="responsive"
                    height={284}
                    alt="Constant Learning"
                  />
                </Box>

                {from === "top-box" ? (
                  <Box className="ourCoreValuesItemContent">
                    <Typography className="ourCoreValueContentHeading">
                      Email and Working Hours
                    </Typography>
                    <Typography className="ourCoreValueContentDesc">
                      You can also write us a message to support@xxxxx or use
                      the
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          marginLeft: "6px",
                        }}
                        onClick={scrollToForm}
                      >
                        contact form below
                      </span>
                      {" - our support desk is available "}
                      <b>Monday to Friday from 08h till 18h.</b>
                    </Typography>
                  </Box>
                ) : (
                  <Box className="ourCoreValuesItemContent" ref={formRef}>
                    <Typography className="ourCoreValueContentHeading">
                      Automatic Unsubscribe
                    </Typography>
                    <Typography className="ourCoreValueContentDesc">
                      Please note that we will remove you from our subscriber
                      list after one year - please feel free to resubscribe at
                      any time!
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              type="email"
              label="Your email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                sx: {
                  borderRadius: 2,
                  backgroundColor: "white",
                  width: "300px",
                  [theme.breakpoints.down("sm")]: {
                    width: "190px", // On screens smaller than 'sm', width will be 200px
                  },
                },
              }}
              required
              autoComplete="email"
              sx={{
                marginRight: "8px",
                ".MuiInputLabel-root": { color: "#333" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubscribe}
              sx={{
                height: "52px",
                borderRadius: "8px",
                backgroundColor: "#2A5182",
                width: "100px",
                ".button-text p": {
                  textTransform: "none",
                },
              }}
            >
              <div className="button-text">
                <p className="font-size-16">Subscribe</p>
              </div>
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
