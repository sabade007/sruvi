import { Container } from "@mui/material";
import React from "react";

import QuickWeb from "./QuickWeb";
import QuickMobile from "./QuickMobile";
import QuickDesktop from "./QuickDesktop";
import QuickCloud from "./QuickCloud";
import QuickBusiness from "./QuickBusiness";
import QuickDataBase from "./QuickDataBase";
import QuickSeo from "./QuickSeo";
import QuickDigitalMarketing from "./QuickDigitalMarketing";
import { DesignServicesRounded } from "@mui/icons-material";

const QuickAccess2 = () => {
  const NanoTechnologyIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      color={"#000000"}
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
    <div>
      {/* Desktop Code */}
      <div className="zero:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <Container maxWidth="xl" className="p-4">
          <div className="flex flex-col  bg-greyish p-4">
            <div className="bg-white p-4 w-full">
              <div className="flex flex-row items-center">
                <DesignServicesRounded
                  className="text-orange"
                  fontSize="large"
                />
                <h1 className="text-black text-2xl tracking-wide font-bungee ml-2">
                  {"Services & Technology"}
                </h1>
              </div>
              <h1 className="text-black text-md font-fira mt-2 text-justify">
                {
                  "At Sruvi Inc, we harness a diverse set of technologies to create robust and innovative software solutions. Lets explore the key categories and the technologies we excel in:"
                }
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

      {/* Mobile Code */}
      <div className="zero:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
        <Container maxWidth="xl" className="p-4">
          <div className="flex flex-col  bg-greyish p-2 rounded-lg">
            <div className="bg-white p-4 w-full rounded-lg">
              <div className="flex flex-row items-center">
                <DesignServicesRounded
                  className="text-orange"
                  fontSize="small"
                />
                <h1 className="text-black text-xl tracking-wide font-bungee ml-2">
                  {"Services"}
                </h1>
              </div>
              <h1 className="text-black text-sm font-fira  text-justify mt-2">
                {
                  "At Sruvi Inc, we harness a diverse set of technologies to create robust and innovative software solutions. Lets explore the key categories and the technologies we excel in:"
                }
              </h1>

              <div className="grid grid-cols-1">
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
    </div>
  );
};

export default QuickAccess2;
