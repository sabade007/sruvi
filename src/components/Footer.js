import React from "react";

const Footer = () => {
  const OfficeIcon = (props) => (
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
        d="M14 22V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 15H17.5M18.5 11H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 8H14V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  const SmartPhone01Icon = (props) => (
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
        d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
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
        d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MailAtSign01Icon = (props) => (
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
        d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="bg-greyish w-full zero:hidden sm:hidden md:hidden lg:block xl:block p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col col-span-1 bg-white p-4 h-full">
          <h1 className="text-black tracking-wide text-3xl font-bungee mt-4">
            {" Sruvi Inc"}
          </h1>
          <div className="grid grid-cols-10 mt-4">
            <div className="col-span-4 ">
              <div className="flex flex-row">
                <OfficeIcon />
                <h1 className="text-black tracking-wide text-lg font-bungee ml-4">
                  {" Office"}
                </h1>
              </div>
            </div>
            <div className="col-span-6 ">
              <h1 className="text-black text-justify font-fira">
                {
                  "No 99, 3rd Floor , 4th Main Road , PoornaPragna Layout , Kathriguppe, Bengaluru - 560085"
                }
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-10 mt-4">
            <div className="col-span-4 ">
              <div className="flex flex-row">
                <SmartPhone01Icon />
                <h1 className="text-black tracking-wide text-lg font-bungee ml-4">
                  {"Mobile"}
                </h1>
              </div>
            </div>
            <div className="col-span-6 ">
              <h1 className="text-black text-justify font-fira">
                {"+91 97311 71611"}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-10 mt-4">
            <div className="col-span-4 ">
              <div className="flex flex-row">
                <MailAtSign01Icon />
                <h1 className="text-black tracking-wide text-lg font-bungee ml-4">
                  {"E-mail"}
                </h1>
              </div>
            </div>
            <div className="col-span-6 ">
              <h1 className="text-black text-justify font-fira">
                {"hello@incsruvi.com"}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex col-span-1 bg-white p-4 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.612880220335!2d77.54768747683404!3d12.932584415728991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f21daf5fcbf%3A0xe1ed78a0caa5c868!2sSRUVI%20INC!5e0!3m2!1sen!2sin!4v1718123384752!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
