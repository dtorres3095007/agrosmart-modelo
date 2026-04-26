import React from "react";
import {
  economicRows,
  profitabilityRows,
  productiveRows,
  technologyRows
} from "./constants.js";
import ComparisonChartSection from "./components/ComparisonChartSection.jsx";
import ComparisonFooter from "./components/ComparisonFooter.jsx";
import ComparisonHero from "./components/ComparisonHero.jsx";
import ComparisonTableSection from "./components/ComparisonTableSection.jsx";
import ConclusionCard from "./components/ConclusionCard.jsx";
import ScenarioSelector from "./components/ScenarioSelector.jsx";
import { comparisonTranslations } from "./translations.js";

function Comparison() {
  return (
    <>
      <ComparisonHero />
      <ScenarioSelector />

      <div className="grid gap-5 xl:grid-cols-3">
        <ComparisonTableSection rows={productiveRows} showVariation table={comparisonTranslations.tables.productive} />
        <ComparisonTableSection rows={economicRows} showVariation table={comparisonTranslations.tables.economic} />
        <ComparisonTableSection rows={profitabilityRows} table={comparisonTranslations.tables.profitability} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_1fr_0.82fr]">
        <ComparisonTableSection rows={technologyRows} table={comparisonTranslations.tables.technology} />
        <ComparisonChartSection />
        <ConclusionCard />
      </div>

      <ComparisonFooter />
    </>
  );
}

export default Comparison;
