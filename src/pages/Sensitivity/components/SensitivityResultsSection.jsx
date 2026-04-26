import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { baselineSensitivityRows, sensitivityIcons } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";
import ResultsTable from "./ResultsTable.jsx";

function SensitivityResultsSection({ selectedRangeId }) {
  const InfoIcon = sensitivityIcons.info;
  const selectedRow = baselineSensitivityRows.find((row) => row.id === selectedRangeId);

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{sensitivityTranslations.results.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{sensitivityTranslations.results.description}</p>
      <div className="mt-4 rounded-lg border border-agro-100 bg-agro-50 p-4">
        <p className="text-sm font-bold text-agro-900">{sensitivityTranslations.results.selectedTitle}</p>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-5">
          {sensitivityTranslations.results.headers.map((header, index) => (
            <div key={header}>
              <p className="text-xs font-bold text-slate-500">{header}</p>
              <p className={`mt-1 font-bold ${selectedRow.id === "minus20" ? "text-red-600" : "text-agro-800"}`}>
                {selectedRow.cells[index]}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold leading-5 text-slate-600">
          {sensitivityTranslations.results.selectedRows[selectedRangeId]}
        </p>
      </div>
      <ResultsTable selectedRangeId={selectedRangeId} />
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={17} />
        {sensitivityTranslations.results.note}
      </div>
    </SectionCard>
  );
}

export default SensitivityResultsSection;
