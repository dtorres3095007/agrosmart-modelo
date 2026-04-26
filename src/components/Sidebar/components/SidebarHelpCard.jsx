import React from "react";
import { sidebarIcons } from "../constants.js";
import { sidebarTranslations } from "../translations.js";

function SidebarHelpCard({ onNavigate }) {
  const SproutIcon = sidebarIcons.sprout;

  return (
    <div className="p-4">
      <div className="rounded-lg border border-agro-100 bg-agro-50 p-4">
        <div className="flex items-center gap-2 text-sm font-bold text-agro-800">
          <SproutIcon size={18} />
          <span>{sidebarTranslations.help.title}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{sidebarTranslations.help.text}</p>
        <button
          className="mt-4 rounded-md bg-agro-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-agro-700"
          type="button"
          onClick={() => onNavigate("quick-guide")}
        >
          {sidebarTranslations.help.button}
        </button>
      </div>
    </div>
  );
}

export default SidebarHelpCard;
