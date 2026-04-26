import React from "react";
import { comparisonIcons, scenarioTones } from "../constants.js";
import { comparisonTranslations } from "../translations.js";

function ScenarioSelector() {
  const InfoIcon = comparisonIcons.info;

  return (
    <section className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-panel lg:grid-cols-[1fr_1fr_1fr_1.35fr]">
      {comparisonTranslations.selector.scenarios.map((scenario) => {
        const Icon = comparisonIcons[scenario.icon];

        return (
          <article className={`flex items-center gap-3 rounded-lg border p-4 ${scenarioTones[scenario.tone]}`} key={scenario.id}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70">
              <Icon size={22} />
            </span>
            <div>
              <p className="text-sm font-bold">{scenario.name}</p>
              <p className="mt-1 text-xs font-semibold opacity-80">{scenario.subtitle}</p>
            </div>
          </article>
        );
      })}
      <article className="flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={20} />
        <p>{comparisonTranslations.selector.note}</p>
      </article>
    </section>
  );
}

export default ScenarioSelector;
