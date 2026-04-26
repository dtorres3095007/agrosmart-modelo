import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { projectInfoTranslations } from "../translations.js";

function ProjectHero() {
  return (
    <PageHero
      description={projectInfoTranslations.hero.description}
      title={projectInfoTranslations.hero.title}
    />
  );
}

export default ProjectHero;
