import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { pageActionsToggleSideBar } from "../../redux/reducers/pageActions/pageActions.thunks";
import { useSelector, useDispatch } from "react-redux";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const dispatch = useDispatch();
  const sideBarState = useSelector((state) => state.sidebar);

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sideBarState.sidebar ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      dispatch(pageActionsToggleSideBar);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sideBarState.sidebar || keyCode !== 27) return;
      dispatch(pageActionsToggleSideBar);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="lg:w-64">
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sideBarState.sidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
          sideBarState.sidebar ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => dispatch(pageActionsToggleSideBar)}
            aria-controls="sidebar"
            aria-expanded={sideBarState.sidebar}
          >
            <span className="sr-only">Close sidebar</span>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <span className="text-white text-2xl font-bold">
              Esteban Saravia
            </span>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
            Github Repo links
          </h3>
          <ul className="mt-3">
            {/* Main */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <span className="text-sm font-medium">Commits</span>
                  <div className="flex flex-shrink-0 ml-2"></div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
