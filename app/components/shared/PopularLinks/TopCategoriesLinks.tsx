"use client";
import "./PopularLinks.scss";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface TopCategoriesLinksProps {
  data: any[];
}

const TopCategoriesLinks: React.FC<TopCategoriesLinksProps> = ({ data }) => {
  const router = useRouter();

  const handleLinkClick = (categorySlug: string) => {
    router.push(`/category/${categorySlug}`);
  };

  return (
    <Box>
      <Box className="popularLinksMainBox">
        <Box>
          <Typography className="titleText">Product Categories</Typography>
        </Box>
        <Box>
          {data &&
            data.map((link: any, index: any) => (
              <Button
                key={index}
                className="linksButton"
                onClick={() => handleLinkClick(link.categorySlug)}
              >
                {link.fallback_name}
              </Button>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TopCategoriesLinks;
