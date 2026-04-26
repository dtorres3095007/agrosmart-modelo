import React from "react";
import { comparisonIcons } from "../constants.js";
import { comparisonTranslations } from "../translations.js";

function ComparisonFooter() {
  const SproutIcon = comparisonIcons.sprout;

  return (
    <section className="flex items-center gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
        <SproutIcon size={24} />
      </div>
      <p>{comparisonTranslations.footer}</p>
    </section>
  );
}

export default ComparisonFooter;
