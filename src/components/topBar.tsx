"use client";
import {JSX} from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  InputAdornment,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Home from "@/icons/home";
import AvatarIcon from "@/icons/avatar";
import BellIcon from "@/icons/bell";
import {usePathname} from "next/navigation";
import CreditCardPos from "@/icons/creditCardPos";
import CreditCardCheck from "@/icons/creditCardCheck";
import Breadcrumb from "./breadCrumbs";
const icons: {[key: string]: JSX.Element} = {
  "/dashboard": <Home />,
  "/card-profile": <CreditCardPos stroke="#000" />,
  "/card-profile/create-profile": <CreditCardPos stroke="#000" />,
  "/card-request": <CreditCardCheck stroke="#000" />,
  "/card-request/request-details": <CreditCardPos stroke="#000" />,
};
export default function TopBar() {
  const pathname = usePathname();

  const handleSearchItem = () => {
    // TODO: Implement search functionality
    console.log("Search item clicked");
  };
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{backgroundColor: "#fff", borderBottom: "1px solid #DEDEDF"}}
    >
      <Toolbar className="flex justify-between items-center">
        <Box className="flex gap-x-2 items-center">
          {icons[pathname]}
          <Breadcrumb />
        </Box>
        <Box className="flex justify-end items-center space-x-4">
          {pathname === "/dashboard" && (
            <FormControl sx={{width: "20ch"}}>
              <OutlinedInput
                id="search"
                size="small"
                className="!py-px !rounded-full"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="Search"
                      title="Search"
                      onClick={handleSearchItem}
                      edge="end"
                    >
                      <SearchIcon sx={{color: "black"}} />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Search"
              />
            </FormControl>
          )}

          <IconButton size="large">
            <BellIcon />
          </IconButton>

          <IconButton size="small">
            <Avatar alt="User" sx={{backgroundColor: "#F2F4F7"}}>
              <AvatarIcon />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
