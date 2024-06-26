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
import AnimateddivR2L from "@/animations/AnimateddivR2L";

import Animatediv from "@/animations/Animatediv";
import { collection, doc, setDoc } from "firebase/firestore";

import { db } from "../../firebase";

const QuickAccess = () => {
  const TickDouble04Icon = (props) => (
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
        d="M21.8966 6.63081C22.2168 7.52828 21.7678 8.14274 20.8986 8.748C20.1973 9.23636 19.3039 9.76542 18.3572 10.6699C17.4291 11.5566 16.5234 12.6246 15.7184 13.6758C14.743 14.9496 13.8206 16.2801 13.0087 17.6655C12.7026 18.1902 12.1521 18.5078 11.5619 18.4999C10.9716 18.4919 10.4293 18.1597 10.1364 17.6267C9.38765 16.264 8.80986 15.7259 8.5443 15.5326C7.8075 14.9963 7 14.9035 7 13.7335C7 12.7762 7.74623 12.0002 8.66675 12.0002C9.32548 12.0266 9.92854 12.3088 10.4559 12.6927C10.7981 12.9418 11.1605 13.2711 11.5375 13.7047C11.9799 13.051 12.5131 12.2968 13.1107 11.5163C13.9787 10.3829 15.0032 9.16689 16.1019 8.11719C17.1819 7.08531 18.4306 6.11941 19.7542 5.60872C20.6172 5.27573 21.5764 5.73333 21.8966 6.63081Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.43961 12.0755C4.28117 12.0236 4.13796 11.9909 4.01252 11.9713C3.94995 11.9615 3.89226 11.955 3.83976 11.951L3.69887 11.9454C2.76061 11.9454 2 12.728 2 13.6933C2 14.5669 2.62294 15.2908 3.43675 15.4205C3.4652 15.4355 3.51137 15.4624 3.57407 15.5076C3.84474 15.7025 4.43367 16.2452 5.19686 17.6193C5.49542 18.1569 6.04811 18.4918 6.64983 18.4999C7.06202 18.5054 7.45518 18.3567 7.76226 18.0924M15 5.5C13.6509 6.015 12.3781 6.98904 11.2773 8.02963C10.8929 8.39299 10.5174 8.77611 10.1542 9.16884"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CheckmarkBadge02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={60}
      height={60}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 12.8929L10.8 14.5L15 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const [mobileChecked, setMobileChecked] = React.useState(true);
  const [emailChecked, setEmailChecked] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

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

  const submit = async () => {
    if (name === "") {
      alert("Please enter your name");
      return;
    }

    if (emailChecked) {
      if (email === "") {
        alert("Email cannot be empty");
        return;
      }
    }

    if (mobileChecked) {
      if (mobileNumber.length != 10) {
        alert("Verify your mobile number");
        return;
      }
    }

    if (selectedOptions.length === 0) {
      alert("Please select at least one option of what you are interested in");
      return;
    }

    const colRef = collection(db, "GetinTouch");

    if (mobileChecked) {
      const docRef = doc(colRef, mobileNumber);
      await setDoc(docRef, {
        name: name,
        mobile: mobileNumber,
        options: selectedOptions,
      });
      setSubmitSuccess(true);
    } else if (emailChecked) {
      const docRef = doc(colRef, email);
      await setDoc(docRef, {
        name: name,
        email: email,
        options: selectedOptions,
      });
      setSubmitSuccess(true);
    }
  };

  return (
    <div className="zero:hidden sm:hidden md:hidden lg:block xl:block">
      <Container maxWidth="xl" className="p-4">
        <AnimateddivT2B>
          <div className="p-4 bg-white">
            <div className="flex flex-row items-center">
              <AcUnitIcon className="text-primary" fontSize="large" />
              <h1 className="text-2xl text-black  font-bungee ml-2 tracking-wide">
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
            <Animatediv>
              <div className=" bg-white h-full flex flex-col justify-between p-4">
                {submitSuccess ? (
                  <div className="flex flex-col justify-center items-center h-full">
                    <CheckmarkBadge02Icon />
                    <h1 className="text-black font-fira text-justify">
                      {
                        "Your journey begins with us! We've received your request, and our team is already on the move. Expect a prompt response from us soon. In the meantime, feel free to explore our services and get ready for an exciting collaboration. Thank you for choosing Sruvi Inc.!"
                      }
                    </h1>
                  </div>
                ) : (
                  <div>
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
                        <h1 className="text-black text-2xl  font-bungee ">
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

                      <div className="mt-4">
                        <TextField
                          fullWidth
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
                      </div>

                      <h1 className="text-black  font-bungee mt-2">
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
                            className="p-1 text-black   font-bungee tracking-widest"
                            style={{
                              color: mobileChecked ? "#48C43C" : "black",
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
                            className="p-1 text-black  font-bungee tracking-widest"
                            style={{
                              color: emailChecked ? "#48C43C" : "black",
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

                      <h1 className="text-black  font-bungee mt-2 tracking-widest">
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
                                checked={selectedOptions.includes("Website")}
                                onChange={handleChange}
                                value="Website"
                                name="Website"
                              />
                            }
                            label={
                              <h1 className="text-black font-bungee text-md">
                                {"Website Development"}
                              </h1>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "#48C43C" }}
                                checked={selectedOptions.includes(
                                  "Mobile Apps"
                                )}
                                onChange={handleChange}
                                value="Mobile Apps"
                                name="Mobile Apps"
                              />
                            }
                            label={
                              <h1 className="text-black font-bungee text-md">
                                {"Mobile Apps"}
                              </h1>
                            }
                          />
                        </div>
                        <div className="flex grid grid-cols-2 gap-4 mb-4">
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "#48C43C" }}
                                checked={selectedOptions.includes(
                                  "Custom Software"
                                )}
                                onChange={handleChange}
                                value="Custom Software"
                                name="Custom Software"
                              />
                            }
                            label={
                              <h1 className="text-black font-bungee text-md">
                                {"Custom Software"}
                              </h1>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "#48C43C" }}
                                checked={selectedOptions.includes(
                                  "Cloud & DevOps"
                                )}
                                onChange={handleChange}
                                value="Cloud & DevOps"
                                name="Cloud & DevOps"
                              />
                            }
                            label={
                              <h1 className="text-black font-bungee text-md">
                                {"Cloud & DevOps"}
                              </h1>
                            }
                          />
                        </div>
                      </FormGroup>

                      <Button
                        onClick={submit}
                        variant="contained"
                        style={{
                          backgroundColor: "#48C43C",
                        }}
                      >
                        <h1 className="text-white font-bungee text-md">
                          {"Connect with us"}
                        </h1>
                      </Button>
                    </FormControl>
                  </div>
                )}
              </div>
            </Animatediv>
          </div>

          <div className="col-span-6 bg-greyish p-4">
            <AnimateddivR2L>
              <div className=" bg-white h-full flex flex-col justify-between p-4">
                <div className="">
                  <h1 className="text-primary font-bungee text-xl  font-bungee">
                    {" Introduction"}
                  </h1>
                  <h1 className="text-3xl text-black  font-bungee mb-2">
                    {" You Think It, We Build It"}
                  </h1>
                  <h1 className="text-black font-fira text-justify">
                    {
                      "At Sruvi Inc, we are more than lines of code; we are architects of innovation. Our mission? To transform ideas into elegant software solutions that propel businesses forward."
                    }
                  </h1>
                </div>
                <div>
                  <h1 className="text-primary font-bungee text-lg">
                    {"Why we stand out ?"}
                  </h1>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 p-2  items-center flex flex-row">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>

                      <h1 className="text-black  text-md font-fira ">
                        {"Bengaluru Roots, Global Impact"}
                      </h1>
                    </div>
                    <div className=" col-span-1 p-2  items-center flex">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>
                      <h1 className="text-black  text-md font-fira ">
                        {"Crafting Digital Experiences"}
                      </h1>
                    </div>
                    <div className=" col-span-1 p-2  items-center flex">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>
                      <h1 className="text-black  text-md font-fira ">
                        {"Agile Development, Impeccable Execution"}
                      </h1>
                    </div>
                    <div className=" col-span-1 p-2  items-center flex">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>
                      <h1 className="text-black  text-md font-fira ">
                        {"Innovate, Iterate, Elevate"}
                      </h1>
                    </div>
                    <div className=" col-span-1 p-2  items-center flex">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>
                      <h1 className="text-black  text-md font-fira">
                        {" Client-Centric Approach"}
                      </h1>
                    </div>
                    <div className="col-span-1 p-2  items-center flex">
                      <div className="flex flex-col mr-2 justify-center">
                        <div className="bg-primary h-1 w-1 rounded"></div>
                        <div className="bg-black h-1 w-1  rounded"></div>
                        <div className="bg-primary h-1 w-1  rounded"></div>
                      </div>
                      <h1 className="text-black  text-md font-fira ">
                        {"Proprietary Technology"}
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-primary font-bungee tracking-widest text-lg ">
                    Our Team
                  </h1>
                  <h1 className="text-md text-black  font-fira text-justify">
                    {
                      "At SRUVI Inc, our team is not just a workforce; we are a family fueled by passion and purpose. Together, we build the future—one line of code at a time."
                    }
                  </h1>
                </div>
              </div>
            </AnimateddivR2L>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuickAccess;
