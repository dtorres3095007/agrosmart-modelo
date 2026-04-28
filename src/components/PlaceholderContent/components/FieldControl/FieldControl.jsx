import { fieldControlClass } from "./constants.js";

function FieldControl({ field, value, onChange }) {
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
            max={field.max}
            min={field.min}
            type="number"
            value={value}
            onChange={(event) => onChange(event.target.value)}
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
