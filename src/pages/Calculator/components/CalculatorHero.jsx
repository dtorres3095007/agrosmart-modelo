import React from "react";
import PageHero from "../../../components/PageHero/PageHero.jsx";
import { calculatorTranslations } from "../translations.js";

function CalculatorHero() {
  return (
    <PageHero
      description={calculatorTranslations.hero.description}
      minHeight="min-h-[130px]"
      title={calculatorTranslations.hero.title}
    />
  );
}

export default CalculatorHero;
