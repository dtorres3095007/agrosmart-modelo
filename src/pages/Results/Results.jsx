import React from "react";
import BaselineExampleSection from "./components/BaselineExampleSection.jsx";
import FinancialIndicatorsSection from "./components/FinancialIndicatorsSection.jsx";
import ImportantNotesSection from "./components/ImportantNotesSection.jsx";
import InterpretationSection from "./components/InterpretationSection.jsx";
import ModelOutputsSection from "./components/ModelOutputsSection.jsx";
import ResultsFooter from "./components/ResultsFooter.jsx";
import ResultsHero from "./components/ResultsHero.jsx";

function Results() {
  return (
    <>
      <ResultsHero />
      <ModelOutputsSection />

      <div className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
        <FinancialIndicatorsSection />
        <BaselineExampleSection />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <InterpretationSection />
        <ImportantNotesSection />
      </div>

      <ResultsFooter />
    </>
  );
}

export default Results;
