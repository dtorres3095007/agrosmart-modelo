import React from "react";
import {
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Droplets,
  Info,
  Leaf,
  LineChart,
  Settings,
  Sprout,
  TrendingUp,
  Zap
} from "lucide-react";
import { heroContent } from "../../constants/homeContent.jsx";
import { formatCurrency } from "../../utils/financialCalculations.js";

const scenarios = [
  {
    id: "s1",
    name: "Escenario 1",
    subtitle: "Línea Base",
    icon: Sprout,
    tone: "border-agro-500 bg-agro-50 text-agro-800"
  },
  {
    id: "s2",
    name: "Escenario 2",
    subtitle: "Optimización Intermedia",
    icon: Leaf,
    tone: "border-amber-300 bg-amber-50 text-amber-800"
  },
  {
    id: "s3",
    name: "Escenario 3",
    subtitle: "Modernización Técnica",
    icon: Settings,
    tone: "border-slate-200 bg-white text-agro-800"
  }
];

const productiveRows = [
  ["Producción total (kg/ha)", "8.300", "9.450", "11.600", "+39,8%"],
  ["Rendimiento yuca (ton/ha)", "8", "9", "11", "+37,5%"],
  ["Rendimiento frijol caupí (ton/ha)", "0,3", "0,45", "0,6", "+100%"],
  ["Pérdidas poscosecha (%)", "15%", "8%", "5%", "-66,7%"]
];

const economicRows = [
  ["Ingresos anuales ($)", formatCurrency(12600000), formatCurrency(14345100), formatCurrency(17608800), "+39,7%"],
  ["Costos totales ($)", formatCurrency(6727800), formatCurrency(6400000), formatCurrency(6200000), "-7,8%"],
  ["Utilidad neta ($)", formatCurrency(5872200), formatCurrency(7945100), formatCurrency(9352133), "+59,2%"]
];

const profitabilityRows = [
  ["VAN (10%)", formatCurrency(19073302), formatCurrency(25800000), formatCurrency(31500000)],
  ["TIR (%)", "112,54%", "138%", "42%"],
  ["Relación B/C", "1,57", "1,82", "2,05"],
  ["Payback", "-", "1,8 años", "1,9 años"]
];

const technologyRows = [
  ["Nivel tecnológico", "Bajo", "Medio", "Alto"],
  ["Riego", "No medido", "Eficiente básico", "Tecnificado (goteo)"],
  ["Energía", "No controlada", "Parcial", "Solar"],
  ["Mano de obra", "No valorizada", "Parcial", "Eficiente"],
  ["Uso de insumos", "Convencional", "Optimizado", "Alta eficiencia"],
  ["Gestión de datos", "Nula", "Básica", "Digital (app + sensores)"],
  ["Cumplimiento BPA", "Bajo", "Bajo", "Medio"]
];

const chartData = [
  { label: "Escenario 1", income: 12.6, costs: 6.73, utility: 5.87 },
  { label: "Escenario 2", income: 14.35, costs: 6.4, utility: 7.95 },
  { label: "Escenario 3", income: 17.61, costs: 6.2, utility: 9.35 }
];

const conclusionRows = [
  ["Ingresos anuales", "+39,7%"],
  ["Utilidad neta", "+59,2%"],
  ["VAN (10%)", "+65,2%"],
  ["Pérdidas poscosecha", "-66,7%"]
];

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

function ComparisonHero() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroContent.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.16)_100%)]" />
        <div className="relative max-w-2xl px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold text-agro-900">Comparación de Escenarios</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Compara los resultados productivos, económicos y financieros de los tres escenarios para
            identificar el impacto de la tecnificación y las buenas prácticas agrícolas.
          </p>
        </div>
      </div>
    </section>
  );
}

function ScenarioSelector() {
  return (
    <section className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-panel lg:grid-cols-[1fr_1fr_1fr_1.35fr]">
      {scenarios.map((scenario) => {
        const Icon = scenario.icon;

        return (
          <article className={`flex items-center gap-3 rounded-lg border p-4 ${scenario.tone}`} key={scenario.id}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70">
              <Icon size={22} />
            </span>
            <div>
              <p className="text-sm font-bold">{scenario.name}</p>
              <p className="mt-1 text-xs font-semibold opacity-80">{scenario.subtitle}</p>
            </div>
          </article>
        );
      })}
      <article className="flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600">
        <Info className="shrink-0 text-agro-700" size={20} />
        <p>Los valores están expresados por hectárea (1 ha) y proyectados a 5 años.</p>
      </article>
    </section>
  );
}

function DataTable({ headers, rows, showVariation = false }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs text-slate-500">
            {headers.map((header) => (
              <th className="px-3 py-3 font-bold" key={header}>
                {header}
              </th>
            ))}
            {showVariation ? <th className="px-3 py-3 font-bold">Variación E1-E3</th> : null}
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

function ComparisonChart() {
  const maxValue = Math.max(...chartData.flatMap((item) => [item.income, item.costs, item.utility]));

  return (
    <div className="mt-5">
      <div className="flex h-64 items-end gap-5 rounded-lg bg-slate-50 p-5">
        {chartData.map((item) => (
          <div className="flex h-full flex-1 flex-col justify-end gap-3" key={item.label}>
            <div className="flex h-full items-end justify-center gap-2">
              {[
                ["income", "bg-agro-500"],
                ["costs", "bg-amber-400"],
                ["utility", "bg-agro-800"]
              ].map(([key, color]) => (
                <div
                  className={`w-full max-w-8 rounded-t ${color}`}
                  key={key}
                  style={{ height: `${Math.max((item[key] / maxValue) * 100, 6)}%` }}
                  title={`${item.label}: ${item[key]}M`}
                />
              ))}
            </div>
            <p className="text-center text-xs font-bold text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-600">
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-500" />Ingresos anuales</span>
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-amber-400" />Costos totales</span>
        <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-800" />Utilidad neta</span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Info size={15} />
        Valores aproximados en millones de pesos por hectárea.
      </p>
    </div>
  );
}

function ConclusionCard() {
  return (
    <SectionCard className="bg-agro-50">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <Leaf size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-agro-900">Conclusión General</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            El Escenario 3 - Modernización Técnica presenta el mejor desempeño integral, con mayor
            productividad, mayor utilidad y mejores indicadores financieros.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-white/70 p-4">
        <h3 className="text-sm font-bold text-agro-900">Mejora del Escenario 3 vs Escenario 1</h3>
        <div className="mt-3 grid gap-3">
          {conclusionRows.map(([label, value]) => (
            <div className="flex items-center justify-between gap-3 text-sm" key={label}>
              <span className="flex items-center gap-2 font-semibold text-slate-600">
                <CheckCircle2 className="text-agro-600" size={16} />
                {label}
              </span>
              <span className="font-bold text-agro-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

function Comparison() {
  return (
    <>
      <ComparisonHero />
      <ScenarioSelector />

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">1. Comparación Productiva</h2>
          <DataTable
            headers={["Indicador", "Escenario 1", "Escenario 2", "Escenario 3"]}
            rows={productiveRows}
            showVariation
          />
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">2. Comparación Económica</h2>
          <DataTable
            headers={["Concepto", "Escenario 1", "Escenario 2", "Escenario 3"]}
            rows={economicRows}
            showVariation
          />
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">3. Comparación de Rentabilidad</h2>
          <DataTable
            headers={["Indicador", "Escenario 1", "Escenario 2", "Escenario 3"]}
            rows={profitabilityRows}
          />
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_1fr_0.82fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">4. Comparación Tecnológica y Operativa</h2>
          <DataTable
            headers={["Aspecto", "Escenario 1", "Escenario 2", "Escenario 3"]}
            rows={technologyRows}
          />
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">5. Visualización Comparativa</h2>
          <ComparisonChart />
        </SectionCard>

        <ConclusionCard />
      </div>

      <section className="flex items-center gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <Sprout size={24} />
        </div>
        <p>
          Esta comparación permite identificar el impacto económico y financiero de avanzar hacia un
          sistema productivo más tecnificado y sostenible.
        </p>
      </section>
    </>
  );
}

export default Comparison;
