import { Container } from "@mui/material";
import React from "react";

import QuickWeb from "../components/QuickWeb";
import QuickMobile from "../components/QuickMobile";
import QuickDesktop from "../components/QuickDesktop";
import QuickCloud from "../components/QuickCloud";
import QuickBusiness from "../components/QuickBusiness";
import QuickDataBase from "../components/QuickDataBase";
import QuickSeo from "../components/QuickSeo";
import QuickDigitalMarketing from "../components/QuickDigitalMarketing";

const QuickAccess2 = () => {
  const NanoTechnologyIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      color={"#48C43C"}
      fill={"none"}
      {...props}
    >
      <path
        d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="3.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="3.5"
        cy="7.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="20.5"
        cy="7.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="20.5"
        cy="16.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="3.5"
        cy="16.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="zero:hidden sm:hidden md:hidden lg:block xl:block">
      <Container maxWidth="xl" className="p-4">
        <div className="flex flex-col  bg-greyish p-4">
          <div className="bg-white p-4 w-full">
            <div className="flex flex-row items-center">
              <NanoTechnologyIcon />
              <h1 className="text-black text-xl font-bungee ml-2">
                Services & Technology
              </h1>
            </div>
            <h1 className="text-black text-md font-fira ml-12 text-justify">
              At Sruvi Inc, we harness a diverse set of technologies to create
              robust and innovative software solutions. Lets explore the key
              categories and the technologies we excel in:
            </h1>

            <div className="grid grid-cols-2">
              <div className="col-span-1 h-full">
                <QuickWeb />
              </div>
              <div className="col-span-1 h-full">
                <QuickMobile />
              </div>
              <div className="col-span-1 h-full">
                <QuickDesktop />
              </div>
              <div className="col-span-1 h-full">
                <QuickCloud />
              </div>
              <div className="col-span-1 h-full">
                <QuickDataBase />
              </div>
              <div className="col-span-1 h-full">
                <QuickSeo />
              </div>
              <div className="col-span-1 h-full">
                <QuickDigitalMarketing />
              </div>
              <div className="col-span-1 h-full">
                <QuickBusiness />
              </div>
            </div>
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};

export default QuickAccess2;
