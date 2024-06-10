import { Button, Container } from "@mui/material";
import React from "react";
import bg1 from "../../public/bg.png";
import css from "../../public/css.svg";
import nodejs from "../../public/nodejs.svg";
import php from "../../public/php.png";
import vue from "../../public/vue.png";
import python from "../../public/python.svg";

const QuickWeb = () => {
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
  const NanoTechnologyIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      color={"#48C43C"}
      fill={"none"}
      {...props}
    >
      <path
        d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="3.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="3.5"
        cy="7.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="20.5"
        cy="7.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="20.5"
        cy="16.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="3.5"
        cy="16.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const WebDesign01Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      color={"#48C43C"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 9H21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L17 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.99981 6H7.00879"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9998 6H11.0088"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const Html5Icon = (props) => (
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
        d="M16.7685 3H8.23147C6.06757 3 4.98562 3 4.39152 3.70888C3.79742 4.41777 3.9697 5.50319 4.31426 7.67402L5.68897 16.3351C5.98587 18.2056 6.416 18.7661 8.18181 19.4563L11.0756 20.5873C11.7796 20.8624 12.1316 21 12.5 21C12.8684 21 13.2204 20.8624 13.9244 20.5873L16.8182 19.4563C18.584 18.7661 19.0141 18.2056 19.311 16.3351L20.6857 7.67402C21.0303 5.50319 21.2026 4.41777 20.6085 3.70888C20.0144 3 18.9324 3 16.7685 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8H10.5269C9.61889 8 9.43592 8.18899 9.51742 9.09276L9.69841 11.0998C9.76714 11.862 9.94159 12.0141 10.7079 12.0141H13.8631C14.788 12.0141 14.9719 12.2076 14.8706 13.1264L14.7013 14.6624C14.6333 15.2803 14.6139 15.3041 14.0195 15.5038L12.7852 15.9187C12.4624 16.0271 12.4565 16.0271 12.1337 15.9187L10.7602 15.4571C10.3907 15.3329 10.2668 15.1818 10.2007 14.8117"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
            <WebDesign01Icon />
            <h1 className="text-black text-xl  font-bold font-bungee ml-4">
              Web Development
            </h1>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            Website Development Wizards
          </h1>

          <h1 className="text-black text-md font-fira text-justify mt-2">
            At Sruvi Inc, we don{"'"}t just build websites; we weave digital
            dreams. Web development is the process of creating, building, and
            maintaining websites. It involves various tasks, from writing code
            to designing the user interface UI and ensuring the website runs
            smoothly on the internet.
          </h1>
        </div>
        <div>
          <h1 className="text-black font-bold text-lg font-fira">Languages:</h1>
          <h1 className="text-black text-md font-fira">Front-end:</h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <Html5Icon />
              <h1 className="text-black text-center  text-md font-fira">
                HTML
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={css.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-center text-md font-fira">CSS</h1>
            </div>
            <div className="flex flex-col items-center ">
              <Html5Icon />
              <h1 className="text-black text-center text-md font-fira">
                JavaScript
              </h1>
            </div>
          </div>

          <h1 className="text-black text-md font-fira mt-4">Back-end:</h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <img
                src={nodejs.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-center text-md font-fira">
                Node Js
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={python.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-center text-md font-fira">
                Python
              </h1>
            </div>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            FrameWorks:
          </h1>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col items-center ">
              <ReactIcon />
              <h1 className="text-black text-center text-md font-fira">
                React
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={vue.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-center text-md font-fira">Vue</h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={php.src}
                alt="css"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="text-black text-center text-md font-fira">PHP</h1>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-black font-bold text-lg font-fira">
            Ready to Webify?
          </h1>
          <h1 className="text-black text-md font-fira text-justify">
            Whether it{"'"}s an e-commerce platform, a portfolio site, or a
            blog—Sruvi Inc has your back.
          </h1>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#48c43c",
              marginTop: "10px",
            }}
            fullWidth
          >
            Start Your Web Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickWeb;
