import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../constants/navigation.jsx";

function SidebarNav({ activePage, onLinkFollowed }) {
  return (
    <nav className="flex-1 space-y-2 overflow-y-auto px-3">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            className={`flex h-11 items-center gap-3 rounded-md px-4 text-sm font-semibold transition ${
              activePage === item.id
                ? "bg-agro-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-agro-50 hover:text-agro-800"
            }`}
            key={item.label}
            to={item.path}
            onClick={onLinkFollowed}
          >
            <Icon size={18} strokeWidth={2.1} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default SidebarNav;
