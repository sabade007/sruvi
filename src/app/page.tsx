"use client";
import { motion, useInView } from "framer-motion";
import bg1 from "../../public/bg.png";
import Header from "../components/Header";
import QuickAccess from "../components/QuickAccess";
import QuickAccess2 from "../components/QuickAccess2";
import QuickAccess3 from "../components/QuickAccess3";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import React from "react";
import { HomeRounded } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  const Forward02Icon = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M21.8371 12.9178C21.5547 13.6884 20.7014 14.3047 18.9948 15.5372C16.6677 17.218 15.5041 18.0583 14.5312 17.9969C13.7882 17.9499 13.0976 17.6007 12.6223 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 12.6223 6.96846C13.0976 6.39933 13.7882 6.0501 14.5312 6.00315C15.5041 5.94167 16.6677 6.78203 18.9948 8.46275C20.7014 9.6953 21.5547 10.3116 21.8371 11.0822C22.0543 11.675 22.0543 12.325 21.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.8371 12.9178C11.5547 13.6884 10.7014 14.3047 8.99482 15.5372C6.66769 17.218 5.50413 18.0583 4.5312 17.9969C3.78818 17.9499 3.09758 17.6007 2.62232 17.0315C2 16.2863 2 14.8575 2 12C2 9.14246 2 7.71369 2.62232 6.96846C3.09758 6.39933 3.78818 6.0501 4.5312 6.00315C5.50413 5.94167 6.66769 6.78203 8.99482 8.46275C10.7014 9.6953 11.5547 10.3116 11.8371 11.0822C12.0543 11.675 12.0543 12.325 11.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  const headerRef = useRef(null);
  const inview = useInView(headerRef);

  return (
    <div
      className="relative h-screen dark:bg-grey overflow-y-auto"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div ref={headerRef}>
        <Header />
      </motion.div>

      <Link href="/home">
        <motion.div
          initial="hidden"
          className="zero:hidden sm:hidden md:hidden lg:block xl:block  cursor-pointer "
          style={{
            position: "fixed",
            top: "0px",
            left: "40%",
            zIndex: "999",
            display: inview ? "none" : "block",
          }}
        >
          <div className="flex justify-center items-center flex-row bg-blueblack p-2 rounded">
            <HomeRounded style={{ color: "#ffffff" }} />
            <h1 className="text-white  text-lg font-bungee mr-2 ml-2">
              Get to Home Page
            </h1>
            <Forward02Icon />
          </div>
        </motion.div>
      </Link>
      <QuickAccess />
      <QuickAccess2 />
      <QuickAccess3 />
      <Footer />
    </div>
  );
}
