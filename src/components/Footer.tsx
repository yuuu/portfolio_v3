import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 body-font">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-center h-14">
          <p className="flex flex-col text-white sm:py-2">
            <span className="text-xs">
              Copyright © {new Date().getFullYear()} yuuu. All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
