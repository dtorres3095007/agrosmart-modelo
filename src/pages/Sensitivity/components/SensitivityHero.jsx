import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { sensitivityTranslations } from "../translations.js";

function SensitivityHero() {
  return (
    <PageHero
      description={sensitivityTranslations.hero.description}
      title={sensitivityTranslations.hero.title}
    />
  );
}

export default SensitivityHero;
