import React, { useState } from "react";
import { Button, Container, MenuItem, Select, TextField } from "@mui/material";
import { db } from "../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import AnimateddivT2B from "@/animations/AnimateddivT2B";

const QuickAccess3 = () => {
  const Payment02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={50}
      height={50}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2 3.75C1.58579 3.75 1.25 4.08579 1.25 4.5C1.25 4.91421 1.58579 5.25 2 5.25V3.75ZM10.8787 5.37868L10.3483 5.90901L10.3483 5.90901L10.8787 5.37868ZM13.4697 9.03033C13.7626 9.32322 14.2374 9.32322 14.5303 9.03033C14.8232 8.73744 14.8232 8.26256 14.5303 7.96967L13.4697 9.03033ZM2 5.25H8.75736V3.75H2V5.25ZM10.3483 5.90901L13.4697 9.03033L14.5303 7.96967L11.409 4.84835L10.3483 5.90901ZM8.75736 5.25C9.3541 5.25 9.92639 5.48705 10.3483 5.90901L11.409 4.84835C10.7057 4.14509 9.75192 3.75 8.75736 3.75V5.25Z"
        fill="currentColor"
      />
      <path
        d="M5 13.5H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.03033 6.96967C8.73744 6.67678 8.26256 6.67678 7.96967 6.96967C7.67678 7.26256 7.67678 7.73744 7.96967 8.03033L9.03033 6.96967ZM10.5 9.5L11.0303 8.96967V8.96967L10.5 9.5ZM7 10L7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L7 10ZM3.95 9.4C3.61863 9.15147 3.14853 9.21863 2.9 9.55C2.65147 9.88137 2.71863 10.3515 3.05 10.6L3.95 9.4ZM10.5 11.5L9.96967 10.9697L9.96967 10.9697L10.5 11.5ZM7.96967 8.03033L9.96967 10.0303L11.0303 8.96967L9.03033 6.96967L7.96967 8.03033ZM9.03033 10.9697L7.53033 9.46967L6.46967 10.5303L7.96967 12.0303L9.03033 10.9697ZM4.25294 9.62721L3.95 9.4L3.05 10.6L3.35294 10.8272L4.25294 9.62721ZM6.46967 9.46967C5.8729 10.0664 4.92812 10.1336 4.25294 9.62721L3.35294 10.8272C4.6253 11.7815 6.40572 11.6549 7.53033 10.5303L6.46967 9.46967ZM9.96967 10.9697C9.71028 11.2291 9.28972 11.2291 9.03033 10.9697L7.96967 12.0303C8.81485 12.8755 10.1852 12.8755 11.0303 12.0303L9.96967 10.9697ZM9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96967 10.9697L11.0303 12.0303C11.8755 11.1852 11.8755 9.81485 11.0303 8.96967L9.96967 10.0303Z"
        fill="currentColor"
      />
      <path
        d="M5 11V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 14C15.25 14.9665 14.4665 15.75 13.5 15.75C12.5335 15.75 11.75 14.9665 11.75 14C11.75 13.0335 12.5335 12.25 13.5 12.25C14.4665 12.25 15.25 13.0335 15.25 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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

  const [projectName, setProjectName] = useState("");
  const [nameofCompanyOrIndividual, setNameofCompanyOrIndividual] =
    useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [tellUsAboutYourProject, setTellUsAboutYourProject] = useState("");
  const [selectedOption, setSelectedOption] = useState("Web Development");
  const [success, setSuccess] = useState(false);

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleNameofCompanyOrIndividual = (event) => {
    setNameofCompanyOrIndividual(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumber = (event) => {
    setMobile(event.target.value);
  };

  const handleTellUsAboutYourProject = (event) => {
    setTellUsAboutYourProject(event.target.value);
  };

  const handleSubmit = async () => {
    if (
      projectName === "" ||
      nameofCompanyOrIndividual === "" ||
      email === "" ||
      mobile === "" ||
      tellUsAboutYourProject === "" ||
      selectedOption === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (mobile.length != 10) {
      alert("Verify your mobile number");
      return;
    }

    const colRef = collection(db, "GetAQuote");

    const docRef = doc(colRef, mobile);
    await setDoc(docRef, {
      projectName: projectName,
      nameofCompanyOrIndividual: nameofCompanyOrIndividual,
      email: email,
      mobile: mobile,
      tellUsAboutYourProject: tellUsAboutYourProject,
      selectedOption: selectedOption,
    });

    setSuccess(true);
  };

  return (
    <div className="zero:hidden sm:hidden md:hidden lg:block xl:block">
      <Container maxWidth="xl" className="p-4">
        <div className="p-4 h-full bg-greyish">
          <AnimateddivT2B>
            <div className="bg-white p-4 h-full flex flex-col justify-between shadow-2xl rounded-lg">
              <div className="flex flex-row ">
                <Payment02Icon />
                <div className="ml-4">
                  <h1 className="text-black  font-bungee text-2xl ">
                    {"Unlock your Vision : Get a Quote"}
                  </h1>
                  <h1 className="text-black text-md font-fira text-justify mt-2">
                    {
                      "Ready to turn your ideas into reality? Let's make it happen! Our team of seasoned developers, architects, and tech enthusiasts is eager to collaborate with you."
                    }
                  </h1>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <TextField
                        disabled={success ? true : false}
                        fullWidth
                        label={
                          <h1 className="text-black opacity-70 font-bungee">
                            {"Project Name*"}
                          </h1>
                        }
                        variant="outlined"
                        className="font-bungee"
                        onChange={handleProjectName}
                      />
                    </div>
                    <div className="col-span-1">
                      <TextField
                        disabled={success ? true : false}
                        fullWidth
                        label={
                          <h1 className="text-black opacity-70 font-bungee">
                            {"Name of the Company or Individual*"}
                          </h1>
                        }
                        variant="outlined"
                        onChange={handleNameofCompanyOrIndividual}
                      />
                    </div>
                    <div className="flex flex-col col-span-1 h-full justify-between">
                      <Select
                        disabled={success ? true : false}
                        fullWidth
                        required
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <MenuItem value="Web Development">
                          <h1 className="text-black font-bungee">
                            {"Web Development"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="Mobile App Development">
                          <h1 className="text-black font-bungee">
                            {"Mobile App Development"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="Software Development">
                          <h1 className="text-black font-bungee">
                            {"Software Development"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="UI/UX Design">
                          <h1 className="text-black font-bungee">
                            {"UI/UX Design"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="Digital Marketing">
                          <h1 className="text-black font-bungee">
                            {"Digital Marketing"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="Cloud Computing">
                          <h1 className="text-black font-bungee">
                            {"Cloud Computing"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="Devops">
                          <h1 className="text-black font-bungee">{"Devops"}</h1>
                        </MenuItem>
                        <MenuItem value="Website hosting and Maintainance">
                          <h1 className="text-black font-bungee">
                            {"Website hosting and Maintainance"}
                          </h1>
                        </MenuItem>
                        <MenuItem value="seo">
                          <h1 className="text-black font-bungee">{"SEO"}</h1>
                        </MenuItem>
                        <MenuItem value="Other">
                          <h1 className="text-black font-bungee">{"Other"}</h1>
                        </MenuItem>
                      </Select>
                      <TextField
                        disabled={success ? true : false}
                        fullWidth
                        className=""
                        label={
                          <h1 className="text-black opacity-70 font-bungee">
                            {"Email*"}
                          </h1>
                        }
                        variant="outlined"
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="flex  col-span-1 h-full justify-between">
                      <TextField
                        disabled={success ? true : false}
                        fullWidth
                        multiline
                        rows={4}
                        label={
                          <div>
                            <h1 className="text-black opacity-70 font-bungee">
                              {"Tell us about your project*"}
                            </h1>
                          </div>
                        }
                        variant="outlined"
                        onChange={handleTellUsAboutYourProject}
                      />
                    </div>
                    <div className="flex  col-span-1 h-full justify-between">
                      <TextField
                        disabled={success ? true : false}
                        fullWidth
                        label={
                          <div>
                            <h1 className="text-black opacity-70 font-bungee">
                              {"Mobile Number *"}
                            </h1>
                          </div>
                        }
                        variant="outlined"
                        onChange={handleMobileNumber}
                      />
                    </div>
                    <div className="flex  col-span-1 h-full justify-between">
                      {success ? (
                        <div className="flex flex-row items-center justify-center">
                          <TickDouble04Icon />
                          <h1 className="text-black  font-bungee">
                            Thank you for your interest. We will get back to you
                            shortly.
                          </h1>
                        </div>
                      ) : (
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={handleSubmit}
                          style={{ backgroundColor: "#48c43c" }}
                        >
                          <h1 className=" text-white font-bungee text-lg">
                            {"Get a Quote"}
                          </h1>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateddivT2B>
        </div>
      </Container>
    </div>
  );
};

export default QuickAccess3;
