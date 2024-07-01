import React from "react";
import { Container } from "@mui/material";

const Showoff = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blueblack to-slate-950  shadow-2xl p-4 ">
      <Container maxWidth="xl">
        <div className="flex  grid grid-cols-5  h-full ">
          <div className="col-span-1  flex flex-row justify-center items-center h-full">
            <div className=" flex w-4/5 flex-col justify-center items-center h-full bg-slate-800 p-4 rounded-2xl">
              <h1 className="text-white font-bungee text-3xl">30+</h1>
              <h1 className="text-white text-center">Projects Completed</h1>
            </div>
          </div>
          <div className="col-span-1  flex flex-row justify-center items-center h-full">
            <div className=" flex w-4/5 flex-col justify-center h-full items-center bg-slate-800 p-4 rounded-2xl">
              <h1 className="text-white font-bungee text-3xl">10+</h1>
              <h1 className="text-white text-center">Ongoing Projects</h1>
            </div>
          </div>
          <div className="col-span-1  flex flex-row justify-center items-center h-full">
            <div className=" flex w-4/5 flex-col justify-center h-full items-center bg-slate-800 p-4 rounded-2xl">
              <h1 className="text-white font-bungee text-3xl">15+</h1>
              <h1 className="text-white text-center">Developers</h1>
            </div>
          </div>
          <div className="col-span-1  flex flex-row justify-center items-center h-full">
            <div className=" flex w-4/5 flex-col justify-center h-full items-center bg-slate-800 p-4 rounded-2xl">
              <h1 className="text-white font-bungee text-3xl">100+</h1>
              <h1 className="text-white text-center">Consultants</h1>
            </div>
          </div>
          <div className="col-span-1  flex flex-row justify-center items-center h-full">
            <div className=" flex w-4/5 flex-col justify-center h-full items-center bg-slate-800 p-4 rounded-2xl">
              <h1 className="text-white font-bungee text-3xl">200+</h1>
              <h1 className="text-white text-center">Clients</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Showoff;
