import React from "react";
import { baselineSensitivityRows } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function ResultsTable({ selectedRangeId }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[620px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs text-slate-500">
            {sensitivityTranslations.results.headers.map((header) => (
              <th className="px-3 py-3 font-bold" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {baselineSensitivityRows.map((row) => (
            <tr className={row.id === selectedRangeId ? "bg-agro-50" : ""} key={row.id}>
              {row.cells.map((cell, index) => (
                <td
                  className={`px-3 py-3 font-bold ${
                    row.id === "minus20" ? "text-red-600" : index === 0 ? "text-slate-700" : "text-agro-800"
                  }`}
                  key={`${row.id}-${index}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
