import React from "react";
import { appLayoutIcons } from "../constants.js";
import { appLayoutTranslations } from "../translations.js";

function FloatingMenuButton({ isHidden, onClick }) {
  const PanelLeftIcon = appLayoutIcons.panelLeft;

  return (
    <button
      aria-label={appLayoutTranslations.openMenu}
      className={`fixed bottom-5 right-5 z-20 h-12 w-12 place-items-center rounded-full bg-agro-700 text-white shadow-lg transition hover:bg-agro-800 lg:hidden ${
        isHidden ? "hidden" : "grid"
      }`}
      type="button"
      onClick={onClick}
    >
      <PanelLeftIcon size={22} />
    </button>
  );
}

export default FloatingMenuButton;
