"use client";
import VariableWidth from "./components/shared/scrollable-tabs/ScrollableTabs";
import { Box } from "@mui/material";
import TopCategories from "./components/top-categories/TopCategories";
import MoreValueAdds from "./components/more-value-adds/MoreValueAdds";
import "../styles/homePage.scss";
import HomepageImagesCarousel from "./components/homepage-images-carousel/HomepageImagesCarousel";
import LookingForProductWantToGrowYourBusiness from "./components/looking-for-product-want-to-grow-your-business/LookingForProductWantToGrowYourBusiness";
import FeaturedProducts from "./components/features-products/FeaturedProducts";
import PostBuyRequirement from "./components/PostBuyRequirement/PostBuyRequirement";
import DataJson from "./components/data.json";
import { useEffect, useState } from "react";


const getTrendingCategories = (categories: any) => {

  const trendingSubcategories: any = [];
  categories.forEach((category: any) => {
    category.subcategories.forEach((subcategory: any) => {
      if (subcategory.trendingCategory) {
        trendingSubcategories.push(subcategory);
      }
    });
  });

  return trendingSubcategories
}
export default function Home() {
  const [data, setData] = useState<any>(null);

  const [trendingCategories, setTrendingCategories] = useState<any>(null);
  useEffect(() => {
    setData(DataJson);
  }, []);

  useEffect(() => {

    if(data && data.data && data.data.categories){
      setTrendingCategories(getTrendingCategories(data.data.categories));
    }
  }, [data]);

  return (
    <main>
      <Box className="container">
        <Box className="firstSection">
          <TopCategories
            data={
              data &&
              data.data &&
              data.data.categories
            }
          />
          <Box className="carouselLookingForAndMoreValue">
            <Box className="homepageCarouselAndLookingForMainBox">
              <HomepageImagesCarousel />
              <LookingForProductWantToGrowYourBusiness />
            </Box>
            <MoreValueAdds />
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
          <div style={{ marginBottom: "2rem" }}>
            <VariableWidth
              data={trendingCategories && trendingCategories.length > 0 ? trendingCategories : []}
              title="Trending Categories"
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <FeaturedProducts
              data={
                data &&
                data.data &&
                data.data.products &&
                data.data.products.featuredProducts
              }
            />
          </div>

          <div className="arriwals-trusted">
            <div>
              <VariableWidth
                data={
                  data &&
                  data.data &&
                  data.data.products &&
                  data.data.products.newArrivals
                }
                title="Trending Categories"
                isSmallCarousel="true"
              />
            </div>
            <div>
              <VariableWidth
                data={
                  data &&
                  data.data &&
                  data.data.products &&
                  data.data.products.tradeIndiaTrusted
                }
                title="Victorum Capital Trusted"
                isSmallCarousel="true"
              />
            </div>
          </div>
          <PostBuyRequirement />
        </div>
      </Box>
    </main>
  );
}
