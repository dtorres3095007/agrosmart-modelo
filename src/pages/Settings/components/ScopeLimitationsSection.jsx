import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function TextList({ items }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ScopeLimitationsSection() {
  const AlertIcon = settingsIcons.alert;
  const TargetIcon = settingsIcons.target;
  const content = settingsTranslations.scopeLimitations;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{content.title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <TargetIcon className="text-agro-700" size={22} />
            <h3 className="text-sm font-bold text-agro-900">{content.scopeTitle}</h3>
          </div>
          <TextList items={content.scopeItems} />
        </article>

        <article className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <AlertIcon className="text-amber-600" size={22} />
            <h3 className="text-sm font-bold text-agro-900">{content.limitationTitle}</h3>
          </div>
          <TextList items={content.limitationItems} />
        </article>
      </div>
    </SectionCard>
  );
}

export default ScopeLimitationsSection;
