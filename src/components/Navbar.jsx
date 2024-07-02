"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import u from "../../public/u.png";

import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Alert, Button, Container } from "@mui/material";
import Image from "next/image";
import { SupervisedUserCircleRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const DashboardSquare03Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M16 5C16 4.06812 16 3.60218 16.1522 3.23463C16.3552 2.74458 16.7446 2.35523 17.2346 2.15224C17.6022 2 18.0681 2 19 2C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5V9C22 9.93188 22 10.3978 21.8478 10.7654C21.6448 11.2554 21.2554 11.6448 20.7654 11.8478C20.3978 12 19.9319 12 19 12C18.0681 12 17.6022 12 17.2346 11.8478C16.7446 11.6448 16.3552 11.2554 16.1522 10.7654C16 10.3978 16 9.93188 16 9V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 19C16 18.0681 16 17.6022 16.1522 17.2346C16.3552 16.7446 16.7446 16.3552 17.2346 16.1522C17.6022 16 18.0681 16 19 16C19.9319 16 20.3978 16 20.7654 16.1522C21.2554 16.3552 21.6448 16.7446 21.8478 17.2346C22 17.6022 22 18.0681 22 19C22 19.9319 22 20.3978 21.8478 20.7654C21.6448 21.2554 21.2554 21.6448 20.7654 21.8478C20.3978 22 19.9319 22 19 22C18.0681 22 17.6022 22 17.2346 21.8478C16.7446 21.6448 16.3552 21.2554 16.1522 20.7654C16 20.3978 16 19.9319 16 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H8C9.88562 12 10.8284 12 11.4142 12.5858C12 13.1716 12 14.1144 12 16V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 5C2 4.06812 2 3.60218 2.15224 3.23463C2.35523 2.74458 2.74458 2.35523 3.23463 2.15224C3.60218 2 4.06812 2 5 2H9C9.93188 2 10.3978 2 10.7654 2.15224C11.2554 2.35523 11.6448 2.74458 11.8478 3.23463C12 3.60218 12 4.06812 12 5C12 5.93188 12 6.39782 11.8478 6.76537C11.6448 7.25542 11.2554 7.64477 10.7654 7.84776C10.3978 8 9.93188 8 9 8H5C4.06812 8 3.60218 8 3.23463 7.84776C2.74458 7.64477 2.35523 7.25542 2.15224 6.76537C2 6.39782 2 5.93188 2 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  const BloggerIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9577 11.4622V10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04341C13.5821 5.79972 11.833 6.01409 10.4788 6.01409C9.12474 6.01409 7.37562 5.79972 6.47521 7.04341C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Notebook02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 6L2 6M5 12H2M5 18H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7L13.5 7M15.5 11H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22L9 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const links = [
    { id: 1, name: "Quick Access", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Plans", path: "/plans" },
    { id: 7, name: "Home", path: "/home" },
  ];

  useEffect(() => {
    setActiveLink();
  }, []);

  const setActiveLink = () => {
    if (window.location.pathname === "/") {
      setQuickaccess(true);
    } else if (window.location.pathname === "/about") {
      setAbout(true);
    } else if (window.location.pathname === "/contact") {
      setContact(true);
    } else if (window.location.pathname === "/services") {
      setServices(true);
    } else if (window.location.pathname === "/blog") {
      setBlog(true);
    } else if (window.location.pathname === "/plans") {
      setPlans(true);
    } else if (window.location.pathname === "/home") {
      setHome(true);
    }
  };

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [services, setServices] = useState(false);
  const [blog, setBlog] = useState(false);
  const [plans, setPlans] = useState(false);
  const [quickaccess, setQuickaccess] = useState(false);

  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [hoverBlog, setHoverBlog] = useState(false);
  const [hoverPlans, setHoverPlans] = useState(false);
  const [hoverQuickaccess, setHoverQuickaccess] = useState(false);

  const handleHomeclicked = () => {
    setHome(true);
    setAbout(false);
    setContact(false);
    setServices(false);
    setBlog(false);
    setPlans(false);
    setQuickaccess(false);
    router.push("/home");
  };

  const handleQuickaccessclicked = () => {
    setQuickaccess(true);
    setAbout(false);
    setContact(false);
    setServices(false);
    setBlog(false);
    setPlans(false);
    setHome(false);
    router.push("/");
  };

  const handleservicesclicked = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
    setServices(true);
    setBlog(false);
    setPlans(false);
    setQuickaccess(false);
    router.push("/services");
  };

  const handleAboutclicked = () => {
    setHome(false);
    setAbout(true);
    setContact(false);
    setServices(false);
    setBlog(false);
    setPlans(false);
    setQuickaccess(false);
    router.push("/about");
  };

  const handleContactclicked = () => {
    setHome(false);
    setAbout(false);
    setContact(true);
    setServices(false);
    setBlog(false);
    setPlans(false);
    setQuickaccess(false);
    router.push("/contact");
  };

  const handleBlogclicked = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
    setServices(false);
    setBlog(true);
    setPlans(false);
    setQuickaccess(false);
    router.push("/blog");
  };

  const handlePlansclicked = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
    setServices(false);
    setBlog(false);
    setPlans(true);
    setQuickaccess(false);
    router.push("/plans");
  };

  return (
    <div className="sticky top-0 z-50 left-0 right-0 bg-white bg-opacity-50 backdrop-blur transition-all duration-300 ease-in-out">
      <div className="zero:hidden sm:hidden md:hidden lg:block xl:block xxl:block ">
        <Container maxWidth="xl">
          <div className="flex flex-row justify-between p-2">
            <div
              onClick={handleQuickaccessclicked}
              onMouseEnter={() => setHoverQuickaccess(true)}
              onMouseLeave={() => setHoverQuickaccess(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <DashboardSquare03Icon
                className={`${
                  quickaccess || hoverQuickaccess
                    ? "text-orange"
                    : "text-primary"
                } `}
              />
              <h1
                className={`${
                  quickaccess || hoverQuickaccess ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                Quick Access
              </h1>
            </div>
            <div
              onClick={handleHomeclicked}
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <HomeIcon
                style={{ height: "20px", width: "20px" }}
                className={`${
                  home || hoverHome ? "text-orange" : "text-primary"
                } `}
              />
              <h1
                className={`${
                  home || hoverHome ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                Home
              </h1>
            </div>

            <div
              onClick={handleservicesclicked}
              onMouseEnter={() => setHoverServices(true)}
              onMouseLeave={() => setHoverServices(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <DesignServicesIcon
                style={{ height: "20px", width: "20px" }}
                className={`${
                  services || hoverServices ? "text-orange" : "text-primary"
                } `}
              />
              <h1
                className={`${
                  services || hoverServices ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                Services
              </h1>
            </div>
            <div
              onClick={handleAboutclicked}
              onMouseEnter={() => setHoverAbout(true)}
              onMouseLeave={() => setHoverAbout(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <InfoIcon
                style={{ height: "20px", width: "20px" }}
                className={`${
                  about || hoverAbout ? "text-orange" : "text-primary"
                } `}
              />
              <h1
                className={`${
                  about || hoverAbout ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                About
              </h1>
            </div>

            <div
              onClick={handleBlogclicked}
              onMouseEnter={() => setHoverBlog(true)}
              onMouseLeave={() => setHoverBlog(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <BloggerIcon
                style={{ height: "20px", width: "20px" }}
                className={`${
                  blog || hoverBlog ? "text-orange" : "text-primary"
                } `}
              />
              <h1
                className={`${
                  blog || hoverBlog ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                Blog
              </h1>
            </div>

            <div
              onClick={handleContactclicked}
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out flex flex-row items-center"
            >
              <ContactSupportIcon
                style={{ height: "20px", width: "20px" }}
                className={`${
                  contact || hoverContact ? "text-orange" : "text-primary"
                } `}
              />
              <h1
                className={`${
                  contact || hoverContact ? "text-orange" : "text-black"
                } text-md font-bungee ml-2`}
              >
                Contact
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
