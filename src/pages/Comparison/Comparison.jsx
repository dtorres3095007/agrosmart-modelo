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
  const cardClassName = "xl:min-h-[440px]";

  return (
    <>
      <ComparisonHero />
      <ScenarioSelector />

      <div className="grid items-stretch gap-5 xl:grid-cols-3">
        <ComparisonTableSection
          className={cardClassName}
          rows={productiveRows}
          showVariation
          table={comparisonTranslations.tables.productive}
        />
        <ComparisonTableSection
          className={cardClassName}
          rows={economicRows}
          showVariation
          table={comparisonTranslations.tables.economic}
        />
        <ComparisonTableSection
          className={cardClassName}
          rows={profitabilityRows}
          table={comparisonTranslations.tables.profitability}
        />
        <ComparisonTableSection
          className={cardClassName}
          rows={technologyRows}
          table={comparisonTranslations.tables.technology}
        />
        <ComparisonChartSection className={cardClassName} />
        <ConclusionCard className={cardClassName} />
      </div>

      <ComparisonFooter />
    </>
  );
}

export default Comparison;
