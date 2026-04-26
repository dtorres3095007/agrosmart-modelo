import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { sensitivityTranslations } from "../translations.js";
import RiskBars from "./RiskBars.jsx";

function RisksSection({ className = "" }) {
  return (
    <SectionCard className={className}>
      <h2 className="text-lg font-bold text-agro-900">{sensitivityTranslations.risks.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{sensitivityTranslations.risks.description}</p>
      <RiskBars />
    </SectionCard>
  );
}

export default RisksSection;
