"use client";
import { motion } from "framer-motion";
import bg1 from "../../public/bg.png";
import Header from "../components/Header";
import QuickAccess from "../components/QuickAccess";
import QuickAccess2 from "../components/QuickAccess2";
export default function Home() {
  return (
    <div
      className="relative h-screen dark:bg-grey overflow-y-auto"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <QuickAccess />
      <QuickAccess2 />
    </div>
  );
}
