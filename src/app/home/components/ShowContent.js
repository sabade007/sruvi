import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

const ShowContent = () => {
  return (
    <div
      style={{
        position: "fixed",

        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: "10px",
        borderRadius: "10px",

        backgroundColor: "white",
      }}
    >
      <h1 className="text-3xl text-black">This is the content</h1>
    </div>
  );
};

export default ShowContent;
