import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Download,
  FileSpreadsheet,
  Info,
  RefreshCcw,
  Sprout,
  TrendingUp,
  Wallet
} from "lucide-react";
import { useCalculatorWizard } from "../../hooks/useCalculatorWizard.js";
import { formatCurrency, formatNumber } from "../../utils/financialCalculations.js";
import { navigateToPage } from "../../utils/router.js";

const referenceRows = [
  ["Rendimiento yuca", "8.000 kg/ha"],
  ["Rendimiento frijol caupi", "300 kg/ha"],
  ["Pérdidas poscosecha", "15 %"],
  ["Ciclos productivos", "2"],
  ["Horizonte de análisis", "5 años"],
  ["Tasa de descuento sugerida", "10 %"]
];

function MetricCard({ icon: Icon, label, value, tone = "green" }) {
  const toneClasses = {
    green: "bg-agro-50 text-agro-800 border-agro-100",
    blue: "bg-sky-50 text-sky-800 border-sky-100",
    amber: "bg-amber-50 text-amber-800 border-amber-100"
  };

  return (
    <article className={`rounded-lg border p-4 ${toneClasses[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{label}</span>
        <Icon size={20} />
      </div>
      <p className="mt-3 text-xl font-bold text-slate-950">{value}</p>
    </article>
  );
}

function FieldControl({ field, value, onChange }) {
  const sharedClass =
    "h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-agro-500 focus:ring-4 focus:ring-agro-100";

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{field.label}</span>
      <div className="relative mt-2">
        {field.prefix ? (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
            {field.prefix}
          </span>
        ) : null}
        {field.type === "select" ? (
          <select className={sharedClass} value={value} onChange={(event) => onChange(event.target.value)}>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`${sharedClass} ${field.prefix ? "pl-8" : ""} ${field.suffix ? "pr-20" : ""}`}
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
    </label>
  );
}

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

function ReferencePanel({ values, initialResults }) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-agro-900">Escenario 1 - Inicial</h3>
        <Info size={18} className="text-sky-700" />
      </div>
      <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
        Valores base para comparar con los resultados de tus entradas.
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
          <span className="font-semibold text-slate-600">Área actual</span>
          <span className="font-bold text-slate-900">{formatNumber(values.area, { minimumFractionDigits: 2 })} ha</span>
        </div>
        <div className="mt-2 flex justify-between gap-3">
          <span className="font-semibold text-slate-600">Utilidad base</span>
          <span className="font-bold text-agro-800">{formatCurrency(initialResults.utility)}</span>
        </div>
      </div>
    </aside>
  );
}

function LiveSummary({ results }) {
  const summaryItems = [
    {
      icon: Sprout,
      label: "Producción total",
      value: formatNumber(results.production),
      suffix: "kg",
      tone: "bg-agro-100 text-agro-700"
    },
    {
      icon: TrendingUp,
      label: "Ingresos estimados",
      value: formatCurrency(results.income),
      suffix: "$",
      tone: "bg-green-100 text-green-700"
    },
    {
      icon: Wallet,
      label: "Costos totales",
      value: formatCurrency(results.totalCosts),
      suffix: "$",
      tone: "bg-orange-100 text-orange-700"
    },
    {
      icon: BarChart3,
      label: "Utilidad neta",
      value: formatCurrency(results.utility),
      suffix: "$",
      tone: "bg-sky-100 text-sky-700"
    },
    {
      icon: Info,
      label: "VAN (10%)",
      value: formatCurrency(results.netPresentValue),
      suffix: "$",
      tone: "bg-violet-100 text-violet-700"
    }
  ];

  return (
    <aside className="border-t border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        <p className="text-sm font-bold text-agro-700">Resumen en tiempo real</p>
        <p className="text-xs leading-5 text-slate-500">
          Los valores se actualizan automáticamente al completar cada paso.
        </p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {summaryItems.map((item) => {
          const Icon = item.icon;

          return (
            <article className="rounded-lg border border-slate-200 bg-white p-3" key={item.label}>
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.tone}`}>
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-600">{item.label}</p>
                  <p className="mt-1 truncate text-sm font-bold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{item.suffix}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-3 text-center text-xs font-semibold text-slate-500">
        Completa todos los pasos para ver los resultados completos.
      </p>
    </aside>
  );
}

function SimpleBars({ data, keys }) {
  const maxValue = Math.max(...data.flatMap((item) => keys.map((key) => Math.abs(item[key]))), 1);

  return (
    <div className="mt-4 flex h-48 items-end gap-3 rounded-lg bg-slate-50 p-4">
      {data.map((item) => (
        <div className="flex h-full flex-1 flex-col justify-end gap-2" key={item.year}>
          <div className="flex h-full items-end justify-center gap-1">
            {keys.map((key) => (
              <div
                className={`w-full max-w-8 rounded-t ${key === "income" ? "bg-agro-600" : key === "costs" ? "bg-amber-500" : "bg-sky-600"}`}
                key={key}
                style={{ height: `${Math.max((Math.abs(item[key]) / maxValue) * 100, 4)}%` }}
                title={`${key}: ${formatCurrency(item[key])}`}
              />
            ))}
          </div>
          <span className="text-center text-[11px] font-bold text-slate-400">A{item.year}</span>
        </div>
      ))}
    </div>
  );
}

function ResultsView({ initialResults, results, values, onExportData, onPrint }) {
  const comparisonGap = results.utility - initialResults.utility;

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard icon={TrendingUp} label="Ingresos" value={formatCurrency(results.income)} />
        <MetricCard icon={Wallet} label="Costos" value={formatCurrency(results.totalCosts)} tone="amber" />
        <MetricCard icon={BarChart3} label="Utilidad" value={formatCurrency(results.utility)} tone="blue" />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">Ingresos vs costos</h3>
          <SimpleBars data={results.projections} keys={["income", "costs"]} />
          <div className="mt-3 flex gap-4 text-xs font-bold text-slate-600">
            <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-600" />Ingresos</span>
            <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-amber-500" />Costos</span>
          </div>
        </article>
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">Evolución de utilidad</h3>
          <SimpleBars data={results.projections} keys={["utility"]} />
          <div className="mt-3 text-xs font-bold text-slate-600">Proyección a 5 años con inflación de {values.inflation}%.</div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">Indicadores financieros</h3>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">VAN</dt>
              <dd className="font-bold text-slate-900">{formatCurrency(results.netPresentValue)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">Relación Beneficio / Costo</dt>
              <dd className="font-bold text-slate-900">{formatNumber(results.benefitCostRatio, { maximumFractionDigits: 2 })}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">Punto de equilibrio</dt>
              <dd className="font-bold text-slate-900">{formatNumber(results.breakEvenPoint, { maximumFractionDigits: 1 })}%</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-semibold text-slate-600">Payback</dt>
              <dd className="font-bold text-slate-900">{results.paybackYear ? `Año ${results.paybackYear}` : "No recupera"}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">Usuario vs Escenario 1</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <div className="rounded-md bg-slate-50 p-3">
              <span className="font-semibold text-slate-600">Utilidad usuario</span>
              <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(results.utility)}</p>
            </div>
            <div className="rounded-md bg-slate-50 p-3">
              <span className="font-semibold text-slate-600">Utilidad escenario base</span>
              <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(initialResults.utility)}</p>
            </div>
            <div className="rounded-md bg-agro-50 p-3">
              <span className="font-semibold text-agro-800">Diferencia</span>
              <p className="mt-1 text-lg font-bold text-agro-900">{formatCurrency(comparisonGap)}</p>
            </div>
          </div>
        </article>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50" type="button" onClick={onPrint}>
          <Download size={17} />
          Exportar PDF
        </button>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-4 text-sm font-bold text-white transition hover:bg-agro-700" type="button" onClick={onExportData}>
          <FileSpreadsheet size={17} />
          Exportar Excel
        </button>
      </div>
    </div>
  );
}

function PlaceholderContent({
  enableInternalScroll = false,
  hideHeader = false,
  showLiveSummary = false
}) {
  const {
    activeStep,
    currentStep,
    goBack,
    goNext,
    initialResults,
    resetForm,
    results,
    setActiveStep,
    steps,
    updateField,
    values
  } = useCalculatorWizard();
  const isLastStep = activeStep === steps.length - 1;

  const exportData = () => {
    const inputRows = Object.entries(values).map(([key, value]) => ["Dato ingresado", key, value]);
    const resultRows = [
      ["Resultado", "production", results.production],
      ["Resultado", "income", results.income],
      ["Resultado", "totalCosts", results.totalCosts],
      ["Resultado", "utility", results.utility],
      ["Resultado", "netPresentValue", results.netPresentValue],
      ["Resultado", "benefitCostRatio", results.benefitCostRatio],
      ["Resultado", "breakEvenPoint", results.breakEvenPoint],
      ["Resultado", "paybackYear", results.paybackYear || "No recupera"]
    ];
    const projectionRows = results.projections.map((item) => [
      "Proyeccion",
      `Año ${item.year}`,
      `Ingresos: ${item.income}`,
      `Costos: ${item.costs}`,
      `Utilidad: ${item.utility}`,
      `Flujo: ${item.cashFlow}`
    ]);
    const rows = [["Seccion", "Campo", "Valor", "Detalle 1", "Detalle 2", "Detalle 3"], ...inputRows, ...resultRows, ...projectionRows];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "agrosostenible-resultados.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white shadow-panel ${
        enableInternalScroll ? "flex h-[calc(100vh-255px)] min-h-[590px] flex-col overflow-hidden" : ""
      }`}
    >
      {!hideHeader ? (
        <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Calculadora Económico-Financiera</h2>
            <p className="mt-1 text-sm text-slate-600">
              Ingresa los parámetros de tu sistema productivo para calcular los indicadores financieros.
            </p>
          </div>
          <button
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50"
            type="button"
            onClick={() => navigateToPage("quick-guide")}
          >
            <BookOpen size={17} />
            Ver guía
          </button>
        </div>
      ) : null}

      <div
        className={`grid gap-4 p-0 xl:grid-cols-[1fr_330px] ${
          enableInternalScroll ? "min-h-0 flex-1 overflow-hidden" : ""
        }`}
      >
        <div className={`min-w-0 ${enableInternalScroll ? "overflow-y-auto" : ""}`}>
          <div className="rounded-b-lg border-b border-slate-200">
            <Stepper activeStep={activeStep} steps={steps} onStepClick={setActiveStep} />
            <div className="min-w-0 flex-1 p-5 md:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-agro-700">
                    {activeStep + 1}. {currentStep.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{currentStep.description}</p>
                </div>
                <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50" type="button" onClick={resetForm}>
                  <RefreshCcw size={16} />
                  Reiniciar
                </button>
              </div>

              <div className="mt-6">
                {isLastStep ? (
                  <ResultsView
                    initialResults={initialResults}
                    results={results}
                    values={values}
                    onExportData={exportData}
                    onPrint={() => window.print()}
                  />
                ) : (
                  <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                    {currentStep.fields.map((field) => (
                      <FieldControl
                        field={field}
                        key={field.name}
                        value={values[field.name]}
                        onChange={(value) => updateField(field.name, value)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-between">
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-agro-500 px-5 text-sm font-bold text-agro-700 transition hover:bg-agro-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
                  disabled={activeStep === 0}
                  type="button"
                  onClick={goBack}
                >
                  <ArrowLeft size={17} />
                  Anterior
                </button>
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-6 text-sm font-bold text-white transition hover:bg-agro-700"
                  type="button"
                  onClick={isLastStep ? resetForm : goNext}
                >
                  {isLastStep ? "Nueva simulación" : "Siguiente"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>

          <div className="m-4 flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-agro-600 text-white">
                <Sprout size={22} />
              </span>
              <p>
                Los resultados se recalculan automáticamente. Compara tus datos con el Escenario 1 -
                Inicial para evaluar el impacto de tus decisiones.
              </p>
            </div>
          </div>
        </div>

        <div className={`grid content-start gap-4 border-t border-slate-200 p-4 xl:border-l xl:border-t-0 ${enableInternalScroll ? "overflow-y-auto" : ""}`}>
          <ReferencePanel initialResults={initialResults} values={values} />
        </div>
      </div>
      {showLiveSummary ? <LiveSummary results={results} /> : null}
    </section>
  );
}

export default PlaceholderContent;
