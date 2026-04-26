import React from "react";
import { sidebarIcons } from "../constants.js";
import { sidebarTranslations } from "../translations.js";

function SidebarBrand({ onClose }) {
  const CloseIcon = sidebarIcons.close;
  const LeafIcon = sidebarIcons.leaf;

  return (
    <div className="flex h-28 items-center justify-between gap-3 px-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-agro-50 text-agro-700">
          <LeafIcon size={30} strokeWidth={1.9} />
        </div>
        <div className="min-w-0">
          <p className="text-xl font-bold leading-6 text-agro-700">{sidebarTranslations.brand.title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{sidebarTranslations.brand.subtitle}</p>
        </div>
      </div>
      <button
        aria-label={sidebarTranslations.closeMenu}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-slate-600 transition hover:bg-slate-100 lg:hidden"
        type="button"
        onClick={onClose}
      >
        <CloseIcon size={21} />
      </button>
    </div>
  );
}

export default SidebarBrand;
