import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { comparisonTranslations } from "../translations.js";
import ComparisonChart from "./ComparisonChart.jsx";

function ComparisonChartSection({ className = "" }) {
  return (
    <SectionCard className={className}>
      <h2 className="text-lg font-bold text-agro-900">{comparisonTranslations.chart.title}</h2>
      <ComparisonChart />
    </SectionCard>
  );
}

export default ComparisonChartSection;
