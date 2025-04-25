import React from "react";

const DevBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs py-2 px-4 text-center shadow-sm">
      🚧 This project is under development and may contain incomplete features.{" "}
      <a
        href="https://www.linkedin.com/in/abdul-wasay-4765b82a6/" // change to your preferred contact link
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-200 ml-1"
      >
        Contact me for more details
      </a>
    </div>
  );
};

export default DevBanner;
