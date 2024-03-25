/* eslint-disable @next/next/no-img-element */
"use client";
import "./Navigation.scss";
import Image from "next/image";
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import NavigationPopover from "../NavigationPopover/NavigationPopover";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  getAllProductsInCategories,
  processApiResponse,
} from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";
import { useRouter } from "next/navigation";
import SelectCity from "../shared/SelectCity/SelectCity";

type Product = {
  productName: string;
  categoryName: string;
  productImage: string;
  productSlug: string;
  id: number;
};

const Overlay = styled("div")({});

const Navigation = () => {
  const { data: marketData } = useMarketData();
  const isMobile = useMediaQuery("(max-width: 1021px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [navClass, setNavClass] = React.useState("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All Regions");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
    setInputValue(value);
  };

  const handleOptionSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value: Product | null
  ) => {
    if (value) {
      const selectedProductName = value.productName;
      const selectedProduct = products.find(
        (product) => product.productName === selectedProductName
      );

      if (selectedProduct) {
        router.push(
          `/product/${selectedProduct.productSlug}/${selectedProduct.id}`
        );
      }
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  useEffect(() => {
    if (isMobile && isFocused) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isFocused]);

  useEffect(() => {
    if (marketData) {
      const formatted = processApiResponse(marketData);
      let allProducts;

      if (selectedCountry === "All Regions") {
        allProducts = getAllProductsInCategories(formatted);
      } else {
        allProducts = getAllProductsInCategories(formatted, selectedCountry);
      }

      setProducts(allProducts);
    }
  }, [marketData, selectedCountry]);

  // scroll start
  const SCROLL_THRESHOLD_ADD = 70;
  const SCROLL_THRESHOLD_REMOVE = 10;
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window && typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (
          currentScrollY >= SCROLL_THRESHOLD_ADD &&
          lastScrollY < SCROLL_THRESHOLD_ADD
        ) {
          setNavClass("smaller-nav");
        } else if (
          currentScrollY <= SCROLL_THRESHOLD_REMOVE &&
          lastScrollY > SCROLL_THRESHOLD_REMOVE
        ) {
          setNavClass("");
        }

        lastScrollY = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  // scroll end
  return (
    <div id="wrapper" className={`${navClass}`}>
      {isMobile && isFocused && (
        <Overlay
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 6,
          }}
        />
      )}
      <div className="block left">
        <Link href="/">
          <Image
            src="/logoTrade.png"
            className="ml-left-logo"
            alt="Logo"
            width={181}
            height={48}
            priority
          />
        </Link>
      </div>
      <div className="block center medium-hide">
        <div className="select-city-container">
          <SelectCity
            selectedOption={selectedCountry}
            setSelectedOption={setSelectedCountry}
          />
        </div>

        <Autocomplete
          noOptionsText="Oops! No products found."
          disablePortal
          id="combo-box-demo"
          options={products}
          isOptionEqualToValue={(option, value) =>
            option.productName === value.productName
          }
          getOptionLabel={(option) => `${option.productName}`}
          onChange={handleOptionSelect}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          ref={(node) => {
            if (node) {
              inputRef.current = (node as any).querySelector("input");
            }
          }}
          open={inputValue.length >= 3 && products.length > 0 && isFocused}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          sx={{
            width: { xs: "90%", md: "60%" },
            marginRight: 2,
            "& .MuiOutlinedInput-root": {
              paddingRight: "15px !important",
              borderRadius: "8px",
              "& .MuiInputBase-input::placeholder": {
                fontSize: { xs: "12px", sm: "14px" },
                lineHeight: { xs: "1.25", sm: "1.5" },
              },
            },
          }}
          filterOptions={(options, state) =>
            state.inputValue.length < 3
              ? []
              : options.filter((option) =>
                  option.productName
                    .toLowerCase()
                    .includes(state.inputValue.toLowerCase())
                )
          }
          renderOption={(props, option) => (
            <li
              {...props}
              key={"Option" + option.id}
              className="autocompleteSingleOptionLi"
            >
              <Box
                key={"Option" + option.id}
                className="autocompleteSingleOptionBox"
              >
                <img
                  src={option.productImage ?? "/get-distributers.svg"}
                  alt={`Image for ${option.productName}`}
                  className="imageProductSearch"
                />
                <Typography textAlign={"left"}>{option.productName}</Typography>
              </Box>
            </li>
          )}
          className="searchProductTextField"
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={(node) => {
                inputRef.current = node;
              }}
              variant="outlined"
              placeholder="Search here for products, categories, services or countries"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end" sx={{ borderRadius: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <SearchIcon style={{ color: "black" }} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* <div className="registered-users-container">
          <div className="reg-users-box">
            <p className="registered-users-text black-text">Registered Users</p>
          </div>
          <div className="number-of-users-box">
            <p className="registered-users-text blue-text">1,07,64,614</p>
          </div>
        </div> */}
      </div>
      <div className="block right">
        {/* <p className="login-text">Login</p> */}
        {/* <Button
          variant="contained"
          style={{ backgroundColor: "#2A5182" }}
          className="sign-up"
        >
          Sign Up
        </Button> */}
        <MenuIcon
          className="mr-right-icon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <NavigationPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Navigation;