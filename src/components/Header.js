import React from "react";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import u from "../../public/u.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "next/link";

const Header = ({}) => {
  return (
    <div>
      <div className="  zero:hidden sm:hidden md:hidden lg:block xl:block  w-full">
        <div className="shadow-2xl p-4 bg-white bg-opacity-100 ">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex flex-col justify-center items-center">
              <motion.div>
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2.5 }}
                  src={logo.src}
                  className="xl:w-36 lg:w-28 "
                  alt="Logo"
                />
                <div className="flex flex-row items-center">
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, delay: 0.5 }}
                    className="text-black text-lg    font-bungee"
                  >
                    because its for
                  </motion.h1>
                  <motion.img
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: 2.5 }}
                    src={u.src}
                    className="h-5 ml-2"
                    alt="U Icon"
                  />
                </div>
              </motion.div>
            </div>
            <div className="col-span-3 flex flex-col justify-end">
              <div className="flex flex-col grid grid-cols-5 justify-center items-center text-center ">
                <Link href="/homeaa">
                  <div className="col-span-1 flex flex-row justify-center items-center hover:scale-110">
                    <HomeIcon
                      style={{ marginRight: 5 }}
                      fontSize="medium"
                      className="text-primary  "
                    />
                    <h1 className="text-secondary lg:text-lg xl:text-xl text-xl font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                      Home
                    </h1>
                  </div>
                </Link>

                <Link href="/about">
                  <div className="col-span-1 flex flex-row justify-center items-center hover:scale-110">
                    <InfoIcon
                      style={{ marginRight: 5 }}
                      fontSize="medium"
                      className="text-primary "
                    />
                    <h1 className="text-secondary lg:text-lg xl:text-xl text-xl font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                      About
                    </h1>
                  </div>
                </Link>
                <Link href="/services">
                  <div className="col-span-1 flex flex-row justify-center items-center hover:scale-110 ">
                    <DesignServicesIcon
                      style={{ marginRight: 5 }}
                      fontSize="medium"
                      className="text-primary "
                    />
                    <h1 className="text-secondary lg:text-lg xl:text-xl text-xl font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                      Services
                    </h1>
                  </div>
                </Link>
                <Link href="/tech">
                  <div className="col-span-1 flex flex-row justify-center items-center hover:scale-110">
                    <IntegrationInstructionsIcon
                      style={{ marginRight: 5 }}
                      fontSize="medium"
                      className="text-primary "
                    />
                    <h1 className="text-secondary lg:text-lg xl:text-xl text-xl font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110 ">
                      Tech
                    </h1>
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="col-span-1 flex flex-row justify-center items-center hover:scale-110">
                    <ContactSupportIcon
                      style={{ marginRight: 5 }}
                      fontSize="medium"
                      className="text-primary "
                    />
                    <h1 className="text-secondary lg:text-lg  xl:text-xltext-xl font-bungee hover:text-primary hover:cursor-pointer hover:underline hover:scale-110">
                      {" Contact"}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 zero:block sm:block md:block lg:hidden xl:hidden">
        <div className="shadow-2xl p-4 bg-white bg-opacity-80 ">
          <div className="flex grid grid-cols-4">
            <div className="col-span-3 flex flex-col justify-center ms-4">
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                src={logo.src}
                className="zero:w-24
                 sm:w-24 md:w-24"
                alt="Logo"
              />
              <div className="flex flex-row items-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.5, delay: 0.5 }}
                  className="text-black text-lg  font-900  font-bungee"
                >
                  {"because it's for"}
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 2.5 }}
                  src={u.src}
                  className="h-5 ml-2"
                  alt="U Icon"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-end">
              <MenuOpenIcon style={{ fontSize: 30, color: "black" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
