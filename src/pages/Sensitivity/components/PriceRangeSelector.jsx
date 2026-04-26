import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { priceRanges, sensitivityIcons } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function PriceRangeSelector({ className = "", selectedRangeId, onSelectRange }) {
  const InfoIcon = sensitivityIcons.info;
  const selectedRange = priceRanges.find((range) => range.id === selectedRangeId);

  return (
    <SectionCard className={className}>
      <h2 className="text-lg font-bold text-agro-900">{sensitivityTranslations.priceRange.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{sensitivityTranslations.priceRange.description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {priceRanges.map((range) => {
          const positive = range.label.includes("+");
          const negative = range.label.includes("-");
          const selected = range.id === selectedRangeId;

          return (
            <button
              aria-pressed={selected}
              className={`h-11 min-w-20 rounded-md border px-4 text-sm font-bold transition ${
                selected
                  ? "border-agro-700 bg-agro-700 text-white shadow-sm"
                  : positive
                    ? "border-agro-200 bg-agro-50 text-agro-700 hover:border-agro-500"
                    : negative
                      ? "border-red-200 bg-red-50 text-red-600 hover:border-red-400"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400"
              }`}
              key={range.id}
              type="button"
              onClick={() => onSelectRange(range.id)}
            >
              {range.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-sm text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={18} />
        <p className="min-w-0 text-xs font-semibold leading-5 text-slate-600 sm:text-sm">
          <span className="font-bold text-agro-900">{sensitivityTranslations.priceRange.variableTitle}:</span>{" "}
          {sensitivityTranslations.priceRange.variableText}
          <span className="mx-2 text-slate-300">|</span>
          <span className="font-bold text-agro-800">
            {sensitivityTranslations.priceRange.selectedLabel}: {selectedRange.label}
          </span>
        </p>
      </div>
    </SectionCard>
  );
}

export default PriceRangeSelector;
