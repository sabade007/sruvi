import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Dialog, DialogTitle } from "@mui/material";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import startarrow from "../../../../public/startarrow.png";
import endarrow from "../../../../public/endarrow.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { DesignServicesRounded } from "@mui/icons-material";
import Desktop from "../../../../public/desktop.png";
import cloud from "../../../../public/cloud.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import m1 from "../../../../public/m3.png";
import w1 from "../../../../public/w2.png";
import c1 from "../../../../public/c1.png";
import d1 from "../../../../public/d1.png";
import cc1 from "../../../../public/cc1.png";
import s1 from "../../../../public/s1.png";
import b1 from "../../../../public/b1.png";
import dd1 from "../../../../public/dd1.png";

const Services = () => {
  const WebDesign01Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
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

  const MobileProgramming02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
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

  const Forward02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
      color={"#FF812B"}
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

  const Database01Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
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

  const SeoIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
      fill={"none"}
      {...props}
    >
      <path
        d="M5 20L7.41286 17.5871M7.41286 17.5871C8.21715 18.3914 9.32826 18.8889 10.5556 18.8889C13.0102 18.8889 15 16.899 15 14.4444C15 11.9898 13.0102 10 10.5556 10C8.10096 10 6.11111 11.9898 6.11111 14.4444C6.11111 15.6717 6.60857 16.7829 7.41286 17.5871Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 15.1877C2.36394 14.0914 2 12.8191 2 11.4623C2 7.34099 5.35786 4 9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 14.7114 19.913 17.4756 17 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const PromotionIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
      fill={"none"}
      {...props}
    >
      <path
        d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.5V6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BriefcaseDollarIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      color={"#FF812B"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 12H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 12L18 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const ComputerIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 15H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 22H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const CloudIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ref = useRef();

  const inview = useInView(ref, {
    once: true,
  });

  const [open, setOpen] = React.useState(false);
  const handleDialog = () => {
    setOpen(true);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [software, setSoftware] = useState(false);
  const [business, setBusiness] = useState(false);
  const [devops, setdevops] = useState(false);
  const [seo, setSeo] = useState(false);
  const [database, setDatabase] = useState(false);
  const [digital, setDigital] = useState(false);

  useEffect(() => {
    console.log(index);
    if (index === 0) {
      setWeb(true);
      setMobile(false);
      setSoftware(false);
      setDatabase(false);
      setdevops(false);
      setSeo(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 1) {
      setMobile(true);
      setWeb(false);
      setSoftware(false);
      setDatabase(false);
      setdevops(false);
      setSeo(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 2) {
      setSoftware(true);
      setWeb(false);
      setMobile(false);
      setDatabase(false);
      setdevops(false);
      setSeo(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 3) {
      setDatabase(true);
      setWeb(false);
      setMobile(false);
      setSoftware(false);
      setdevops(false);
      setSeo(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 4) {
      setdevops(true);
      setWeb(false);
      setMobile(false);
      setSoftware(false);
      setDatabase(false);
      setSeo(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 5) {
      setSeo(true);
      setWeb(false);
      setMobile(false);
      setSoftware(false);
      setDatabase(false);
      setdevops(false);
      setBusiness(false);
      setDigital(false);
    } else if (index === 6) {
      setBusiness(true);
      setWeb(false);
      setMobile(false);
      setSoftware(false);
      setDatabase(false);
      setdevops(false);
      setSeo(false);
      setDigital(false);
    } else if (index === 7) {
      setDigital(true);
      setWeb(false);
      setMobile(false);
      setSoftware(false);
      setDatabase(false);
      setdevops(false);
      setSeo(false);
      setBusiness(false);
    }
  }, [index]);

  const [webhover, setwebHover] = useState(false);
  const [mobilehover, setmobileHover] = useState(false);
  const [softwarehover, setsoftwareHover] = useState(false);
  const [businesshover, setbusinessHover] = useState(false);
  const [devopshover, setdevopsHover] = useState(false);
  const [seohover, setseoHover] = useState(false);
  const [databasehover, setdatabaseHover] = useState(false);
  const [digitalhover, setdigitalHover] = useState(false);

  return (
    <motion.div className="w-full bg-greyish p-4">
      <Container maxWidth="xl" className="bg-white p-4">
        <div className="flex flex-col " ref={ref}>
          <div className="flex flex-row justify-center items-center">
            <DesignServicesRounded style={{ color: "#48c43c" }} />
            <h1 className="text-primary lg:text-2xl xl:text-3xl xxl:text-4xl  tracking-wide font-bungee ml-4">
              Services
            </h1>
          </div>
          <h1 className="mt-2 text-black font-bungee tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl text-center">
            {inview && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Service beyond measure").start();
                }}
              />
            )}
          </h1>

          <h1 className="text-black font-fira text-justify mt-4 p-4 ">
            {
              "At our core, we are passionate about crafting exceptional software solutions. With a blend of innovation, expertise, and dedication, we provide the best-in-class software development services. Our team thrives on turning ideas into robust applications, ensuring seamless user experiences and cutting-edge functionality. Whether it's web applications, mobile apps, or custom software, we're here to transform your vision into reality."
            }
          </h1>

          <div className="flex bg-gradient-to-r from-blueblack to-slate-950 rounded-2xl  p-4 grid grid-cols-10 gap-4 ">
            <div className="col-span-3 flex flex-col justify-evenly h-full p-2">
              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  web ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: web || webhover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setwebHover(true)}
                onMouseLeave={() => setwebHover(false)}
                title="Create high-quality web applications tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/webdevelopment")
                }
              >
                <WebDesign01Icon style={{ color: web ? "#48c43c" : "white" }} />
                <h1
                  className="ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl"
                  style={{ color: web ? "#48c43c" : "white" }}
                >
                  Web Development
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  mobile ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: mobile || mobilehover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setmobileHover(true)}
                onMouseLeave={() => setmobileHover(false)}
                title="Create high-quality mobile applications tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/mobiledevelopment")
                }
              >
                <MobileProgramming02Icon
                  style={{ color: mobile ? "#48c43c" : "white" }}
                />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: mobile ? "#48c43c" : "white" }}
                >
                  Mobile Development
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  software ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform:
                    software || softwarehover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setsoftwareHover(true)}
                onMouseLeave={() => setsoftwareHover(false)}
                title="Create high-quality custom software tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/customsoftware")
                }
              >
                <ComputerIcon
                  style={{ color: software ? "#48c43c" : "white" }}
                />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: software ? "#48c43c" : "white" }}
                >
                  Custom Software
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  database ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform:
                    database || databasehover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setdatabaseHover(true)}
                onMouseLeave={() => setdatabaseHover(false)}
                title="Create high-quality databases tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/databasemanagement")
                }
              >
                <Database01Icon
                  style={{ color: database ? "#48c43c" : "white" }}
                />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: database ? "#48c43c" : "white" }}
                >
                  Database Management
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  devops ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: devops || devopshover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setdevopsHover(true)}
                onMouseLeave={() => setdevopsHover(false)}
                title="Create high-quality DevOps tailored to your specific needs"
                onClick={() => (window.location.href = "/services/cloud")}
              >
                <CloudIcon style={{ color: devops ? "#48c43c" : "white" }} />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: devops ? "#48c43c" : "white" }}
                >
                  Cloud & DevOps
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  seo ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: seo || seohover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setseoHover(true)}
                onMouseLeave={() => setseoHover(false)}
                title="Create high-quality SEO Websites tailored to your specific needs"
                onClick={() => (window.location.href = "/services/seo")}
              >
                <SeoIcon style={{ color: seo ? "#48c43c" : "white" }} />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: seo ? "#48c43c" : "white" }}
                >
                  SEO Services
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  business ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform:
                    business || businesshover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setbusinessHover(true)}
                onMouseLeave={() => setbusinessHover(false)}
                title="Business consulting tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/businessconsulting")
                }
              >
                <BriefcaseDollarIcon
                  style={{ color: business ? "#48c43c" : "white" }}
                />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: business ? "#48c43c" : "white" }}
                >
                  Business Consulting
                </h1>
              </div>

              <div
                className={`flex flex-row  items-center  p-2 rounded-lg cursor-pointer ${
                  digital ? "shadow-2xl" : ""
                }`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform:
                    digital || digitalhover ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setdigitalHover(true)}
                onMouseLeave={() => setdigitalHover(false)}
                title="Bloom your digital presence with high-quality marketing tailored to your specific needs"
                onClick={() =>
                  (window.location.href = "/services/digitalmarketing")
                }
              >
                <PromotionIcon
                  style={{ color: digital ? "#48c43c" : "white" }}
                />
                <h1
                  className="text-orange ml-4 font-bungee tracking-wide lg:text-md xl:text-lg xxl:text-xl "
                  style={{ color: digital ? "#48c43c" : "white" }}
                >
                  Digital Marketing
                </h1>
              </div>
            </div>

            <div className="col-span-7 bg-slate-800 p-4 rounded-2xl flex flex-col h-full">
              <div className="rounded-lg h-full w-full">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={5000}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={true}
                  selectedItem={index}
                  onChange={handleSelect}
                  className="w-full lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                >
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-6/12 w-auto   "
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={w1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Website Development
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        Where Pixels Dance with Purpose!
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "We believe that a website is more than just code—it's your online storefront, your brand's voice, and your connection to the world. Our web development wizards work tirelessly to create pixel-perfect designs, smooth navigation, and lightning-fast load times"
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href = "/services/webdevelopment")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Create my Website!
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={m1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Mobile App Development
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        Apps That Ignite Possibilities!
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "We understand that your business is always on the move. That's why we specialize in crafting mobile apps that seamlessly integrate into your customers' lives. Whether it's a sleek iOS app for Apple enthusiasts or an Android app that reaches a wider audience."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href =
                              "/services/mobiledevelopment")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Create my Mobile App!
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={c1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Custom Software Development
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        Tailored Solutions, Infinite Possibilities!
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "We're architects of the virtual world, crafting desktop applications that empower your business. We specialize in crafting desktop apps with an eye for elegance and ease of use. Whether you're targeting Windows, macOS, or both, we'll help you bring your vision to life."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href = "/services/customsoftware")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Create my Custom Software!
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={d1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Database Management
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        {" Guardians of Data Harmony!"}
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "Your data is the lifeblood of your business. Our database management services ensure that your data is secure, organized, and accessible. We specialize in various database management systems, including MySQL, PostgreSQL, MongoDB, and more."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href =
                              "/services/databasemanagement")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Manage my Data
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={cc1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Cloud and DevOps
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        {"Code in the Cloud, Deploy with DevOps Magic!"}
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "We're the architects of agility. DevOps and cloud are our secret ingredients for transforming businesses. What does that mean for you? It means seamless deployments, automated workflows, and scalability that defies limits"
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href = "/services/cloud")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Lets Automate
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={s1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Search Engine Optimization
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        {"Unlocking Digital Visibility, One Keyword at a Time!"}
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "Get your website ranked high on search engines. Our SEO services are like compasses, guiding your business toward visibility, relevance, and success. What do we do? We fine-tune your website, optimize keywords, and boost your rankings on search engines."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href = "/services/seo")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Let my website rank high
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={b1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Business Consulting
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        {"Navigating Success, One Strategy at a Time!"}
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "We're your strategic compass. Our business consulting services are designed to steer your ship toward growth, efficiency, and resilience. What do we do? We analyze, strategize, and optimize. Whether it's streamlining processes, market research, or financial planning, we're here to be your trusted advisors."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href =
                              "/services/businessconsulting")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Let me help you
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:h-[70vh] xl:h-[50vh] xxl:h-[50vh]"
                    style={{
                      width: "100%",

                      position: "relative",
                    }}
                  >
                    <div
                      className="h-9/12 w-full"
                      style={{
                        zIndex: -1,
                        opacity: 0.5,
                      }}
                    >
                      <Image
                        src={dd1}
                        style={{
                          height: "100%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div
                      className="flex flex-col w-full p-2 "
                      style={{
                        position: "absolute",
                        bottom: "10%",
                        zIndex: 2,
                        height: "fit-content",
                        left: 0,
                      }}
                    >
                      <h1 className="text-white font-bungee text-md text-start">
                        Digital Marketing
                      </h1>
                      <h1 className="text-orange font-bungee text-xl  text-start mt-2">
                        {"Navigating the Digital Currents!"}
                      </h1>

                      <h1 className="text-white font-fira text-md text-start">
                        {
                          "Reach your audience across the globe. Our digital marketing services blend creativity, technology, and strategy to drive your online presence. We specialize in various digital marketing channels, including social media, email marketing, Google Ads, and more."
                        }
                      </h1>
                      <div className="flex flex-row mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange"
                          onClick={() =>
                            (window.location.href =
                              "/services/digitalmarketing")
                          }
                        >
                          <h1 className="text-white font-bungee">
                            Lets grow your business
                          </h1>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Services;
