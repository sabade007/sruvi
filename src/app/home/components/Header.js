import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur transition-all duration-300 ease-in-out bg-transparent">
      <div className="  zero:hidden sm:hidden md:hidden lg:block xl:block  w-full">
        <div className=" p-4   ">
          <div className="grid grid-cols-5">
            <div className="col-span-1 flex flex-col ">
              <motion.div>
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
                    className="text-black text-lg    font-bungee"
                  >
                    because its for
                  </motion.h1>
                  <motion.img
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.5, delay: 1 }}
                    src={u.src}
                    className="h-5 ml-2"
                    alt="U Icon"
                    onAnimationComplete={handleLogoAnimComplete}
                  />
                </div>
              </motion.div>
            </div>
            <div className="col-span-4 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: logoAnimComplete ? 1 : 0 }}
                onAnimationComplete={handleheaderAnimComplete}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
