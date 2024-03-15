"use client";
import VariableWidth from "./components/shared/ScrollableTabs/ScrollableTabs";
import { Box } from "@mui/material";
import TopCategories from "./components/TopCategories/TopCategories";
import "../styles/HomePage.scss";
import PostBuyRequirement from "./components/PostBuyRequirement/PostBuyRequirement";
import DataJson from "./components/data.json";
import { useEffect, useRef, useState } from "react";
import DownloadOurApp from "./components/DownloadOurApp/DownloadOurApp";
import OurServices from "./components/OurServices/OurServices";
import TopCategoriesSlider from "./components/TopCategories/TopCategoriesSlider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import HomepageImagesCarousel from "./components/HomepageImagesCarousel/HomepageImagesCarousel";
import ProductGrow from "./components/ProductGrow/ProductGrow";
import MoreValueAdds from "./components/MoreValueAdds/MoreValueAdds";
import { useMarketData } from "./hooks/useMarketData";
import {
  getFilteredProducts,
  getProductsSortedById,
  getRandomProducts,
  processApiResponse,
} from "@/api/helper/dataFilter";
import TopCategoriesLinks from "./components/shared/PopularLinks/TopCategoriesLinks";
import PopularProductsLink from "./components/shared/PopularLinks/PopularProductsLinks";
import { useCountryData } from "./hooks/useCountryData";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [newArrivals, setNewArrivals] = useState<any>([]);
  const [tradingTrusted, setTradingTrusted] = useState<any>([]);
  const [latestTrands, setLatestTrands] = useState<any>([]);
  const [categories, setCategories] = useState<any>(null);
  const { data: marketData, isLoading } = useMarketData();
  // const { data: countryData } = useCountryData();
  const postBuyRequirementRef = useRef<HTMLDivElement>(null);


  const scrollToPostBuyRequirement = () => {
    if (postBuyRequirementRef.current) {
      postBuyRequirementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      setCategories(formated);
      setFeaturedProducts(getRandomProducts(formated, 10));
      setNewArrivals(getProductsSortedById(formated, 10));
      setLatestTrands(getFilteredProducts(formated, 10, ["description"]));
      setTradingTrusted(
        getFilteredProducts(formated, 10, [
          "description",
          "quantity",
          "manufacturerName",
          "currency",
          "productPrice",
        ])
      );
    }
  }, [marketData]);

  useEffect(() => {
    setData(DataJson);
    //handleMarketData();
  }, []);

  return (
    <main>
      <Box className="container">
        <Box className="firstSection">
          <TopCategories data={categories} />
          <Box className="carouselLookingForAndMoreValue">
            <Box className="homepageCarouselAndLookingForMainBox">
              <HomepageImagesCarousel />
              <ProductGrow scrollToPostBuyRequirement={scrollToPostBuyRequirement}/>
            </Box>
            <MoreValueAdds />
            <TopCategoriesSlider data={categories} />
          </Box>
        </Box>
        <div
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          <div className="mb-2rem">
            <VariableWidth
              data={latestTrands}
              title="Latest Trends"
              //  isUpcomingTradeshows="false"
              // isSmallCarousel="true"
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <FeaturedProducts data={featuredProducts} />
          </div>

          <div className="arriwals-trusted">
            <div>
              <VariableWidth
                data={newArrivals}
                title="New in Stock"
                isSmallCarousel="true"
              />
            </div>
            <div>
              <VariableWidth
                data={tradingTrusted}
                title="Victorum Trading Trusted"
                isSmallCarousel="true"
              />
            </div>
          </div>
          <div ref={postBuyRequirementRef}>
          <PostBuyRequirement />
          </div>
        </div>
        <OurServices />
        <DownloadOurApp />
        <TopCategoriesLinks data={categories} />
        <PopularProductsLink data={tradingTrusted} />
      </Box>
    </main>
  );
}
