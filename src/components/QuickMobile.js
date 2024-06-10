import { Button } from "@mui/material";
import React from "react";
import swift from "../../public/swift.svg";
import flutter from "../../public/flutter.svg";
import kotlin from "../../public/kotlin.svg";
import java from "../../public/java.svg";
import android from "../../public/android.svg";
import bg1 from "../../public/bg.png";

const QuickMobile = () => {
  const MobileProgramming02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M5 6C5.08715 4.58055 5.32629 3.67665 5.98247 3.02513C7.01491 2 8.67661 2 12 2C15.3234 2 16.9851 2 18.0175 3.02513C18.6737 3.67665 18.9128 4.58055 19 6M19 18C18.9128 19.4194 18.6737 20.3233 18.0175 20.9749C16.9851 22 15.3234 22 12 22C8.67661 22 7.01491 22 5.98247 20.9749C5.32629 20.3233 5.08715 19.4194 5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 19H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 9L19.0332 10.5858C19.6777 11.2525 20 11.5858 20 12C20 12.4142 19.6777 12.7475 19.0332 13.4142L17.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9L4.96682 10.5858C4.32228 11.2525 4 11.5858 4 12C4 12.4142 4.32227 12.7475 4.96682 13.4142L6.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CProgrammingIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15.5 9.17157C13.8987 7.60948 11.3024 7.60948 9.70101 9.17157C8.09966 10.7337 8.09966 13.2663 9.70101 14.8284C11.3024 16.3905 13.8987 16.3905 15.5 14.8284"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const ReactIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#48C43C"}
      fill={"none"}
      {...props}
    >
      <path
        d="M8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

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
            <MobileProgramming02Icon />
            <h1 className="text-black text-xl  font-bold font-bungee ml-4">
              Mobile Apps Development
            </h1>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            Mobile App Magic Makers
          </h1>

          <h1 className="text-black text-md font-fira text-justify mt-2">
            At Sruvi Inc, our developers don{"'"}t just code; they conjure
            mobile experiences that leave users spellbound. Our developers are
            the Picassos of Pixels and the Sculptors of Screens. They carve out
            sleek, intuitive mobile interfaces. Whether it
            {"'"}s iOS or Android, we speak both dialects fluently.
          </h1>
        </div>
        <div>
          <h1 className="text-black font-bold text-lg font-fira">Languages:</h1>
          <h1 className="text-black text-md font-fira">Android</h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <img
                src={java.src}
                alt="java"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">Java</h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={kotlin.src}
                alt="kotlin"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">Kotlin</h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={flutter.src}
                alt="dart"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">Dart</h1>
            </div>
          </div>

          <h1 className="text-black text-md font-fira mt-4">
            IOS(Apple Devices)
          </h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <CProgrammingIcon />
              <h1 className="text-black font-bold text-md font-fira">
                Objective-C
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={swift.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">swift</h1>
            </div>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            FrameWorks:
          </h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <ReactIcon />
              <h1 className="text-black font-bold text-md font-fira">
                React Native
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={android.src}
                alt="android"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">
                Android SDK
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={swift.src}
                alt="swift"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black font-bold text-md font-fira">
                Swift UI
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-black font-bold text-lg font-fira">
            Ready to Appify?
          </h1>
          <h1 className="text-black text-md font-fira">
            Whether it{"'"}s a business app, a game, or a productivity
            tool—Sruvi Inc has the magic touch.
          </h1>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#48c43c",
              marginTop: "10px",
            }}
            fullWidth
          >
            Start Your Mobile Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickMobile;
