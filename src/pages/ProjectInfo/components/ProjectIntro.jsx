import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function ProjectIntro() {
  const FileIcon = projectInfoIcons.file;

  return (
    <SectionCard>
      <div className="flex gap-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-agro-100 text-agro-700">
          <FileIcon size={28} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-agro-900">{projectInfoTranslations.intro.title}</h2>
          {projectInfoTranslations.intro.paragraphs.map((paragraph) => (
            <p className="mt-3 text-sm leading-7 text-slate-600" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

export default ProjectIntro;
