"use client";

import React from "react";
import Lottie from "lottie-react";
import rocket from "../../../../public/lottie/rocket.json";
import { Button } from "@mui/material";
import GetForm from "./components/GetForm";

const Page = () => {
  return (
    <div className="zero:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
      <div className="w-full flex flex-col justify-center items-center bg-greyish  h-screen ">
        <div className="absolute top-0 right-0 p-4">
          <Button variant="contained" className="bg-orange">
            <h1 className="text-white font-bungee">Home</h1>
          </Button>
        </div>

        <div className="bg-greyish rounded-2xl w-3/5 shadow-2xl p-2 ">
          <div className=" bg-white rounded-2xl w-full">
            <div className="flex flex-row xl:p-4 xxl:p-4">
              <Lottie animationData={rocket} loop={true} className="w-10 " />
              <div>
                <h1 className="text-orange font-bungee lg:text-xl xl:text-2xl xxl:text-3xl">
                  Getting Started
                </h1>
                <h1 className="text-primary font-bungee lg:text-lg xl:text-xl xxl:text-2xl">
                  Thank you for choosing Sruvi Inc.
                </h1>
              </div>
            </div>

            <div className="w-full  p-4">
              <GetForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
