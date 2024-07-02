"use client";
import React from "react";
import Header from "./components/Header";
import { UserAuth } from "../../context/AuthContext";
import Signin from "./components/Signin";

const page = () => {
  //const { user } = UserAuth();

  // useEffect(() => {
  //   if (!user) {
  //     console.log("USER iN DAshBoard");
  //   }
  // });
  return (
    <div className="bg-white dark:bg-white w-full h-screen">
      {user ? (
        <div>
          <Header />
        </div>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default page;
