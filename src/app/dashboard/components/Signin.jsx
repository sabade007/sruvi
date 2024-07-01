import React from "react";
import Navbar from "../../../components/Navbar";

const Signin = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-white">
      <Navbar />
      <div className="w-full absolute top-1/2 left-1/2 right-0 traslate-y-1/2">
        <h1 className="text-orange">Sign In with Google</h1>
      </div>
    </div>
  );
};

export default Signin;
