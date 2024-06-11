import { Button, Container } from "@mui/material";
import React from "react";
import vb from "../../public/vb.png";
import bg1 from "../../public/bg.png";
import swift from "../../public/swift.svg";
import desktop from "../../public/desktop.png";
import Animatediv from "../animations/Animatediv";

const QuickDesktop = () => {
  return (
    <Animatediv>
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
                src={desktop.src}
                alt="visual basic"
                style={{ width: "40px", height: "40px" }}
              />
              <h1 className="text-black text-xl  font-bold font-bungee ml-4">
                {"Desktop software"}
              </h1>
            </div>
            <h1 className="text-black font-bold text-lg font-fira mt-4">
              {"Empower Your Business with Sruvi Inc's Desktop Magic!"}
            </h1>

            <h1 className="text-black text-md font-fira text-justify mt-2">
              {
                "At Sruvi Inc, our developers don't just write code; they orchestrate desktop symphonies.Our developers are the Artisans of Algorithms and the Composers of Code.They sculpt sleek, efficient desktop applications that harmonize with your business needs. Intuitive interfaces, seamless functionality, and elegant design—our software sings to users."
              }
            </h1>
          </div>
          <div>
            <h1 className="text-black font-bold text-md font-fira">Windows</h1>
            <div className="grid grid-cols-3 mt-4">
              <div className="flex flex-col items-center ">
                <img
                  src={vb.src}
                  alt="visual basic"
                  style={{ width: "24px", height: "24px" }}
                />
                <h1 className="text-black  text-md font-fira text-center">
                  {"Visual Basic .NET"}
                </h1>
              </div>
            </div>

            <h1 className="text-black font-bold text-md font-fira mt-4">
              {"Mac Os (Apple Devices)"}
            </h1>
            <div className="grid grid-cols-3 mt-4">
              <div className="flex flex-col items-center ">
                <img
                  src={swift.src}
                  alt="swift"
                  style={{ width: "24px", height: "24px" }}
                />
                <h1 className="text-black text-center text-md font-fira">
                  {"Swift"}
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-black font-bold text-lg font-fira">
              {"Ready to Desktopify?"}
            </h1>
            <h1 className="text-black text-md font-fira text-justify">
              {
                " Whether it's productivity tools, utilities, or custom software—Sruvi Inc conducts the desktop orchestra."
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
              {"Begin your software overture"}
            </Button>
          </div>
        </div>
      </div>
    </Animatediv>
  );
};

export default QuickDesktop;
