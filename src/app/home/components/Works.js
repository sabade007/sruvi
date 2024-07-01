import React, { useRef } from "react";
import { Container } from "@mui/material";
import { useInView } from "framer-motion";
import {
  Looks3,
  Looks4,
  Looks5,
  Looks6,
  LooksOne,
  LooksTwo,
} from "@mui/icons-material";
import startarrow from "../../../../public/startarrow.png";
import endarrow from "../../../../public/endarrow.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Works = () => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-full bg-white p-4"
    >
      <Container maxWidth="xl">
        <div className="flex flex-row justify-center items-center p-4">
          <div className="flex flex-row justify-center items-center">
            <div
              className=" flex flex-row justify-center items-center"
              ref={ref}
            >
              <img src={startarrow.src} alt="startarrow" className="w-24" />
              <div>
                <h1 className=" text-primary font-bungee tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl text-center">
                  Development to Deployment
                </h1>
                <h1 className="text-black font-bungee tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl text-center">
                  {inView && (
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Where Code Meets Destiny")
                          .start();
                      }}
                    />
                  )}
                </h1>
              </div>

              <img src={endarrow.src} alt="startarrow" className="w-24" />
            </div>
          </div>
        </div>
        <Container maxWidth="lg">
          <div>
            <div className=" mb-4 flex flex-col ">
              <div className=" w-11/12  grid grid-cols-3 gap-4 ">
                <div className="p-4 col-span-1 flex flex-col shadow-2xl  rounded flex h-full">
                  <div className="flex flex-row ">
                    <LooksOne className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Conceptualization & Ideation"}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      " Here, we brainstorm, ideate, and envision the software solution that will transform your vision into reality."
                    }
                  </p>
                </div>
                <div className="p-4 col-span-1 flex flex-col shadow-2xl rounded flex h-full">
                  <div className="flex flex-row ">
                    <Looks3 className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Design,Tech & Architecture"}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      "Our designers create intuitive interfaces, while architects design robust systems that stand the test of time."
                    }
                  </p>
                </div>
                <div className="p-4 col-span-1 flex flex-col shadow-2xl rounded flex h-full">
                  <div className="flex flex-row ">
                    <Looks5 className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Testing & Quality Assurance"}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      "Rigorous testing ensures a flawless user experience and robust functionality."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-11/12 gap-4 grid grid-cols-3">
              <div className="col-span-1 flex flex-col items-center">
                <hr className="w-1 h-4 bg-orange"></hr>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <hr className="w-1 h-4 bg-orange"></hr>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <hr className="w-1 h-4 bg-orange"></hr>
              </div>
            </div>

            <div className=" flex flex-col ">
              <hr className="w-full h-1 bg-orange"></hr>
            </div>

            <div className=" flex flex-col flex flex-col items-end">
              <div className="w-11/12 gap-4  grid grid-cols-3 ">
                <div className="col-span-1 flex flex-col items-center">
                  <hr className="w-1 h-4 bg-orange"></hr>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                  <hr className="w-1 h-4 bg-orange"></hr>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                  <hr className="w-1 h-4 bg-orange"></hr>
                </div>
              </div>
            </div>

            <div className=" mt-4 flex flex-col flex flex-col items-end">
              <div className=" w-11/12 grid grid-cols-3 gap-4 ">
                <div className="p-4 col-span-1 flex flex-col justify-start items-start shadow-2xl rounded flex h-full">
                  <div className="flex flex-row ">
                    <LooksTwo className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Requirement Gathering & Planning"}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      "We meticulously gather requirements, outline features, and create a roadmap for development."
                    }
                  </p>
                </div>
                <div className="p-4 col-span-1 flex flex-col shadow-2xl rounded flex h-full">
                  <div className="flex flex-row ">
                    <Looks4 className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Development & Crafting Code"}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      "Our developers write elegant, efficient code, building the foundation of your software."
                    }
                  </p>
                </div>
                <div className="p-4 col-span-1 flex flex-col shadow-2xl rounded flex h-full">
                  <div className="flex flex-row ">
                    <Looks6 className="w-8 h-8 text-orange" />
                    <h1 className="text-orange font-bungee tracking-wide lg:text-lg xl:text-xl xxl:text-2xl ml-2">
                      {"Deployment & Maintenance "}
                    </h1>
                  </div>
                  <p className="text-black font-fira text-justify">
                    {
                      "We deploy your software. Post-launch, we maintain, optimize, and evolve your software."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </motion.div>
  );
};

export default Works;
