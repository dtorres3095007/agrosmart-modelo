import { BookOpen } from "lucide-react";
import { calculatorHeaderTranslations } from "./translations.js";

function CalculatorHeader({ onGuideClick }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{calculatorHeaderTranslations.title}</h2>
        <p className="mt-1 text-sm text-slate-600">{calculatorHeaderTranslations.description}</p>
      </div>
      <button
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50"
        type="button"
        onClick={onGuideClick}
      >
        <BookOpen size={17} />
        {calculatorHeaderTranslations.guideButton}
      </button>
    </div>
  );
}

export default CalculatorHeader;
