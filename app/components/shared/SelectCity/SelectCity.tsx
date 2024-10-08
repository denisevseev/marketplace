"use client";
import "./SelectCity.scss";
import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCountryData } from "@/app/hooks/useCountryData";

const containsText = (text: any, searchText: any) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

export default function SelectCity({ selectedOption, setSelectedOption }: any) {
  const { data: countryData }: any = useCountryData();

  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(countryData || []);

  useEffect(() => {
    if (searchText) {
      const filtered =
        countryData?.filter((option: any) =>
          containsText(option.fallback_name, searchText)
        ) || [];
      setFilteredOptions([
        { id: "all", fallback_name: "All Regions" },
        ...filtered,
      ]);
    } else {
      setFilteredOptions([
        { id: "all", fallback_name: "All Regions" },
        ...(countryData ?? []),
      ]);
    }
  }, [searchText, countryData]);

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedOption(savedCountry);
    }
  }, []);

  const handleSelectionChange = (event: any) => {
    const { value } = event.target;
    setSelectedOption(value);
    localStorage.setItem("selectedCountry", value);
    window.location.reload();
  };

  return (
    <Box>
      <FormControl>
        <div className="select-container">
          <LocationOnIcon sx={{ color: "rgb(129 149 165)" }} />
          <Select
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{ autoFocus: false }}
            labelId="search-select-label"
            id="search-select"
            value={selectedOption}
            label="Options"
            onChange={handleSelectionChange}
            onClose={() => setSearchText("")}
            // This prevents rendering empty string in Select's value
            // if search text would exclude currently selected option.
            renderValue={() => selectedOption}
          >
            {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
            <ListSubheader>
              <TextField
                size="small"
                // Autofocus on textfield
                autoFocus
                placeholder="Type to search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== "Escape") {
                    // Prevents autoselecting item while typing (default Select behaviour)
                    e.stopPropagation();
                  }
                }}
              />
            </ListSubheader>
            {filteredOptions?.map((option: any, i: number) => (
              <MenuItem key={i} value={option.fallback_name}>
                <div className="select-option">
                  <LocationOnIcon
                    sx={{ color: "rgb(129 149 165)", marginRight: "16px" }}
                  />
                  <div>{option.fallback_name}</div>
                </div>
              </MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
    </Box>
  );
}
