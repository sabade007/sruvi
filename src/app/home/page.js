"use client";
import React, { useState } from "react";

import Headerhome from "./components/Headerhome";
import Approach from "./components/Approach";
import Works from "./components/Works";
import Services from "./components/Services";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import logo from "../../../public/logo.png";
import u from "../../../public/u.png";
import ReactTypingEffect from "react-typing-effect";

import Link from "next/link";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Alert, Button } from "@mui/material";
import ShowContent from "./components/ShowContent";
import Showoff from "./components/Showoff";
import Navtop from "@/components/Navtop";
import Navbar from "@/components/Navbar";

const page = () => {
  const [headerAnimationComplete, setheaderAnimationComplete] = useState(false);
  const handleheaderAnimComplete = () => {
    setheaderAnimationComplete(true);
  };

  const [showContent, setShowContent] = React.useState(false);
  const handlehover = () => {
    setShowContent(true);
  };
  const handleleave = () => {
    setShowContent(false);
  };

  const Login03Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.9871 10.2401 20.8194 9.05112 20.484C6.18961 19.6769 3.70555 18.3204 3.10956 15.2816C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27704 3.10956 8.71845C3.70555 5.67963 6.18961 4.32314 9.05112 3.516C10.2401 3.18062 10.8346 3.01293 11.3156 3.00116C13.3831 2.95058 14.9264 4.52305 15 6.37499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 12H21M10 12C10 11.2998 11.9943 9.99153 12.5 9.5M10 12C10 12.7002 11.9943 14.0085 12.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="relative bg-primary dark:bg-greyish  zero:hidden sm:hidden md:hidden lg:block xl:block">
      {/* <div className="sticky top-0 z-50 backdrop-blur transition-all duration-300 ease-in-out bg-white bg-opacity-50">
        <div className="  zero:hidden sm:hidden md:hidden lg:block xl:block  w-full">
          <div className=" p-4  pb-0 ">
            <div className="grid grid-cols-10">
              <div className="col-span-4 flex flex-col ">
                <motion.div>
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    src={logo.src}
                    className="xl:w-28 lg:w-20 "
                    alt="Logo"
                  />
                  <div className="flex flex-row items-center">
                    <motion.h1
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-black lg:text-md xl:text-lg xxl:text-lg    font-bungee"
                    >
                      because its for
                    </motion.h1>
                    <motion.img
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.5, delay: 1 }}
                      src={u.src}
                      className="h-5 ml-2"
                      alt="U Icon"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="col-span-6 flex flex-col justify-end">
                <div className="flex grid grid-rows-2">
                  <div className="flex row-span-1 mb-2">
                    <div className="flex flex-col w-full justify-end">
                      <Link href="/login">
                        <div className="  flex flex-row justify-end items-center ">
                          <Button
                            style={{
                              backgroundColor: "#48c43c",
                              fontSize: "small",
                            }}
                            variant="contained"
                          >
                            <Login03Icon />
                            <h1 className="text-white ml-2">Login / Signup</h1>
                          </Button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex row-span-1">
                    <div className="flex flex-col grid grid-cols-4 w-full  text-center ">
                      <Link href="/homeaa">
                        <div className="col-span-1 flex flex-row justify-end items-center hover:scale-110">
                          <HomeIcon
                            style={{ marginRight: 5 }}
                            fontSize="small"
                            className="text-primary  "
                          />
                          <h1 className="text-secondary lg:text-md xl:text-lg xxl:text-lg font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                            Home
                          </h1>
                        </div>
                      </Link>

                      <Link href="/about">
                        <div className="col-span-1 flex flex-row justify-end items-center hover:scale-110">
                          <InfoIcon
                            style={{ marginRight: 5 }}
                            fontSize="small"
                            className="text-primary "
                          />
                          <h1 className="text-secondary lg:text-md xl:text-lg xxl:text-lg font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                            About
                          </h1>
                        </div>
                      </Link>
                      <Link href="/services">
                        <div className="col-span-1 flex flex-row justify-end items-center hover:scale-110 ">
                          <DesignServicesIcon
                            style={{ marginRight: 5 }}
                            fontSize="small"
                            className="text-primary "
                          />
                          <h1 className="text-secondary lg:text-md xl:text-lg xxl:text-lg font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                            Services
                          </h1>
                        </div>
                      </Link>

                      <Link href="/contact">
                        <div className="col-span-1 flex flex-row justify-end items-center hover:scale-110">
                          <ContactSupportIcon
                            style={{ marginRight: 5 }}
                            fontSize="small"
                            className="text-primary "
                          />
                          <h1 className="text-secondary lg:text-md xl:text-lg xxl:text-lg font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110">
                            {" Contact"}
                          </h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Navtop />
      <Navbar />
      <Headerhome />
      <Showoff />
      <Works />
      <Services />
      <Approach />
    </div>
  );
};

export default page;
