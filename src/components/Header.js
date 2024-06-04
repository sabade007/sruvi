import React from "react";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import u from "../../public/u.png";

const Header = () => {
  return (
    <div>
      <div className="p-4 zero:hidden sm:hidden md:hidden lg:block xl:block">
        <div className="shadow-2xl p-4 bg-white bg-opacity-80 ">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex flex-col justify-center items-center">
              <motion.div>
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2.5 }}
                  src={logo.src}
                  className="xl:w-32 lg:w-24 "
                  alt="Logo"
                />
                <div className="flex flex-row items-center">
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, delay: 0.5 }}
                    className="text-black text-lg  font-900  font-fira"
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
                <div>
                  <h1 className="text-secondary font-fira ">Home</h1>
                </div>
                <div>
                  <h1 className="text-secondary font-fira ">About</h1>
                </div>
                <div>
                  <h1 className="text-secondary font-fira ">Services</h1>
                </div>
                <div>
                  <h1 className="text-secondary font-fira ">Technology</h1>
                </div>
                <div>
                  <h1 className="text-secondary font-fira ">Contact</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:block md:block lg:hidden xl:hidden">
        <div className="shadow-2xl p-4 bg-white bg-opacity-80 ">
          <div className="flex grid grid-cols-3">
            <div className="col-span-3 flex flex-col justify-center items-center">
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5 }}
                src={logo.src}
                className="zero:w-10 sm:w-20 md:w-20"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
