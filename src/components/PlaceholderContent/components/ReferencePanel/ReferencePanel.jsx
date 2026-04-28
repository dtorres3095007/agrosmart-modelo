import { Info } from "lucide-react";
import { formatCurrency, formatNumber } from "../../../../utils/financialCalculations.js";
import { referenceRows } from "./constants.js";
import { referencePanelTranslations } from "./translations.js";

function ReferencePanel({ values, initialResults }) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-agro-900">{referencePanelTranslations.title}</h3>
        <Info size={18} className="text-sky-700" />
      </div>
      <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
        {referencePanelTranslations.note}
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        {referenceRows.map(([label, value]) => (
          <div className="flex items-center justify-between gap-4 py-3 text-sm" key={label}>
            <span className="font-semibold text-slate-700">{label}</span>
            <span className="text-right font-bold text-slate-600">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm">
        <div className="flex justify-between gap-3">
          <span className="font-semibold text-slate-600">{referencePanelTranslations.currentArea}</span>
          <span className="font-bold text-slate-900">{formatNumber(values.area, { minimumFractionDigits: 2 })} ha</span>
        </div>
        <div className="mt-2 flex justify-between gap-3">
          <span className="font-semibold text-slate-600">{referencePanelTranslations.baseUtility}</span>
          <span className="font-bold text-agro-800">{formatCurrency(initialResults.utility)}</span>
        </div>
      </div>
    </aside>
  );
}

export default ReferencePanel;
