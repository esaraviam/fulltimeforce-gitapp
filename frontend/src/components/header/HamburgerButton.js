import React from "react";

export const HamburgerButton = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <button
      className="text-gray-500 hover:text-gray-600 "
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => {
        console.log(sidebarOpen);
        setSidebarOpen(!sidebarOpen);
      }}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="5" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="17" width="16" height="2" />
      </svg>
    </button>
  );
};
