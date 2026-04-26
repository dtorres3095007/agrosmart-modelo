import React from "react";
import { topbarIcons } from "./constants.js";
import BrandMark from "./components/BrandMark.jsx";
import HelpButton from "./components/HelpButton.jsx";

function Topbar({ onNavigate, onToggleSidebar }) {
  const MenuIcon = topbarIcons.menu;

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <button
          className="grid h-10 w-10 place-items-center rounded-md text-slate-700 transition hover:bg-slate-100 lg:hidden"
          type="button"
          onClick={onToggleSidebar}
        >
          <MenuIcon size={22} />
        </button>
        <BrandMark />
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-slate-600 md:gap-5">
        <HelpButton onClick={() => onNavigate("quick-guide")} />
      </div>
    </header>
  );
}

export default Topbar;
