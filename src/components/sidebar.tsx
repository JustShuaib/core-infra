"use client";
import Image from "next/image";
import Link from "next/link";
import {Box, Drawer, Toolbar, List, ListItem, Button} from "@mui/material";
import Home from "@/icons/home";
import CreditCardPos from "@/icons/creditCardPos";
import CreditCardAccept from "@/icons/creditCardAccept";
import CreditCard from "@/icons/creditCard";
import User from "@/icons/user";
import LogOut from "@/icons/logOut";
import Map from "@/icons/map";
import Layers from "@/icons/layers";
import ListIcon from "@/icons/list";
import ChartBarLine from "@/icons/chartBarLine";
import CardSetting from "@/icons/cardSetting";
import UserGroup from "@/icons/userGroup";
import UserShield from "@/icons/userShield";
import Building from "@/icons/building";
import {usePathname} from "next/navigation";

const drawerWidth = 220;

const menuItems = [
  {
    text: "Branches",
    href: "/branches",
    icon: <Building />,
    activeIcon: <Building />,
  },
  {
    text: "Roles",
    href: "/roles",
    icon: <UserShield />,
    activeIcon: <UserShield />,
  },
  {
    text: "Users",
    href: "/users",
    icon: <UserGroup />,
    activeIcon: <UserGroup />,
  },
  {
    text: "Cards Scheme",
    href: "/card-scheme",
    icon: <CardSetting />,
    activeIcon: <CardSetting />,
  },
  {
    text: "Card Profile",
    href: "/card-profile",
    icon: <CreditCardPos stroke="#808080" />,
    activeIcon: <CreditCardPos stroke="#014DAF" />,
  },
  {
    text: "Card Request",
    href: "/card-request",
    icon: <CreditCardAccept stroke="#808080" />,
    activeIcon: <CreditCardAccept stroke="#014DAF" />,
  },
  {text: "Stocks", href: "/stocks", icon: <ChartBarLine />},
  {
    text: "Cards",
    href: "/cards",
    icon: <CreditCard stroke="#808080" />,
    activeIcon: <CreditCard stroke="#014DAF" />,
  },
  {
    text: "Authorization List",
    href: "/authorization-list",
    icon: <ListIcon />,
    activeIcon: <ListIcon />,
  },
  {
    text: "Authorization Queue",
    href: "/authorization-queue",
    icon: <Layers />,
    activeIcon: <Layers />,
  },
  {text: "Trail", href: "/trail", icon: <Map />, activeIcon: <Map />},
  {text: "Account", href: "/account", icon: <User />, activeIcon: <User />},
];

const Sidebar = () => {
  const pathname = usePathname().split("/")[1];

  return (
    <Box sx={{display: "flex"}}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        <Toolbar className="flex items-center justify-center my-2">
          <Image src="/logo.png" alt="Logo" width={100} height={40} priority />
        </Toolbar>

        <List>
          <span className="flex flex-col px-2 gap-y-3">
            <Link
              href="/dashboard"
              className={`flex items-center gap-x-2 px-4 py-2 rounded-lg ${
                pathname === "dashboard"
                  ? "border bg-[#F6F6F6] text-[#014DAF] border-[#E2E2E2]"
                  : ""
              }`}
            >
              <Home stroke={pathname === "dashboard" ? "#014DAF" : ""} />
              <span>Dashboard</span>
            </Link>
          </span>

          <ListItem className="uppercase text-[#7E8B9C] text-xs">
            Main Menu
          </ListItem>
          <span className="flex flex-col px-2 gap-y-3">
            {menuItems.map((item) => {
              const formattedHref = item.href.split("/")[1];
              const isActive = formattedHref === pathname;
              return (
                <Link
                  key={item.text}
                  href={item.href}
                  className={`flex items-center gap-x-2 px-4 py-2 rounded-lg ${
                    isActive
                      ? "border bg-[#F6F6F6] text-[#014DAF] border-[#E2E2E2]"
                      : ""
                  }`}
                >
                  <span> {isActive ? item.activeIcon : item.icon}</span>
                  <span>{item.text}</span>
                </Link>
              );
            })}
          </span>
        </List>

        <Box sx={{p: 2}}>
          <Button variant="text" startIcon={<LogOut />} sx={{color: "#121212"}}>
            Logout
          </Button>
        </Box>

        <div>
          <p className="uppercase text-[#808080] font-medium text-sm pl-6">
            Powered by
          </p>
          <Toolbar className="flex items-center justify-center my-2">
            <Image
              src="/company-logo.png"
              alt="Logo"
              width={100}
              height={40}
              priority
            />
          </Toolbar>
        </div>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
