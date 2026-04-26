import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function DecisionSection() {
  const SproutIcon = projectInfoIcons.sprout;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{projectInfoTranslations.decisions.title}</h2>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {projectInfoTranslations.decisions.items.map(([title, text]) => (
          <article className="flex gap-4 rounded-lg border border-slate-200 p-4" key={title}>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-agro-50 text-agro-700">
              <SproutIcon size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-agro-900">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

export default DecisionSection;
