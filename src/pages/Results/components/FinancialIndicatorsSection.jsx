import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";

function FinancialIndicatorsSection() {
  const InfoIcon = resultsIcons.info;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{resultsTranslations.financialIndicators.title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {resultsTranslations.financialIndicators.items.map((item) => {
          const Icon = resultsIcons[item.icon];

          return (
            <article className="text-center" key={item.title}>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-agro-100 text-agro-700">
                <Icon size={25} />
              </span>
              <h3 className="mt-3 text-sm font-bold text-agro-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={18} />
        {resultsTranslations.financialIndicators.note}
      </div>
    </SectionCard>
  );
}

export default FinancialIndicatorsSection;
