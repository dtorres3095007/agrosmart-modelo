function Stepper({ activeStep, steps, onStepClick }) {
  return (
    <aside className="border-b border-slate-200 p-4">
      <ol className="flex gap-3 overflow-x-auto pb-1">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isDone = activeStep > index;

          return (
            <li className="relative flex min-w-[118px] flex-1 flex-col items-center gap-2" key={step.id}>
              {index < steps.length - 1 ? (
                <span className="absolute left-1/2 top-5 hidden h-px w-full bg-slate-200 sm:block" />
              ) : null}
              <button
                className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-bold transition ${
                  isActive || isDone
                    ? "border-agro-600 bg-agro-600 text-white"
                    : "border-slate-200 bg-white text-slate-500"
                }`}
                type="button"
                onClick={() => onStepClick(index)}
              >
                {index + 1}
              </button>
              <button
                className={`relative z-10 min-w-0 bg-white px-2 text-center text-sm font-bold leading-5 transition ${
                  isActive ? "text-agro-800" : "text-slate-600 hover:text-agro-700"
                }`}
                type="button"
                onClick={() => onStepClick(index)}
              >
                {step.shortTitle}
              </button>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

export default Stepper;
