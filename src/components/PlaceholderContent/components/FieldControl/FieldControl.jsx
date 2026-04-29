import { fieldControlClass } from "./constants.js";

const moneyFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 0
});

const isMoneyField = (field) => field.prefix === "$";

const formatMoneyInput = (value) => {
  if (value === "" || value === null || value === undefined) {
    return "";
  }

  const numericText = String(value).replace(/\D/g, "");

  if (!numericText) {
    return "";
  }

  return moneyFormatter.format(Number(numericText));
};

const getInputValue = (field, value) => (isMoneyField(field) ? formatMoneyInput(value) : value);

const getInputChangeValue = (field, value) => {
  if (!isMoneyField(field)) {
    return value;
  }

  const numericText = value.replace(/\D/g, "");
  return numericText === "" ? "" : numericText;
};

function FieldControl({ field, value, onChange }) {
  const isFormattedMoneyField = field.type === "number" && isMoneyField(field);

  return (
    <label className="group relative block">
      <span className="text-sm font-semibold text-slate-700">{field.label}</span>
      <div className="relative mt-2">
        {field.prefix ? (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
            {field.prefix}
          </span>
        ) : null}
        {field.type === "select" ? (
          <select className={fieldControlClass} value={value} onChange={(event) => onChange(event.target.value)}>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`${fieldControlClass} ${field.prefix ? "pl-8" : ""} ${field.suffix ? "pr-20" : ""}`}
            inputMode={isFormattedMoneyField ? "numeric" : undefined}
            max={isFormattedMoneyField ? undefined : field.max}
            min={isFormattedMoneyField ? undefined : field.min}
            type={isFormattedMoneyField ? "text" : "number"}
            value={getInputValue(field, value)}
            onChange={(event) => onChange(getInputChangeValue(field, event.target.value))}
          />
        )}
        {field.suffix ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
            {field.suffix}
          </span>
        ) : null}
      </div>
      {field.helper ? (
        <>
          <p className="mt-2 truncate text-xs font-medium leading-5 text-slate-500">{field.helper}</p>
          <span
            className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-full rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs font-medium leading-5 text-white shadow-lg group-hover:block group-focus-within:block"
            role="tooltip"
          >
            {field.helper}
          </span>
        </>
      ) : null}
    </label>
  );
}

export default FieldControl;
