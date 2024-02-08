"use client";
import "./topCategories.scss";
import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import HealthBeautyIcon from "../../../public/health-beauty.svg";
import FashionIcon from "../../../public/apparel-fashion.svg";
import ChemicalsIcon from "../../../public/chemicals.svg";
import MachineryIcon from "../../../public/machinery.svg";
import ConstructionIcon from "../../../public/construction-real-estate.svg";
import ElectronicsIcon from "../../../public/electronics-electrical-supplies.svg";
import MedicalIcon from "../../../public/hospital-medical-supplies.svg";
import GiftsIcon from "../../../public/gifts-crafts.svg";
import PackagingIcon from "../../../public/packaging-paper.svg";
import AgricultureIcon from "../../../public/agriculture.svg";
import HomeSuppliesIcon from "../../../public/home-supplies.svg";
import MineralMetalsIcon from "../../../public/mineral-metals.svg";
import IndustrialSuppliesIcon from "../../../public/industrial-supplies.svg";
import PipesTubesFittingsIcon from "../../../public/pipes-tubes-fittings.svg";
import Image from "next/image";
import PopoverTopCategories from "./PopoverTopCategories";

interface TopCategoritesProps {
  data: any[];
}

const TopCategories: React.FC<TopCategoritesProps> = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const topCategoriesRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (category: string) => {
    setCurrentCategory(category);
    setPopupVisible(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      topCategoriesRef.current &&
      topCategoriesRef.current.contains(event.target as Node)
    ) {
      // Mouse is still inside the main box, do not hide the popup
      return;
    }

    // If the mouse is leaving the popup or specific areas, hide the popup
    setPopupVisible(false);
  };


  console.log(data);
  return (
    <Box className="topCategoriesMainBox">
      <Box className="topCategoriesBox">
        <Box>
          <Typography className="topCategoryText">Top Categories</Typography>
        </Box>
        <Box className="itemsMainBox" ref={topCategoriesRef}>
          {data &&
            data.length > 0 &&
            data.map((categoryItem, categoryIndex) => {
              return (
                <Box
                  key={"categoryItem" + categoryItem.id}
                  className="itemAndImageBox"
                  onMouseEnter={() => handleMouseEnter(categoryItem.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image src={HealthBeautyIcon} alt={categoryItem.name} />
                  <Typography className="topCategoriesItem">
                    {categoryItem.name}
                  </Typography>
                </Box>
              );
            })}
        </Box>
        <Box>
          <Typography className="viewAllCategoriesLink">
            View all Categories
          </Typography>
        </Box>
      </Box>
      <PopoverTopCategories
        popupVisible={popupVisible}
        currentCategory={currentCategory}
        onMouseLeave={() => setPopupVisible(false)}
      />
    </Box>
  );
};
export default TopCategories;
