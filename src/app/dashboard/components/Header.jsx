"use client";

import { AccountBox, CloseRounded } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";

const Header = () => {
  {
    /* A temporary state variable to hold the state of the drawer */
  }
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full ">
      <div className="w-full shadow-xl flex flex-row justify-between items-center  h-[5vh]">
        <div className="flex flex-row items-center">
          <MenuIcon
            fontSize="large"
            className="text-orange ml-4"
            onClick={() => setOpen(true)}
          />
          <h1 className="text-lg font-bungee text-black ml-2">My Dashboard</h1>
        </div>
        <div className="flex flex-row items-center">
          <h1 className="text-lg font-bungee text-black mr-2">
            Hi! Srikanth Sabade
          </h1>
          <AccountBox fontSize="large" className="text-orange mr-4" />
        </div>
      </div>

      <div
        className={`${
          open
            ? "lg:w-[25vw] xl:w-[20vw] xxl:w-[15vw] bg-opacity-80  bg-greyish absolute bottom-0 left-0 h-[95vh] "
            : "hidden"
        }`}
      >
        <div className="w-full flex flex-row justify-end items-center p-4">
          <CloseRounded
            className="text-orange"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
