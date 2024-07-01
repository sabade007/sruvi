"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import u from "../../public/u.png";

import { SupervisedUserCircleRounded } from "@mui/icons-material";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";

const Navtop = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      setShow(false);
      return;
    }
  }, [user]);

  return (
    <div>
      {/* {show && ( */}
      <div>
        {/* Desktop code */}

        <div className="bg-white w-full zero:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
          <div className="flex flex-row items-center justify-between p-4">
            <div>
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
                  className="text-black text-lg   font-bungee"
                >
                  {"because it's for"}
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
            </div>

            <div>
              {!user ? (
                <div
                  className="flex flex-row items-center justify-center"
                  onClick={handleGoogleSignIn}
                >
                  <h1 className="text-secondary font-bungee text-lg mr-2">
                    Login/Signup
                  </h1>
                  <SupervisedUserCircleRounded
                    className="text-primary"
                    fontSize="large"
                  />
                </div>
              ) : (
                <div onClick={handleSignOut} className="cursor-pointer">
                  <p className="text-secondary font-bungee">logOut</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile code */}

        <div className="bg-white w-full zero:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center w-full">
              <Image src={logo} className="w-24" alt="Logo" />
              <div className="flex flex-row items-center w-full">
                <h1 className="text-black text-lg font-bungee text-center">
                  {"because it's for"}
                </h1>
                <img src={u} className="h-5 ml-2" alt="U Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navtop;
