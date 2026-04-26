import React from "react";
import PlaceholderContent from "../../components/PlaceholderContent/PlaceholderContent.jsx";
import CalculatorHero from "./components/CalculatorHero.jsx";

function Calculator() {
  return (
    <>
      <CalculatorHero />
      <PlaceholderContent enableInternalScroll hideHeader showLiveSummary />
    </>
  );
}

export default Calculator;
