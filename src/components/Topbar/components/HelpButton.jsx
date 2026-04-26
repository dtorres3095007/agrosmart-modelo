import React from "react";
import { topbarIcons } from "../constants.js";
import { topbarTranslations } from "../translations.js";

function HelpButton({ onClick }) {
  const HelpIcon = topbarIcons.help;

  return (
    <button
      className="hidden items-center gap-2 rounded-md px-2 py-2 transition hover:bg-slate-100 sm:flex"
      type="button"
      onClick={onClick}
    >
      <HelpIcon size={18} />
      <span>{topbarTranslations.help}</span>
    </button>
  );
}

export default HelpButton;
