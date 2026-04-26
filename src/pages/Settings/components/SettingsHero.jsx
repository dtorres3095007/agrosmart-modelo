import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { settingsTranslations } from "../translations.js";

function SettingsHero() {
  return (
    <PageHero
      description={settingsTranslations.hero.description}
      title={settingsTranslations.hero.title}
    />
  );
}

export default SettingsHero;
