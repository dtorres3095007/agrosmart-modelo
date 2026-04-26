import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function WorkflowSection() {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{settingsTranslations.workflow.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{settingsTranslations.workflow.description}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {settingsTranslations.workflow.steps.map((step, index) => {
          const Icon = settingsIcons[step.icon];

          return (
            <article className="relative text-center" key={step.title}>
              {index < settingsTranslations.workflow.steps.length - 1 ? (
                <span className="absolute left-1/2 top-8 hidden h-px w-full bg-slate-200 md:block" />
              ) : null}
              <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-agro-50 text-agro-700">
                <Icon size={28} />
              </span>
              <span className="absolute left-1/2 top-0 z-20 grid h-6 w-6 -translate-x-10 place-items-center rounded-full bg-agro-600 text-xs font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold text-agro-900">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{step.text}</p>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default WorkflowSection;
