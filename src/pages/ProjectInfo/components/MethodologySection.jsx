import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function MethodologySection() {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{projectInfoTranslations.methodology.title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {projectInfoTranslations.methodology.cards.map((item) => {
          const Icon = projectInfoIcons[item.icon];

          return (
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center" key={item.title}>
              <Icon className="mx-auto text-agro-700" size={34} />
              <h3 className="mt-4 text-sm font-bold text-agro-900">{item.title}</h3>
              <p className="mt-3 text-xs leading-6 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default MethodologySection;
