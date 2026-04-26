import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";

function ImportantNotesSection() {
  const BarChartIcon = resultsIcons.barChart;
  const CheckIcon = resultsIcons.check;
  const ClipboardIcon = resultsIcons.clipboard;
  const SproutIcon = resultsIcons.sprout;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{resultsTranslations.notes.title}</h2>
      <div className="mt-4 grid gap-3">
        {resultsTranslations.notes.items.map((note) => (
          <div className="flex items-start gap-2 text-sm text-slate-600" key={note}>
            <CheckIcon className="mt-0.5 shrink-0 text-agro-600" size={17} />
            <span>{note}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-3 text-agro-800">
        <ClipboardIcon size={48} strokeWidth={1.6} />
        <BarChartIcon size={48} strokeWidth={1.6} />
        <SproutIcon size={48} strokeWidth={1.6} />
      </div>
    </SectionCard>
  );
}

export default ImportantNotesSection;
