import React from "react";
import { resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";

function ResultsFooter() {
  const SproutIcon = resultsIcons.sprout;

  return (
    <section className="flex items-center gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
        <SproutIcon size={24} />
      </div>
      <p>{resultsTranslations.footer}</p>
    </section>
  );
}

export default ResultsFooter;
