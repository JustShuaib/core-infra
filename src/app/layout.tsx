"use client";
// import type {Metadata} from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import localFont from "next/font/local";
import {ThemeProvider} from "@mui/material";
import theme from "@/services/theme";
import TopBar from "@/components/topBar";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/en";
import {DataProvider} from "@/services/context";
import {Suspense} from "react";

dayjs.locale("en");

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DataProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <body className={`${satoshi.className} antialiased flex`}>
                <Sidebar />
                <div className="flex-1">
                  <TopBar />
                  {children}
                </div>
              </body>
            </Suspense>
          </DataProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  );
}
