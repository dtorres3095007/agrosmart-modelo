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

  return (
    <>
      <SensitivityHero />

      <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
        <SensitivityDefinition />
        <PriceRangeSelector selectedRangeId={selectedRangeId} onSelectRange={setSelectedRangeId} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <FinancialImpactSection selectedRangeId={selectedRangeId} />
        <SensitivityResultsSection selectedRangeId={selectedRangeId} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <InterpretationSection />
        <RisksSection />
      </div>

      <SensitivityFooter />
    </>
  );
}

export default Sensitivity;
