import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import abcd from "../../../../public/lottie/landingAnimation.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import bg1 from "../../../../public/bg.png";
import rocket from "../../../../public/lottie/rocket.json";
import { Button, Container } from "@mui/material";

const Headerhome = () => {
  const headerRef = useRef(null);
  const inview = useInView(headerRef);

  const [logoAnimComplete, setLogoAnimComplete] = useState(false);
  const [headerAnimComplete, setheaderAnimComplete] = useState(false);

  const handleLogoAnimComplete = () => {
    setLogoAnimComplete(true);
  };
  const handleheaderAnimComplete = () => {
    setheaderAnimComplete(true);
  };

  return (
    <div
      className="flex flex-col "
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 flex"
        >
          <div className="col-span-1 h-full">
            <div className="h-full w-full flex flex-col justify-center p-6">
              <div>
                <h1 className="text-black lg:text-2xl xl:text-4xl xxl:text-5xl font-bungee">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Crafting Cutting-Edge Code, Cultivating  ")

                        .typeString(
                          "<span style='color:#48c43c' >Innovation.</span>"
                        )

                        .pauseFor(2000)
                        .deleteChars(11)
                        .typeString(
                          "<span style='color:#FF812B' >Success.</span>"
                        )
                        .pauseFor(2000)
                        .deleteChars(8)
                        .typeString(
                          "<span style='color:#48c43c' >Solutions.</span>"
                        )
                        .pauseFor(2000)
                        .deleteChars(10)
                        .typeString(
                          "<span style='color:#FF812B' >Dreams.</span>"
                        )

                        .start();
                    }}
                  />
                </h1>
              </div>
              <div className="">
                <div className="flex flex-row items-center w-full">
                  <h1 className="text-black lg:text-xl xl:text-2xl xxl:text-3xl font-bungee text-justify mr-4">
                    <span>{"Embark on the Code Quest: Your"}</span>
                    <span className="text-primary">
                      {" Software Development "}
                    </span>
                    <span>{"Odyssey Begins Here!"}</span>
                  </h1>
                  <Lottie
                    animationData={rocket}
                    loop={true}
                    className="w-2/5 "
                  />
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FF812B" }}
                  onClick={() =>
                    (window.location.href = "/home/gettingstarted")
                  }
                >
                  <h1 className="text-white font-bungee tracking-widest">
                    Get Started
                  </h1>
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-center items-center h-full">
            <Lottie animationData={abcd} loop={0} className="w-5/5 h-full" />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Headerhome;
