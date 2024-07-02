"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import u from "../../public/u.png";

import {
  Close,
  ContactPage,
  DesignServicesRounded,
  HomeRounded,
  InfoRounded,
  Menu,
  Start,
  SupervisedUserCircleRounded,
} from "@mui/icons-material";

import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  iconButtonClasses,
} from "@mui/material";

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

  const DashboardSquare03Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M16 5C16 4.06812 16 3.60218 16.1522 3.23463C16.3552 2.74458 16.7446 2.35523 17.2346 2.15224C17.6022 2 18.0681 2 19 2C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5V9C22 9.93188 22 10.3978 21.8478 10.7654C21.6448 11.2554 21.2554 11.6448 20.7654 11.8478C20.3978 12 19.9319 12 19 12C18.0681 12 17.6022 12 17.2346 11.8478C16.7446 11.6448 16.3552 11.2554 16.1522 10.7654C16 10.3978 16 9.93188 16 9V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 19C16 18.0681 16 17.6022 16.1522 17.2346C16.3552 16.7446 16.7446 16.3552 17.2346 16.1522C17.6022 16 18.0681 16 19 16C19.9319 16 20.3978 16 20.7654 16.1522C21.2554 16.3552 21.6448 16.7446 21.8478 17.2346C22 17.6022 22 18.0681 22 19C22 19.9319 22 20.3978 21.8478 20.7654C21.6448 21.2554 21.2554 21.6448 20.7654 21.8478C20.3978 22 19.9319 22 19 22C18.0681 22 17.6022 22 17.2346 21.8478C16.7446 21.6448 16.3552 21.2554 16.1522 20.7654C16 20.3978 16 19.9319 16 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H8C9.88562 12 10.8284 12 11.4142 12.5858C12 13.1716 12 14.1144 12 16V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 5C2 4.06812 2 3.60218 2.15224 3.23463C2.35523 2.74458 2.74458 2.35523 3.23463 2.15224C3.60218 2 4.06812 2 5 2H9C9.93188 2 10.3978 2 10.7654 2.15224C11.2554 2.35523 11.6448 2.74458 11.8478 3.23463C12 3.60218 12 4.06812 12 5C12 5.93188 12 6.39782 11.8478 6.76537C11.6448 7.25542 11.2554 7.64477 10.7654 7.84776C10.3978 8 9.93188 8 9 8H5C4.06812 8 3.60218 8 3.23463 7.84776C2.74458 7.64477 2.35523 7.25542 2.15224 6.76537C2 6.39782 2 5.93188 2 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  const BloggerIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9577 11.4622V10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04341C13.5821 5.79972 11.833 6.01409 10.4788 6.01409C9.12474 6.01409 7.37562 5.79972 6.47521 7.04341C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

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
                  className="p-4 w-[40vw] "
                  anchor="right"
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <div className="p-4 bg-gradient-to-r from-blueblack to-slate-800 h-full">
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="text-orange  tracking-widest font-bungee ">
                        Hello there!
                      </h1>
                      <div>
                        <Close
                          className="text-orange"
                          fontSize="medium"
                          onClick={() => setOpen(false)}
                        />
                      </div>
                    </div>

                    <Divider className="mt-4" />

                    <List className="mt-0">
                      {[
                        ...[
                          {
                            text: "Quick Access",
                            route: "/",
                            icon: DashboardSquare03Icon,
                          },
                          { text: "Home", route: "/home", icon: HomeRounded },
                          {
                            text: "Getting Started",
                            route: "/gettingstarted",
                            icon: Start,
                          },

                          {
                            text: "Services",
                            route: "/services",
                            icon: DesignServicesRounded,
                          },
                          {
                            text: "About",
                            route: "/about",
                            icon: InfoRounded,
                          },
                          {
                            text: "Blog",
                            route: "/blog",
                            icon: BloggerIcon,
                          },
                          {
                            text: "Get in touch",
                            route: "/contact",
                            icon: ContactPage,
                          },
                        ].map(({ text, route, icon }) => (
                          <ListItem key={text} onClick={() => setOpen(false)}>
                            <ListItemButton href={route}>
                              <div className="w-full flex flex-row items-center justify-center">
                                <ListItemIcon sx={{ color: "white" }}>
                                  {React.createElement(icon)}
                                </ListItemIcon>
                                <ListItemText>
                                  <h1 className="text-white tracking-widest font-bungee">
                                    {text}
                                  </h1>
                                </ListItemText>
                              </div>
                            </ListItemButton>
                          </ListItem>
                        )),
                      ].map((text) => (
                        <ListItem
                          className="w-[40vw] p-0 bg-gradient-to-r from-blueblack to-slate-800 "
                          key={text}
                          onClick={() => setOpen(false)}
                        >
                          <ListItemText primary={text} />
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
