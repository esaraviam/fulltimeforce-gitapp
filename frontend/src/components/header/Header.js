import React from "react";
import { Search } from "./Search";
import { HamburgerButton } from "./HamburgerButton";

function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <HamburgerButton />
          </div>

          <div className="flex items-center">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
