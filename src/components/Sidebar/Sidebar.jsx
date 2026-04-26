import React from "react";
import SidebarBrand from "./components/SidebarBrand.jsx";
import SidebarHelpCard from "./components/SidebarHelpCard.jsx";
import SidebarNav from "./components/SidebarNav.jsx";

function Sidebar({ activePage, isOpen, onClose, onNavigate }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 h-screen w-[280px] shrink-0 border-r border-slate-200 bg-white transition-all duration-300 lg:static lg:flex lg:w-[280px] lg:translate-x-0 lg:flex-col ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}
    >
      <SidebarBrand onClose={onClose} />
      <SidebarNav activePage={activePage} onNavigate={onNavigate} />
      <SidebarHelpCard onNavigate={onNavigate} />
    </aside>
  );
}

export default Sidebar;
