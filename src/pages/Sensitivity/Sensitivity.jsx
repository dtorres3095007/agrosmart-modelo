import React from "react";
import {
  BarChart3,
  CheckCircle2,
  Info,
  Leaf,
  LineChart,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp
} from "lucide-react";
import { heroContent } from "../../constants/homeContent.jsx";
import { formatCurrency } from "../../utils/financialCalculations.js";

const priceVariation = [
  { label: "-20%", scenario1: 10080000, scenario2: 11476080, scenario3: 14087040 },
  { label: "Base", scenario1: 12600000, scenario2: 14345100, scenario3: 17608800 },
  { label: "+20%", scenario1: 15120000, scenario2: 17214120, scenario3: 21130560 }
];

const baselineSensitivity = [
  ["-20%", "-$6.124.000", "32,1%", "-$4.251.600", "0,65"],
  ["-10%", "$6.103.000", "41,2%", "$3.102.300", "1,12"],
  ["0% (Base)", "$19.073.302", "112,54%", "$5.872.200", "1,57"],
  ["+10%", "$24.921.000", "148,7%", "$8.642.100", "1,95"],
  ["+20%", "$30.856.000", "186,3%", "$11.412.000", "2,32"]
];

const riskRows = [
  ["Precios de venta", 92, "Alto", "bg-red-500", "text-red-700 bg-red-50 border-red-200"],
  ["Rendimientos", 55, "Medio", "bg-orange-400", "text-orange-700 bg-orange-50 border-orange-200"],
  ["Costos de insumos", 50, "Medio", "bg-orange-400", "text-orange-700 bg-orange-50 border-orange-200"],
  ["Costos de mano de obra", 28, "Bajo", "bg-agro-600", "text-agro-700 bg-agro-50 border-agro-200"],
  ["Tasa de descuento", 22, "Bajo", "bg-agro-600", "text-agro-700 bg-agro-50 border-agro-200"]
];

const interpretationCards = [
  {
    icon: TrendingUp,
    title: "Alta sensibilidad",
    text: "El VAN y la utilidad neta disminuyen significativamente cuando los precios caen por debajo del -10%."
  },
  {
    icon: ShieldCheck,
    title: "Punto crítico",
    text: "Con una disminución del -20% en precios, el proyecto genera pérdidas y VAN negativo."
  },
  {
    icon: Leaf,
    title: "Mayor resiliencia",
    text: "Incrementos en precios mejoran considerablemente la rentabilidad y la relación beneficio-costo."
  },
  {
    icon: Target,
    title: "Decisión informada",
    text: "Ayuda a evaluar riesgos y establecer estrategias comerciales y de negociación."
  }
];

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

function SensitivityHero() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroContent.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.16)_100%)]" />
        <div className="relative max-w-2xl px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold text-agro-900">Análisis de Sensibilidad</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Evalúa cómo cambian los resultados del modelo ante variaciones en precios,
            rendimientos y costos.
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceRangeSelector() {
  const ranges = ["-20%", "-10%", "0%", "+10%", "+20%"];

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">2. Variación de precios</h2>
      <p className="mt-1 text-sm text-slate-600">Selecciona el rango de variación para el análisis</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {ranges.map((range) => {
          const positive = range.includes("+");
          const negative = range.includes("-");

          return (
            <button
              className={`h-11 min-w-20 rounded-md border px-4 text-sm font-bold ${
                positive
                  ? "border-agro-200 bg-agro-50 text-agro-700"
                  : negative
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
              key={range}
              type="button"
            >
              {range}
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex items-start gap-3 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600">
        <Info className="shrink-0 text-agro-700" size={18} />
        <div>
          <p className="font-bold text-agro-900">Variable analizada</p>
          <p className="mt-1">Precios de venta de los productos: yuca y frijol caupi.</p>
        </div>
      </div>
    </SectionCard>
  );
}

function SensitivityChart() {
  const chartRows = [
    { label: "-20%", van: -6.12, tir: 32.1, utility: -4.25 },
    { label: "-10%", van: 6.1, tir: 41.2, utility: 3.1 },
    { label: "0%", van: 19.07, tir: 112.54, utility: 5.87 },
    { label: "+10%", van: 24.92, tir: 148.7, utility: 8.64 },
    { label: "+20%", van: 30.86, tir: 186.3, utility: 11.41 }
  ];
  const maxValue = Math.max(...chartRows.flatMap((row) => [Math.abs(row.van), row.tir / 4, Math.abs(row.utility)]));

  return (
    <div className="mt-5">
      <div className="grid h-72 grid-cols-5 items-end gap-4 rounded-lg bg-slate-50 p-5">
        {chartRows.map((row) => (
          <div className="flex h-full flex-col justify-end gap-3" key={row.label}>
            <div className="flex h-full items-end justify-center gap-2">
              {[
                ["van", "bg-agro-700", Math.abs(row.van)],
                ["tir", "bg-sky-500", row.tir / 4],
                ["utility", "bg-violet-500", Math.abs(row.utility)]
              ].map(([key, color, value]) => (
                <div
                  className={`w-full max-w-7 rounded-t ${color}`}
                  key={key}
                  style={{ height: `${Math.max((value / maxValue) * 100, 5)}%` }}
                />
              ))}
            </div>
            <p className="text-center text-xs font-bold text-slate-500">{row.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-600">
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-700" />VAN</span>
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-sky-500" />TIR</span>
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-violet-500" />Utilidad neta</span>
      </div>
    </div>
  );
}

function ResultsTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[620px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs text-slate-500">
            {["Variación de precios", "VAN (10%)", "TIR (%)", "Utilidad neta", "Relación B/C"].map((header) => (
              <th className="px-3 py-3 font-bold" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {baselineSensitivity.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  className={`px-3 py-3 font-bold ${
                    row[0].includes("-20") ? "text-red-600" : index === 0 ? "text-slate-700" : "text-agro-800"
                  }`}
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

function RiskBars() {
  return (
    <div className="mt-5 space-y-4">
      {riskRows.map(([label, width, risk, barClass, badgeClass]) => (
        <div className="grid gap-3 sm:grid-cols-[150px_1fr_72px] sm:items-center" key={label}>
          <p className="text-sm font-semibold text-slate-600">{label}</p>
          <div className="h-2 rounded-full bg-slate-100">
            <div className={`h-2 rounded-full ${barClass}`} style={{ width: `${width}%` }} />
          </div>
          <span className={`rounded-full border px-3 py-1 text-center text-xs font-bold ${badgeClass}`}>
            {risk}
          </span>
        </div>
      ))}
    </div>
  );
}

function Sensitivity() {
  return (
    <>
      <SensitivityHero />

      <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">1. ¿Qué es el análisis de sensibilidad?</h2>
          <div className="mt-4 flex gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-agro-100 text-agro-700">
              <LineChart size={30} />
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Permite identificar qué variables tienen mayor impacto sobre los resultados financieros
              del proyecto y qué tan sensibles son los indicadores ante cambios positivos o negativos.
            </p>
          </div>
        </SectionCard>
        <PriceRangeSelector />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">3. Impacto en indicadores financieros clave</h2>
          <p className="mt-1 text-sm text-slate-600">
            Efecto de la variación de precios sobre los indicadores del Escenario 1 - Línea Base.
          </p>
          <SensitivityChart />
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
            <Info className="shrink-0 text-agro-700" size={17} />
            A mayor variación positiva en precios, mayor es el impacto positivo en los indicadores financieros.
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">4. Resumen de resultados por escenario</h2>
          <p className="mt-1 text-sm text-slate-600">Indicadores financieros ante variaciones en precios.</p>
          <ResultsTable />
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
            <Info className="shrink-0 text-agro-700" size={17} />
            El proyecto es más sensible a disminuciones en los precios que a incrementos.
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">5. Interpretación del análisis</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {interpretationCards.map((item) => {
              const Icon = item.icon;

              return (
                <article className="rounded-lg border border-slate-200 p-4" key={item.title}>
                  <Icon className="text-agro-700" size={24} />
                  <h3 className="mt-3 text-sm font-bold text-agro-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">6. Riesgos asociados</h2>
          <p className="mt-1 text-sm text-slate-600">Variables críticas según su impacto en el VAN.</p>
          <RiskBars />
        </SectionCard>
      </div>

      <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
            <Sprout size={24} />
          </div>
          <div>
            <h2 className="font-bold text-agro-900">Conclusión general</h2>
            <p className="mt-1">
              El proyecto es viable en condiciones normales y optimistas de precios, pero presenta
              riesgos importantes ante caídas significativas. Se recomienda monitorear precios de
              mercado y diversificar canales de comercialización.
            </p>
          </div>
        </div>
        <BarChart3 className="shrink-0 text-agro-700" size={48} strokeWidth={1.6} />
      </section>
    </>
  );
}

export default Sensitivity;
