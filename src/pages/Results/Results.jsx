import React from "react";
import {
  BadgeDollarSign,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Info,
  Leaf,
  Percent,
  RefreshCcw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Target,
  TrendingUp,
  Wallet
} from "lucide-react";
import { initialScenario } from "../../constants/calculator.js";
import { heroContent } from "../../constants/homeContent.jsx";
import { calculateFinancials, formatCurrency, formatNumber } from "../../utils/financialCalculations.js";

const modelOutputs = [
  {
    icon: BadgeDollarSign,
    title: "Ingresos",
    text: "Valor generado por la producción agrícola a partir de la venta de los cultivos.",
    tone: "bg-agro-100 text-agro-700"
  },
  {
    icon: ShoppingCart,
    title: "Costos",
    text: "Costos directos e indirectos necesarios para la operación del sistema productivo.",
    tone: "bg-orange-100 text-orange-700"
  },
  {
    icon: BarChart3,
    title: "Utilidad",
    text: "Diferencia entre ingresos y costos que indica la rentabilidad del sistema.",
    tone: "bg-sky-100 text-sky-700"
  },
  {
    icon: RefreshCcw,
    title: "Flujo de caja",
    text: "Comportamiento de ingresos y egresos a lo largo del horizonte de análisis.",
    tone: "bg-violet-100 text-violet-700"
  }
];

const financialIndicators = [
  {
    icon: BadgeDollarSign,
    title: "VAN",
    text: "Valor actual neto del proyecto a la tasa de descuento definida."
  },
  {
    icon: Percent,
    title: "TIR",
    text: "Mide la rentabilidad del proyecto; mientras mayor sea, más atractivo es."
  },
  {
    icon: Scale,
    title: "Relación B/C",
    text: "Indica cuánto se obtiene por cada unidad monetaria invertida."
  },
  {
    icon: CalendarDays,
    title: "Payback",
    text: "Periodo en el que se recupera la inversión inicial."
  },
  {
    icon: Target,
    title: "Punto de equilibrio",
    text: "Nivel mínimo de ingresos necesario para cubrir todos los costos."
  }
];

const interpretationItems = [
  {
    icon: TrendingUp,
    title: "Evaluar desempeño",
    text: "Permite conocer la rentabilidad y eficiencia económica del sistema productivo."
  },
  {
    icon: RefreshCcw,
    title: "Comparar escenarios",
    text: "Facilita la comparación entre diferentes niveles de tecnificación y prácticas sostenibles."
  },
  {
    icon: ShieldCheck,
    title: "Tomar decisiones",
    text: "Proporciona información clave para priorizar inversiones y mejoras técnicas."
  },
  {
    icon: Leaf,
    title: "Promover sostenibilidad",
    text: "Integra criterios económicos, sociales y ambientales para decisiones responsables."
  }
];

const importantNotes = [
  "Los resultados dependen de la calidad de los datos ingresados.",
  "Los indicadores financieros consideran un horizonte de 5 años.",
  "Tasa de descuento recomendada: 10% configurable.",
  "Se recomienda realizar análisis de sensibilidad para evaluar riesgos."
];

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

function ResultsHero() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroContent.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.16)_100%)]" />
        <div className="relative max-w-2xl px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold text-agro-900">Resultados del Modelo</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Conoce los principales resultados económicos y financieros que genera el modelo a partir
            de los datos ingresados y los escenarios analizados.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResultMetric({ icon: Icon, label, value, tone = "green" }) {
  const tones = {
    green: "bg-agro-50 text-agro-800",
    orange: "bg-orange-50 text-orange-700",
    blue: "bg-sky-50 text-sky-700"
  };

  return (
    <article className="rounded-lg border border-slate-200 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-600">{label}</p>
          <p className={`mt-2 text-lg font-bold ${tones[tone]}`}>{value}</p>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${tones[tone]}`}>
          <Icon size={19} />
        </span>
      </div>
    </article>
  );
}

function Results() {
  const scenarioResults = calculateFinancials(initialScenario);
  const baseline = {
    income: 12600000,
    costs: 6727800,
    utility: 5872200,
    netPresentValue: scenarioResults.netPresentValue,
    internalRate: "112,54 %",
    benefitCostRatio: 1.57
  };

  return (
    <>
      <ResultsHero />

      <SectionCard>
        <h2 className="text-lg font-bold text-agro-900">1. ¿Qué calcula el modelo?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {modelOutputs.map((item) => {
            const Icon = item.icon;

            return (
              <article className="flex gap-4 rounded-lg border border-slate-200 p-4" key={item.title}>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${item.tone}`}>
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-agro-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </SectionCard>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">
            2. Indicadores financieros que genera el modelo
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {financialIndicators.map((item) => {
              const Icon = item.icon;

              return (
                <article className="text-center" key={item.title}>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-agro-100 text-agro-700">
                    <Icon size={25} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-agro-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
            <Info className="shrink-0 text-agro-700" size={18} />
            Estos indicadores permiten evaluar la viabilidad, rentabilidad y sostenibilidad económica
            del sistema productivo.
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">
            3. Ejemplo: Escenario 1 - Línea Base
          </h2>
          <p className="mt-1 text-sm font-semibold text-agro-700">Valores por hectárea</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
            <ResultMetric icon={BadgeDollarSign} label="Ingresos anuales" value={formatCurrency(baseline.income)} />
            <ResultMetric icon={Wallet} label="Costos totales" value={formatCurrency(baseline.costs)} tone="orange" />
            <ResultMetric icon={BarChart3} label="Utilidad neta" value={formatCurrency(baseline.utility)} tone="blue" />
            <ResultMetric icon={RefreshCcw} label="VAN (10%)" value={formatCurrency(baseline.netPresentValue)} />
            <ResultMetric icon={Percent} label="TIR" value={baseline.internalRate} />
            <ResultMetric
              icon={Scale}
              label="Relación B/C"
              value={formatNumber(baseline.benefitCostRatio, { maximumFractionDigits: 2 })}
            />
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
            <Info className="shrink-0 text-agro-700" size={18} />
            Nota: Los valores del escenario 1 no incluyen costos de mano de obra familiar ni consumo
            de agua.
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">4. Interpretación de los resultados</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {interpretationItems.map((item) => {
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
          <h2 className="text-lg font-bold text-agro-900">Información importante</h2>
          <div className="mt-4 grid gap-3">
            {importantNotes.map((note) => (
              <div className="flex items-start gap-2 text-sm text-slate-600" key={note}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-agro-600" size={17} />
                <span>{note}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-end gap-3 text-agro-800">
            <ClipboardCheck size={48} strokeWidth={1.6} />
            <BarChart3 size={48} strokeWidth={1.6} />
            <Sprout size={48} strokeWidth={1.6} />
          </div>
        </SectionCard>
      </div>

      <section className="flex items-center gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <Sprout size={24} />
        </div>
        <p>
          Los resultados del modelo son una herramienta de apoyo para la planificación y la toma de
          decisiones en sistemas agrícolas agrosostenibles.
        </p>
      </section>
    </>
  );
}

export default Results;
