import bg1 from "../../public/bg.png";
import azure from "../../public/azure.svg";
import firebase from "../../public/firebase.svg";
import aws from "../../public/aws.svg";
import bash from "../../public/bash.svg";
import cloud from "../../public/cloud.png";
import { Button, Container } from "@mui/material";
import React from "react";

const QuickCloud = () => {
  return (
    <div
      className="p-4 h-full"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white p-4 h-full flex flex-col justify-between shadow-2xl rounded-lg">
        <div>
          <div className="flex flex-row items-center">
            <img
              src={cloud.src}
              alt="visual basic"
              style={{ width: "40px", height: "40px" }}
            />
            <h1 className="text-black text-xl  font-bold font-bungee ml-4">
              {"Cloud & Devops"}
            </h1>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            {
              "Elevate Your Business with Sruvi Inc's Cloud and DevOps expertise"
            }
          </h1>

          <h1 className="text-black text-md font-fira text-justify mt-2">
            {
              "At Sruvi Inc, we don not just chase clouds; we harness their power. Our developers are the Architects of As-a-Service and the Wizards of Web Services. Why settle for one cloud when you can have them all?. DevOps is not just a buzzword; it is our secret sauce.We automate, orchestrate, and optimize—like clockwork. We are the rhythm section of your software symphony."
            }
          </h1>
        </div>
        <div>
          <h1 className="text-black text-md font-bold font-fira">Cloud:</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center ">
              <img
                src={firebase.src}
                alt="firebase"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-md font-fira text-center">
                {"Google Firebase"}
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={azure.src}
                alt="azure"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black  text-md font-fira text-center">
                {"Microsoft Azure"}
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={aws.src}
                alt="aws"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-md font-fira text-center">
                {"Amazon Web Services"}
              </h1>
            </div>
          </div>

          <h1 className="text-black text-md font-bold font-fira mt-4">
            DevOps
          </h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <img
                src={bash.src}
                alt="bash"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black  text-md font-fira text-center">
                Bash Scripting
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-black font-bold text-lg font-fira">
            {" Ready to Soar?"}
          </h1>
          <h1 className="text-black text-md font-fira text-justify">
            {
              " Whether it is scaling, security, or seamless deployments—Sruvi Inc has your back."
            }
          </h1>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#48c43c",
              marginTop: "10px",
            }}
            fullWidth
          >
            {"Your digital altitude awaits"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickCloud;
