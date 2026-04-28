import { RefreshCcw } from "lucide-react";
import { wizardStepHeaderTranslations } from "./translations.js";

function WizardStepHeader({ activeStep, currentStep, onReset }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-2xl font-bold text-agro-700">
          {activeStep + 1}. {currentStep.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{currentStep.description}</p>
      </div>
      <button
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
        type="button"
        onClick={onReset}
      >
        <RefreshCcw size={16} />
        {wizardStepHeaderTranslations.restart}
      </button>
    </div>
  );
}

export default WizardStepHeader;
