import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function DocumentsSection() {
  const DownloadIcon = settingsIcons.download;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{settingsTranslations.documents.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{settingsTranslations.documents.description}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {settingsTranslations.documents.downloads.map((document) => {
          const Icon = settingsIcons[document.icon];

          return (
            <article className="flex h-full min-h-[216px] flex-col rounded-lg border border-slate-200 p-4" key={document.title}>
              <div className="flex flex-1 items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-slate-50 text-agro-700">
                  <Icon size={31} strokeWidth={1.9} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-agro-900">{document.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{document.text}</p>
                </div>
              </div>
              <a
                className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-agro-600 px-4 text-sm font-bold text-white transition hover:bg-agro-700"
                download
                href={document.href}
              >
                <DownloadIcon size={17} />
                {document.buttonLabel}
              </a>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default DocumentsSection;
