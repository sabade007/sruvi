import React, { useEffect, useState } from "react";
import {
  Card,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputAdornment,
  TextField,
  Checkbox,
  Alert,
  Button,
} from "@mui/material";

import {
  AccountBox,
  Email,
  Forward30Rounded,
  ForwardRounded,
  HomeRounded,
  PhoneIphone,
} from "@mui/icons-material";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { motion } from "framer-motion";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const GetForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [webselectedOptions, setwebselectedOptions] = useState([]);
  const [appselectedOptions, setappselectedOptions] = useState([]);
  const [softwareselectedOptions, setsoftwareselectedOptions] = useState([]);
  const [businessselectedOptions, setbusinessselectedOptions] = useState([]);
  const [cloudselectedOptions, setcloudselectedOptions] = useState([]);
  const [seoselectefdOptions, setseoselectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else if (prevSelectedOptions.length < 2) {
        return [...prevSelectedOptions, value];
      } else {
        return prevSelectedOptions;
      }
    });
  };

  const handleChangeWeb = (event) => {
    const value = event.target.value;
    setwebselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleChangeapp = (event) => {
    const value = event.target.value;
    setappselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handlesoftware = (event) => {
    const value = event.target.value;
    setsoftwareselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handlebusiness = (event) => {
    const value = event.target.value;
    setbusinessselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };
  const handlecloud = (event) => {
    const value = event.target.value;
    setcloudselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleseos = (event) => {
    const value = event.target.value;
    setseoselectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [formorignalcomplete, setFormOrignalComplete] = useState(true);
  const [form1complete, setForm1Complete] = useState(false);
  const [form2complete, setForm2Complete] = useState(false);
  const [form3start, setForm3Start] = useState(false);

  const handlesubmit = async () => {
    if (name === "" || email === "" || phone === "") {
      alert("Please fill all the fields");

      return;
    }
    if (phone.length != 10) {
      alert("Verify your mobile number");
      return;
    }
    const colRef = collection(db, "GettingStarted");
    const docRef = doc(colRef, phone);
    await setDoc(docRef, {
      name: name,
      email: email,
      phone: phone,
    });

    setFormOrignalComplete(false);
    setForm1Complete(true);
  };

  const [website, setwebsite] = useState(false);
  const [apps, setapps] = useState(false);
  const [software, setsoftware] = useState(false);
  const [business, setbusiness] = useState(false);
  const [cloud, setcloud] = useState(false);
  const [seos, setseos] = useState(false);

  const handlesubmit2 = async () => {
    setForm1Complete(false);
    if (selectedOptions.length === 0) {
      alert("Please select at least one option");
      return;
    }
    if (selectedOptions.includes("Website")) {
      setwebsite(true);
    }
    if (selectedOptions.includes("Mobile Apps")) {
      setapps(true);
    }
    if (selectedOptions.includes("Custom Software")) {
      setsoftware(true);
    }
    if (selectedOptions.includes("Business Consulting")) {
      setbusiness(true);
    }
    if (selectedOptions.includes("Cloud & Devops")) {
      setcloud(true);
    }
    if (selectedOptions.includes("Seo & Digital Marketing")) {
      setseos(true);
    }

    setForm2Complete(true);
  };

  const handleform2submit = async () => {
    setForm2Complete(false);
    setForm3Start(true);
  };

  const [moredetails, setmoredetails] = useState("");
  const [form3complete, setForm3Complete] = useState(false);

  const handlefinish = async () => {
    setForm3Start(false);
    setForm3Complete(true);

    const colRef = collection(db, "GettingStarted");
    const docRef = doc(colRef, phone);

    await setDoc(docRef, {
      name: name,
      email: email,
      phone: phone,
      website: website,
      apps: apps,
      software: software,
      business: business,
      cloud: cloud,
      seos: seos,
      moredetails: moredetails,
      selectedOptions: selectedOptions,
      webselectedOptions: webselectedOptions,
      appselectedOptions: appselectedOptions,
      softwareselectedOptions: softwareselectedOptions,
      businessselectedOptions: businessselectedOptions,
      cloudselectedOptions: cloudselectedOptions,
      seoselectefdOptions: seoselectefdOptions,
    });
  };

  return (
    <div className=" flex  w-full rounded-2xl">
      {formorignalcomplete ? (
        <motion.div className="w-full " initial={{ opacity: 1 }}>
          <FormControl className="w-full">
            <h1 className="text-black  font-fira  lg:text-lg xl:text-xl xxl:text-2xl">
              {"Let's Connect"}
            </h1>
            <div className="w-full flex grid grid-cols-2 gap-4 mt-4">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
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
                required
                style={{}}
                placeholder="Name"
                label="Name"
                value={name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBox className="text-orange" />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                required
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontFamily: "'Fira Sans', sans-serif",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphone className="text-orange" />
                    </InputAdornment>
                  ),
                }}
                style={{}}
                placeholder="Mobile Number"
                label="Mobile Number"
              />
            </div>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-4"
              value={email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
              required
              InputLabelProps={{
                style: {
                  color: "black",
                  fontFamily: "'Fira Sans', sans-serif",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className="text-orange" />
                  </InputAdornment>
                ),
              }}
              style={{}}
              placeholder="Email"
              label="Email"
            />
            <div className="w-full flex  justify-end  mt-4">
              <div
                className="flex flex-row bg-orange p-2 rounded-full items-center cursor-pointer "
                onClick={handlesubmit}
              >
                <h1 className="text-white font-bungee tracking-widest">Next</h1>
                <ForwardRounded className="text-white" fontSize="small" />
              </div>
            </div>
          </FormControl>
        </motion.div>
      ) : null}

      {form1complete ? (
        <motion.div className="w-full">
          <FormControl className="w-full">
            <h1 className="text-black  font-fira  text-xl">
              {"Let's Discuss"}
            </h1>

            <h1 className="text-black  font-fira  text-lg mb-4">
              {"What service are you looking for?"}
            </h1>
            <FormHelperText>You can select up to 2 options</FormHelperText>

            <FormGroup>
              <div className="flex grid grid-cols-3 gap-4 mb-4">
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
                      checked={selectedOptions.includes("Mobile Apps")}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#48C43C" }}
                      checked={selectedOptions.includes("Custom Software")}
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
                      checked={selectedOptions.includes("Business Consulting")}
                      onChange={handleChange}
                      value="Business Consulting"
                      name="Business Consulting"
                    />
                  }
                  label={
                    <h1 className="text-black font-bungee text-md">
                      {"Business Consulting"}
                    </h1>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#48C43C" }}
                      checked={selectedOptions.includes(
                        "Seo & Digital Marketing"
                      )}
                      onChange={handleChange}
                      value="Seo & Digital Marketing"
                      name="Seo & Digital Marketing"
                    />
                  }
                  label={
                    <h1 className="text-black font-bungee text-md">
                      {"Seo & Digital Marketing"}
                    </h1>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#48C43C" }}
                      checked={selectedOptions.includes("Cloud & Devops")}
                      onChange={handleChange}
                      value="Cloud & Devops"
                      name="Cloud & Devops"
                    />
                  }
                  label={
                    <h1 className="text-black font-bungee text-md">
                      {"Cloud & Devops"}
                    </h1>
                  }
                />
              </div>
            </FormGroup>

            <div className="w-full flex  justify-end  mt-4">
              <div
                className="flex flex-row  bg-orange p-2 rounded-full items-center cursor-pointer "
                onClick={handlesubmit2}
              >
                <h1 className="text-white font-bungee tracking-widest">Next</h1>
                <ForwardRounded className="text-white" fontSize="small" />
              </div>
            </div>
          </FormControl>
        </motion.div>
      ) : null}

      {form2complete ? (
        <div className="w-full">
          {website && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange">
              <h1 className="text-orange  font-bungee  text-md ">
                Website Development
              </h1>
              <FormHelperText>
                Select the options which suits your requirement. You can select
                multiple options
              </FormHelperText>
              <FormGroup className="w-full">
                <div className="flex grid grid-cols-2  ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={webselectedOptions.includes("Create a new")}
                        onChange={handleChangeWeb}
                        value="Create a new"
                        name="Create a new"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Create a new Website"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={webselectedOptions.includes("Maintain")}
                        onChange={handleChangeWeb}
                        value="Maintain"
                        name="Maintain"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Maintain my website"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={webselectedOptions.includes("Upgrade")}
                        onChange={handleChangeWeb}
                        value="Upgrade"
                        name="Upgrade"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Upgrade my website"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={webselectedOptions.includes("seo")}
                        onChange={handleChangeWeb}
                        value="seo"
                        name="seo"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Add Seo to my website"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={webselectedOptions.includes("domain")}
                        onChange={handleChangeWeb}
                        value="domain"
                        name="domain"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Domain and Hosting Services"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}

          {apps && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange mt-4">
              <h1 className="text-orange  font-bungee  text-md ">
                Mobile Apps Development
              </h1>
              <FormHelperText>
                Select the options which suits your requirement. You can select
                multiple options
              </FormHelperText>

              <FormGroup className="w-full">
                <div className="flex grid grid-cols-2 w-full ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={appselectedOptions.includes("For Android")}
                        onChange={handleChangeapp}
                        value="For Android"
                        name="For Android"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"For Android"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={appselectedOptions.includes("For IOS(Apple)")}
                        onChange={handleChangeapp}
                        value="For IOS(Apple)"
                        name="For IOS(Apple)"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"For IOS(Apple)"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={appselectedOptions.includes(
                          "On Both Platforms"
                        )}
                        onChange={handleChangeapp}
                        value="On Both Platforms"
                        name="On Both Platforms"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"On Both Platforms"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={appselectedOptions.includes("E-commerce")}
                        onChange={handleChangeapp}
                        value="E-commerce"
                        name="E-commerce"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"My App is for E-commerce"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={appselectedOptions.includes("web connected")}
                        onChange={handleChangeapp}
                        value="web connected"
                        name="web connected"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"I want to connect my Apps to my website as well"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}

          {software && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange mt-4">
              <h1 className="text-orange  font-bungee  text-md ">
                Custom Software Development
              </h1>
              <FormHelperText>
                Select the options which defines your requirement. You can
                select multiple options
              </FormHelperText>
              <FormGroup className="w-full" style={{ width: "100%" }}>
                <div className="flex grid grid-cols-2 w-full ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={softwareselectedOptions.includes("Windows")}
                        onChange={handlesoftware}
                        value="Windows"
                        name="Windows"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"For Windows Platform"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={softwareselectedOptions.includes(
                          "For MacOS(Apple)"
                        )}
                        onChange={handlesoftware}
                        value="For MacOS(Apple)"
                        name="For MacOS(Apple)"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"For MacOS(Apple) Platform"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={softwareselectedOptions.includes(
                          "Custom Needs"
                        )}
                        onChange={handlesoftware}
                        value="Custom Needs"
                        name="Custom Needs"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Custom Needs"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}

          {business && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange mt-4">
              <h1 className="text-orange  font-bungee  text-md ">
                Business Consulting
              </h1>
              <FormHelperText>
                Select the options which defines your requirement. You can
                select multiple options
              </FormHelperText>
              <FormGroup className="w-full">
                <div className="flex grid grid-cols-2 w-full ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={businessselectedOptions.includes(
                          "Market Survey"
                        )}
                        onChange={handlebusiness}
                        value="Market Survey"
                        name="Market Survey"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Market Research Survey"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={businessselectedOptions.includes(
                          "Product Development"
                        )}
                        onChange={handlebusiness}
                        value="Product Development"
                        name="Product Development"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Product Development"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={businessselectedOptions.includes(
                          "SWOT Analysis"
                        )}
                        onChange={handlebusiness}
                        value="SWOT Analysis"
                        name="SWOT Analysis"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"SWOT Analysis"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={businessselectedOptions.includes(
                          "Automated Business Analysis"
                        )}
                        onChange={handlebusiness}
                        value="Automated Business Analysis"
                        name="Automated Business Analysis"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Automated Business Analysis"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}

          {cloud && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange mt-4">
              <h1 className="text-orange  font-bungee  text-md ">
                DevOps & Cloud Consulting
              </h1>
              <FormHelperText>
                Select the options which defines your requirement. You can
                select multiple options
              </FormHelperText>
              <FormGroup className="w-full">
                <div className="flex grid grid-cols-2 w-full ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={cloudselectedOptions.includes("Automation")}
                        onChange={handlecloud}
                        value="Automation"
                        name="Automation"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Automation"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={cloudselectedOptions.includes(
                          "Servers, Storage, Databases and Services"
                        )}
                        onChange={handlecloud}
                        value="Servers, Storage, Databases and Services"
                        name="Servers, Storage, Databases and Services"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Servers, Storage, Databases and Services"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}
          {seos && (
            <div className="w-full rounded-2xl bg-white p-4 border border-orange mt-4">
              <h1 className="text-orange  font-bungee  text-md ">
                SEO and Digital Marketing
              </h1>
              <FormHelperText>
                Select the options which defines your requirement. You can
                select multiple options
              </FormHelperText>
              <FormGroup className="w-full">
                <div className="flex grid grid-cols-2 w-full ">
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Search Engine Optimization"
                        )}
                        onChange={handleseos}
                        value="Search Engine Optimization"
                        name="Search Engine Optimization"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Search Engine Optimization"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Email Marketing"
                        )}
                        onChange={handleseos}
                        value="Email Marketing"
                        name="Email Marketing"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Email Marketing"}
                      </h1>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Pay Per Click Advertising"
                        )}
                        onChange={handleseos}
                        value="Pay Per Click Advertising"
                        name="Pay Per Click Advertising"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Pay Per Click Advertising"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Social Media Marketing"
                        )}
                        onChange={handleseos}
                        value="Social Media Marketing"
                        name="Social Media Marketing"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Social Media Marketing"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Lead Generation"
                        )}
                        onChange={handleseos}
                        value="Lead Generation"
                        name="Lead Generation"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Lead Generation"}
                      </h1>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#48C43C" }}
                        checked={seoselectefdOptions.includes(
                          "Analytics and Data Insights"
                        )}
                        onChange={handleseos}
                        value="Analytics and Data Insights"
                        name="Analytics and Data Insights"
                      />
                    }
                    label={
                      <h1 className="text-black font-bungee text-md">
                        {"Analytics and Data Insights"}
                      </h1>
                    }
                  />
                </div>
              </FormGroup>
            </div>
          )}

          <div className="w-full flex  justify-end  mt-4">
            <div
              className="flex flex-row bg-orange rounded-2xl p-2  items-center cursor-pointer "
              onClick={handleform2submit}
            >
              <h1 className="text-white font-bungee tracking-widest">Next</h1>
              <ForwardRounded className="text-white" fontSize="small" />
            </div>
          </div>
        </div>
      ) : null}

      {form3start ? (
        <div className="w-full">
          <h1 className="text-black font-fira font-bold text-md">Last Step!</h1>
          <h1 className="text-black font-fira text-md">
            Anything you would like to tell us?
          </h1>
          <TextField
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
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
            style={{}}
            placeholder="Tell us about your project or have a Query (you can skip this)"
            label="More Details"
            focused
            value={moredetails}
            multiline
            rows={4}
            onChange={(e) => setmoredetails(e.target.value)}
            className="mt-4"
          />

          <div className="mt-4 w-full">
            <h1 className="text-black font-fira font-bold text-md">
              Let us know your convenient Date and Time to get in touch with
              you.
            </h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex grid grid-cols-2 w-full gap-4 mt-4">
                <DatePicker
                  onChange={(newValue) => {
                    setdate(newValue);
                  }}
                  value={date}
                />
                <TimePicker />
              </div>
            </LocalizationProvider>

            <div className="w-full flex  justify-end  mt-4">
              <div
                className="flex flex-row  bg-orange p-2 rounded-full items-center cursor-pointer "
                onClick={handlefinish}
              >
                <h1 className="text-white font-bungee tracking-widest">
                  Finish
                </h1>
                <ForwardRounded className="text-white" fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {form3complete ? (
        <div className="w-full">
          <h1 className="text-black font-fira  text-md">
            We are
            <span className="text-orange font-bungee text-lg">
              {" Connected Digitally. "}
            </span>
            Connecting you with our team as scheduled.
          </h1>
          <hr className="w-full mt-4 border-gray" />
          <div className="w-full flex  justify-end  mt-4">
            <div
              className="flex flex-row bg-orange p-2 rounded-full items-center cursor-pointer "
              onClick={() => (window.location.href = "/home")}
            >
              <HomeRounded style={{ color: "#fff" }} fontSize="small" />
              <h1 className="text-white font-bungee ">Home</h1>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GetForm;
