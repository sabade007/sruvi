"use client";
import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  AccountBox,
  AlternateEmail,
  ConnectWithoutContact,
  Email,
  Phone,
  PhoneIphone,
} from "@mui/icons-material";

import AnimateddivT2B from "../animations/AnimateddivT2B";

const QuickAccess = () => {
  const [mobileChecked, setMobileChecked] = React.useState(true);
  const [emailChecked, setEmailChecked] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const setMobileCheckedHandler = () => {
    if (!mobileChecked) {
      setMobileChecked(true);
      setEmailChecked(false);
    }
  };

  const setEmailCheckedHandler = () => {
    if (!emailChecked) {
      setEmailChecked(true);
      setMobileChecked(false);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleMobileChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="zero:hidden sm:hidden md:hidden lg:block xl:block">
      <Container maxWidth="xl" className="p-4">
        <AnimateddivT2B>
          <div className="p-4 bg-white">
            <div className="flex flex-row items-center">
              <AcUnitIcon className="text-primary" fontSize="large" />
              <h1 className="text-xl text-black font-bold font-bungee ml-2">
                {"Quick Access"}
              </h1>
            </div>
            <h1 className="text-md text-black  font-fira  ml-10">
              {
                "Welcome to our Quick Access page! This single-page summary contains all the essential information you need. Whether you are a visitor or a regular, you will find everything conveniently organized here."
              }
            </h1>
          </div>
        </AnimateddivT2B>
        <div className="flex grid grid-cols-10 mt-4 gap-4">
          <div className=" col-span-4 p-4 bg-greyish">
            <div className=" bg-white h-full flex flex-col justify-between p-4">
              <FormControl
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div className="flex flex-row items-center justify-center mb-4">
                  <ConnectWithoutContact
                    className="text-primary"
                    fontSize="medium"
                    style={{ marginRight: 10 }}
                  />
                  <h1 className="text-black text-xl  font-bungee ">
                    {"Keep Close, Stay Connected!"}
                  </h1>
                </div>
                <FormHelperText
                  id="my-helper-textss"
                  className="text-justify mb-4"
                >
                  {
                    "We are excited to connect with you! Please take a moment to share your contact information so that we can reach out to you promptly."
                  }
                </FormHelperText>

                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "#black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "black",
                      fontFamily: "'Fira Sans', sans-serif",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBox />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                  style={{
                    fontFamily: "'Fira Sans', sans-serif",
                  }}
                  required
                  className="mb-4"
                />

                <h1 className="text-black font-bold font-fira">
                  {"Contact Type:"}
                </h1>
                <div className="flex flex-row p-0 mb-4 ">
                  <div
                    className="  mr-4  cursor-pointer flex flex-row items-center"
                    onClick={setMobileCheckedHandler}
                  >
                    <Phone
                      style={{
                        color: mobileChecked ? "#48C43C" : "black",
                        fontSize: 20,
                      }}
                    />
                    <h1
                      className="p-1 text-black   font-fira"
                      style={{
                        color: mobileChecked ? "#48C43C" : "black",
                        fontWeight: mobileChecked ? "bold" : "normal",
                      }}
                    >
                      {" Mobile"}
                    </h1>
                  </div>
                  <div
                    className=" cursor-pointer flex flex-row items-center"
                    onClick={setEmailCheckedHandler}
                  >
                    <Email
                      style={{
                        color: emailChecked ? "#48C43C" : "black",
                        fontSize: 20,
                      }}
                    />
                    <h1
                      className="p-1 text-black  font-fira"
                      style={{
                        color: emailChecked ? "#48C43C" : "black",
                        fontWeight: emailChecked ? "bold" : "normal",
                      }}
                    >
                      {" Email"}
                    </h1>
                  </div>
                </div>

                {mobileChecked ? (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "#black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontFamily: "'Fira Sans', sans-serif",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphone />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    id="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    required
                    style={{
                      fontFamily: "'Fira Sans', sans-serif",
                    }}
                    value={mobileNumber}
                    onChange={handleMobileChange}
                  />
                ) : (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "#black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontFamily: "'Fira Sans', sans-serif",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmail />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    id="email"
                    label="E-mail Address"
                    variant="outlined"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                      fontFamily: "'Fira Sans', sans-serif",
                    }}
                  />
                )}

                {mobileChecked ? (
                  <FormHelperText id="my-helper-text">
                    {" We'll never share your Mobile Number."}
                  </FormHelperText>
                ) : (
                  <FormHelperText id="my-helper-text">
                    {"We'll never share your email."}
                  </FormHelperText>
                )}

                <h1 className="text-black font-bold font-fira">
                  {" What are you interested in?"}
                </h1>
                <FormHelperText className="mb-2">
                  {"You can select multiple options"}
                </FormHelperText>
                <FormGroup>
                  <div className="flex grid grid-cols-2 gap-4 mb-4">
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "#48C43C" }}
                          checked={selectedOptions.includes("Option 1")}
                          onChange={handleChange}
                          value="Option 1"
                          name="Option 1"
                        />
                      }
                      label={
                        <Typography
                          variant="body1"
                          style={{ color: "#000000", fontSize: 14 }}
                        >
                          {"Website Development"}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "#48C43C" }}
                          checked={selectedOptions.includes("Option 2")}
                          onChange={handleChange}
                          value="Option 2"
                          name="Option 2"
                        />
                      }
                      label={
                        <Typography
                          variant="body1"
                          style={{ color: "#000000", fontSize: 14 }}
                        >
                          {"Mobile Apps"}
                        </Typography>
                      }
                    />
                  </div>
                  <div className="flex grid grid-cols-2 gap-4 mb-4">
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "#48C43C" }}
                          checked={selectedOptions.includes("Option 3")}
                          onChange={handleChange}
                          value="Option 3"
                          name="Option 3"
                        />
                      }
                      label={
                        <Typography
                          variant="body1"
                          style={{ color: "#000000", fontSize: 14 }}
                        >
                          {"Custom Software"}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "#48C43C" }}
                          checked={selectedOptions.includes("Option 4")}
                          onChange={handleChange}
                          value="Option 4"
                          name="Option 4"
                        />
                      }
                      label={
                        <Typography
                          variant="body1"
                          style={{ color: "#000000", fontSize: 14 }}
                        >
                          {"Cloud & DevOps"}
                        </Typography>
                      }
                    />
                  </div>
                </FormGroup>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#48C43C" }}
                >
                  Connect
                </Button>
              </FormControl>
            </div>
          </div>
          <div className="col-span-6 bg-greyish p-4">
            <div className=" bg-white h-full flex flex-col justify-around p-4">
              <div className="">
                <h1 className="text-primary font-bold  font-fira">
                  {" Introduction"}
                </h1>
                <h1 className="text-xl text-black font-bold font-bungee mb-2">
                  {" You Think It, We Build It"}
                </h1>
                <h1 className="text-black font-fira text-justify">
                  {
                    "At Sruvi Inc, we are more than lines of code; we are architects of innovation. Our mission? To transform ideas into elegant software solutions that propel businesses forward."
                  }
                </h1>
              </div>
              <div>
                <h1 className="text-primary font-fira font-bold">
                  {"Why we stand out ?"}
                </h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 p-2  items-center flex flex-row">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>

                    <h1 className="text-black font-bold text-md font-fira ">
                      {"Bengaluru Roots, Global Impact"}
                    </h1>
                  </div>
                  <div className=" col-span-1 p-2  items-center flex">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>
                    <h1 className="text-black font-bold text-md font-fira ">
                      {"Crafting Digital Experiences"}
                    </h1>
                  </div>
                  <div className=" col-span-1 p-2  items-center flex">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>
                    <h1 className="text-black font-bold text-md font-fira ">
                      {"Agile Development, Impeccable Execution"}
                    </h1>
                  </div>
                  <div className=" col-span-1 p-2  items-center flex">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>
                    <h1 className="text-black font-bold text-md font-fira ">
                      {"Innovate, Iterate, Elevate"}
                    </h1>
                  </div>
                  <div className=" col-span-1 p-2  items-center flex">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>
                    <h1 className="text-black font-bold text-md font-fira">
                      {" Client-Centric Approach"}
                    </h1>
                  </div>
                  <div className="col-span-1 p-2  items-center flex">
                    <div className="flex flex-col mr-2 justify-center">
                      <div className="bg-primary h-1 w-1 rounded"></div>
                      <div className="bg-black h-1 w-1  rounded"></div>
                      <div className="bg-primary h-1 w-1  rounded"></div>
                    </div>
                    <h1 className="text-black font-bold text-md font-fira ">
                      {"Proprietary Technology"}
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-primary font-fira font-bold">Our Team</h1>
                <h1 className="text-md text-black  font-fira text-justify">
                  {
                    "At SRUVI Inc, our team is not just a workforce; we are a family fueled by passion and purpose. Together, we build the future—one line of code at a time."
                  }
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuickAccess;
