import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function AssumptionsSection() {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{projectInfoTranslations.assumptions.title}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {projectInfoTranslations.assumptions.groups.map((group) => {
          const Icon = projectInfoIcons[group.icon];

          return (
            <article className="rounded-lg border border-slate-200 p-4" key={group.title}>
              <div className="flex items-center gap-3">
                <Icon className="text-agro-700" size={24} />
                <h3 className="font-bold text-agro-900">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {group.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default AssumptionsSection;
