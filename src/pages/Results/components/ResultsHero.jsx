import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { resultsTranslations } from "../translations.js";

function ResultsHero() {
  return (
    <PageHero
      description={resultsTranslations.hero.description}
      title={resultsTranslations.hero.title}
    />
  );
}

export default ResultsHero;
