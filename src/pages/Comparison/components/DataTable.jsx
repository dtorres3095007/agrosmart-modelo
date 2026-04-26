import React from "react";

function DataTable({ headers, rows, showVariation = false, variationHeader }) {
  return (
    <div className="mt-4 max-w-full flex-1 overflow-auto overscroll-contain rounded-lg">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs text-slate-500">
            {headers.map((header) => (
              <th className="px-3 py-3 font-bold" key={header}>
                {header}
              </th>
            ))}
            {showVariation ? <th className="px-3 py-3 font-bold">{variationHeader}</th> : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  className={`px-3 py-3 align-top ${
                    index === 0 ? "font-semibold text-slate-700" : "font-bold text-slate-900"
                  } ${showVariation && index === row.length - 1 ? "text-agro-700" : ""}`}
                  key={`${row[0]}-${index}`}
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

export default DataTable;
