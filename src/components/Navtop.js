"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import u from "../../public/u.png";

import { Menu, SupervisedUserCircleRounded } from "@mui/icons-material";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

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

  const [open, setOpen] = useState(false);

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

        <div className="bg-white w-full zero:block sm:block md:block lg:hidden xl:hidden xxl:hidden ">
          <div className=" p-4 ">
            <div className=" flex flex-row items-center justify-between shadow-xl rounded-2xl">
              <div className="flex flex-col p-4 ">
                <div>
                  <Image src={logo} alt="Logo" className="w-24" />
                </div>
                <div className="flex flex-row">
                  <h1 className="text-black text-lg font-bungee">
                    {"because it's for"}
                  </h1>
                  <Image src={u} alt="U Icon" className="w-6 ml-2 " />
                </div>
              </div>

              <div className="p-4 cursor-pointer" onClick={() => setOpen(true)}>
                <Menu className="text-primary" fontSize="large" />
              </div>
              {open && (
                <Drawer
                  className="p-4 bg-greyish"
                  anchor="right"
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <div className="p-4">
                    <h1 className="text-secondary font-bungee text-lg">Menu</h1>
                    <List>
                      {["Home", "About", "Contact"].map((text) => (
                        <ListItem key={text} onClick={() => setOpen(false)}>
                          <ListItemText primary={text} secondary={""} />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navtop;
