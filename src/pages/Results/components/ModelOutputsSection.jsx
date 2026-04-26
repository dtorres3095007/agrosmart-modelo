import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { outputTones, resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";

function ModelOutputsSection() {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{resultsTranslations.modelOutputs.title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resultsTranslations.modelOutputs.cards.map((item) => {
          const Icon = resultsIcons[item.icon];

          return (
            <article className="flex gap-4 rounded-lg border border-slate-200 p-4" key={item.title}>
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${outputTones[item.tone]}`}>
                <Icon size={26} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-agro-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default ModelOutputsSection;
