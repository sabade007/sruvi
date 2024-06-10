import React from "react";
import bg1 from "../../public/bg.png";

const QuickSeo = () => {
  const SeoIcon = (props) => (
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
        d="M5 20L7.41286 17.5871M7.41286 17.5871C8.21715 18.3914 9.32826 18.8889 10.5556 18.8889C13.0102 18.8889 15 16.899 15 14.4444C15 11.9898 13.0102 10 10.5556 10C8.10096 10 6.11111 11.9898 6.11111 14.4444C6.11111 15.6717 6.60857 16.7829 7.41286 17.5871Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 15.1877C2.36394 14.0914 2 12.8191 2 11.4623C2 7.34099 5.35786 4 9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 14.7114 19.913 17.4756 17 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  const Forward02Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
      color={"#48c43c"}
      fill={"none"}
      {...props}
    >
      <path
        d="M21.8371 12.9178C21.5547 13.6884 20.7014 14.3047 18.9948 15.5372C16.6677 17.218 15.5041 18.0583 14.5312 17.9969C13.7882 17.9499 13.0976 17.6007 12.6223 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 12.6223 6.96846C13.0976 6.39933 13.7882 6.0501 14.5312 6.00315C15.5041 5.94167 16.6677 6.78203 18.9948 8.46275C20.7014 9.6953 21.5547 10.3116 21.8371 11.0822C22.0543 11.675 22.0543 12.325 21.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.8371 12.9178C11.5547 13.6884 10.7014 14.3047 8.99482 15.5372C6.66769 17.218 5.50413 18.0583 4.5312 17.9969C3.78818 17.9499 3.09758 17.6007 2.62232 17.0315C2 16.2863 2 14.8575 2 12C2 9.14246 2 7.71369 2.62232 6.96846C3.09758 6.39933 3.78818 6.0501 4.5312 6.00315C5.50413 5.94167 6.66769 6.78203 8.99482 8.46275C10.7014 9.6953 11.5547 10.3116 11.8371 11.0822C12.0543 11.675 12.0543 12.325 11.8371 12.9178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div
      className="p-4 h-full"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white p-4 h-full flex flex-col justify-between shadow-2xl rounded-lg">
        <div>
          <div className="flex flex-row items-center">
            <SeoIcon />
            <h1 className="text-black text-xl  font-bold font-bungee ml-4">
              Search Engine Optimize
            </h1>
          </div>
          <h1 className="text-black font-bold text-lg font-fira mt-4">
            Unlock Your Digital Visibility with Sruvi Inc!
          </h1>

          <h1 className="text-black text-md font-fira text-justify mt-2">
            At Sruvi Inc, we don't just optimize; we amplify.Our experts wield
            keywords like magic spells.Content is our elixir. We brew blogs,
            infographics, and landing pages.We build bridges across the
            web—quality backlinks that lead to your domain.Data isn't just
            numbers; it's our crystal ball.
          </h1>
        </div>

        <div className="mt-4 flex flex-row justify-between">
          <h1 className="text-black font-bold text-lg font-fira">
            Ready to Rise in Rankings? Let's Talk SEO!
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Forward02Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSeo;
