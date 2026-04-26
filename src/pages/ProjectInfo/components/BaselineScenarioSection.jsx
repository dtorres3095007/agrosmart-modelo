import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function BaselineScenarioSection() {
  const CheckIcon = projectInfoIcons.check;
  const ClipboardIcon = projectInfoIcons.clipboard;
  const content = projectInfoTranslations.baseline;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{content.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{content.description}</p>
      <div className="mt-4 grid gap-4 xl:grid-cols-[0.8fr_1.7fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-bold text-agro-900">{content.featuresTitle}</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-1">
            {content.features.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <CheckIcon className="mt-0.5 shrink-0 text-agro-600" size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <h3 className="text-sm font-bold text-agro-900">{content.indicatorsTitle}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {content.indicators.map(([label, value]) => (
              <article className="min-w-0 rounded-lg border border-slate-200 p-4 text-center" key={label}>
                <p className="min-h-8 text-xs font-semibold leading-4 text-slate-600">{label}</p>
                <p className="mt-3 break-words text-lg font-bold leading-6 text-slate-950">{value}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <ClipboardIcon size={15} />
            {content.note}
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

export default BaselineScenarioSection;
