import { Container } from "@mui/material";
import React, { useRef } from "react";
import startarrow from "../../../../public/startarrow.png";
import endarrow from "../../../../public/endarrow.png";
import Typewriter from "typewriter-effect";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Approach = () => {
  const headerRef = useRef(null);
  const inview = useInView(headerRef, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blueblack to-slate-950  "
    >
      <Container maxWidth="xl">
        <div className=" p-4 flex flex-col justify-center items-center">
          <div
            className=" flex flex-row justify-center items-center"
            ref={headerRef}
          >
            <img src={startarrow.src} alt="startarrow" className="w-24" />
            <div>
              <h1 className=" text-primary font-bungee tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl text-center">
                Development and Design approach:
              </h1>
              <h1 className="text-white font-bungee tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl ">
                {inview && (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Blueprints to Bytes: Our Craft in Creation"
                        )
                        .start();
                    }}
                  />
                )}
              </h1>
            </div>

            <img src={endarrow.src} alt="startarrow" className="w-24" />
          </div>
        </div>

        <div className="p-4">
          <div className="p-4 flex h-full grid grid-cols-3 gap-8 mb-5">
            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  User-Centric Design:
                </h1>
                <p className="text-white font-fira text-justify">
                  We prioritize the end-user experience in every line of code
                  and design element, ensuring intuitive and engaging
                  interactions.
                </p>
              </div>
            </div>

            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  {" Agile Methodology:"}
                </h1>
                <p className="text-white font-fira text-justify">
                  {
                    "Our team adapts quickly to changes, delivering high-quality software with flexibility and speed."
                  }
                </p>
              </div>
            </div>

            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  {"Innovative Solutions"}
                </h1>
                <p className="text-white font-fira text-justify">
                  {
                    " We leverage the latest technologies to provide forward-thinking solutions that address complex challenges."
                  }
                </p>
              </div>
            </div>

            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  {"Collaborative Process:"}
                </h1>
                <p className="text-white font-fira text-justify">
                  {
                    "We work closely with clients to ensure their vision is realized, with transparency and communication at every step."
                  }
                </p>
              </div>
            </div>

            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  {"Quality Assurance:"}
                </h1>
                <p className="text-white font-fira text-justify">
                  {
                    "Rigorous testing protocols are in place to guarantee the reliability and performance of our software products."
                  }
                </p>
              </div>
            </div>

            <div className="cols-span-1 flex h-full hover:shadow-2xl hover:scale-105">
              <div className="p-4 shadow-2xl bg-slate-800 rounded-xl">
                <h1 className="text-orange font-bungee tracking-widelg:text-lg xl:text-xl xxl:text-2xl ">
                  {"Sustainable Practices:"}
                </h1>
                <p className="text-white font-fira text-justify">
                  {
                    "Our development process is mindful of future scalability and maintenance, ensuring long-term success."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Approach;
