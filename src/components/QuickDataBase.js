import React from "react";
import bg1 from "../../public/bg.png";

import Animatediv from "@/animations/Animatediv";

const QuickDataBase = () => {
  const Database01Icon = (props) => (
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 12H21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8.25"
        cy="7"
        r="1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8.25"
        cy="17"
        r="1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17L17 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const Forward02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M21.8371 12.9178C21.5547 13.6884 20.7014 14.3047 18.9948 15.5372C16.6677 17.218 15.5041 18.0583 14.5312 17.9969C13.7882 17.9499 13.0976 17.6007 12.6223 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 12.6223 6.96846C13.0976 6.39933 13.7882 6.0501 14.5312 6.00315C15.5041 5.94167 16.6677 6.78203 18.9948 8.46275C20.7014 9.6953 21.5547 10.3116 21.8371 11.0822C22.0543 11.675 22.0543 12.325 21.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.8371 12.9178C11.5547 13.6884 10.7014 14.3047 8.99482 15.5372C6.66769 17.218 5.50413 18.0583 4.5312 17.9969C3.78818 17.9499 3.09758 17.6007 2.62232 17.0315C2 16.2863 2 14.8575 2 12C2 9.14246 2 7.71369 2.62232 6.96846C3.09758 6.39933 3.78818 6.0501 4.5312 6.00315C5.50413 5.94167 6.66769 6.78203 8.99482 8.46275C10.7014 9.6953 11.5547 10.3116 11.8371 11.0822C12.0543 11.675 12.0543 12.325 11.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
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
              <Database01Icon />
              <h1 className="text-primary text-2xl  tracking-wide font-bungee ml-4">
                {"Database Management"}
              </h1>
            </div>
            <h1 className="text-black font-bold text-lg font-fira mt-4">
              {" Mastering Data, Empowering Business"}
            </h1>

            <h1 className="text-black text-md font-fira text-justify mt-2">
              {
                "At Sruvi Inc, we don not just handle data; we orchestrate its symphony. Our developers are the Builders of Bytes and the Curators of Collections. Whether it is SQL, NoSQL, or NewSQL, we speak all dialects. Slow queries? Indexing nightmares? We wave our wands. Your data is our sacred trust."
              }
            </h1>
          </div>
          <div className="mt-4">
            <hr
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#48c43c",
                border: "none",
              }}
            />

            <div className="mt-1 flex flex-row justify-between">
              <h1 className="text-black  text-lg font-bungee">
                {"Ready to Unleash Insights? Lets Talk Data!"}
              </h1>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <Forward02Icon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animatediv>
  );
};

export default QuickDataBase;
