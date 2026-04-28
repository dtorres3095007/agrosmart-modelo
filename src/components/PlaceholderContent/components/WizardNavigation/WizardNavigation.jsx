import { ArrowLeft, ArrowRight } from "lucide-react";
import { wizardNavigationTranslations } from "./translations.js";

function WizardNavigation({ activeStep, isLastStep, onBack, onNext }) {
  return (
    <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-between">
      <button
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-agro-500 px-5 text-sm font-bold text-agro-700 transition hover:bg-agro-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
        disabled={activeStep === 0}
        type="button"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        {wizardNavigationTranslations.previous}
      </button>
      <button
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-6 text-sm font-bold text-white transition hover:bg-agro-700"
        type="button"
        onClick={onNext}
      >
        {isLastStep ? wizardNavigationTranslations.newSimulation : wizardNavigationTranslations.next}
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

export default WizardNavigation;
