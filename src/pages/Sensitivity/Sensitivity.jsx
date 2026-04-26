import React, { useState } from "react";
import FinancialImpactSection from "./components/FinancialImpactSection.jsx";
import InterpretationSection from "./components/InterpretationSection.jsx";
import PriceRangeSelector from "./components/PriceRangeSelector.jsx";
import RisksSection from "./components/RisksSection.jsx";
import SensitivityDefinition from "./components/SensitivityDefinition.jsx";
import SensitivityFooter from "./components/SensitivityFooter.jsx";
import SensitivityHero from "./components/SensitivityHero.jsx";
import SensitivityResultsSection from "./components/SensitivityResultsSection.jsx";
import { defaultPriceRangeId } from "./constants.js";

function Sensitivity() {
  const [selectedRangeId, setSelectedRangeId] = useState(defaultPriceRangeId);
  const compactCardClassName = "xl:h-[260px]";
  const analysisCardClassName = "xl:h-[560px]";

  return (
    <>
      <SensitivityHero />

      <div className="grid items-stretch gap-5 xl:grid-cols-2">
        <SensitivityDefinition className={compactCardClassName} />
        <PriceRangeSelector
          className={compactCardClassName}
          selectedRangeId={selectedRangeId}
          onSelectRange={setSelectedRangeId}
        />
        <FinancialImpactSection className={analysisCardClassName} selectedRangeId={selectedRangeId} />
        <SensitivityResultsSection className={analysisCardClassName} selectedRangeId={selectedRangeId} />
        <InterpretationSection className={analysisCardClassName} />
        <RisksSection className={analysisCardClassName} />
      </div>

      <SensitivityFooter />
    </>
  );
}

export default Sensitivity;
