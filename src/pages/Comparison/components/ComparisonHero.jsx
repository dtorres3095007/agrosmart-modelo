import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { comparisonTranslations } from "../translations.js";

function ComparisonHero() {
  return (
    <PageHero
      description={comparisonTranslations.hero.description}
      title={comparisonTranslations.hero.title}
    />
  );
}

export default ComparisonHero;
