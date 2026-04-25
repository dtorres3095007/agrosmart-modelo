import React from "react";
import {
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  FileText,
  Leaf,
  LineChart,
  Settings,
  Sprout
} from "lucide-react";
import { heroContent } from "../../constants/homeContent.jsx";
import { formatCurrency, formatNumber } from "../../utils/financialCalculations.js";

const methodologyCards = [
  {
    icon: BarChart3,
    title: "Datos de campo",
    text: "Información productiva real obtenida en los sistemas de yuca y frijol caupi."
  },
  {
    icon: Leaf,
    title: "Evaluación ACV",
    text: "Integración de resultados del ciclo de vida para identificar impactos y puntos críticos."
  },
  {
    icon: BadgeDollarSign,
    title: "Precios de mercado",
    text: "Precios locales actualizados de insumos, productos y servicios utilizados en la producción."
  },
  {
    icon: BookOpen,
    title: "Fuentes oficiales",
    text: "Información de DANE, ICA, FAO y otras bases sectoriales confiables."
  }
];

const assumptionGroups = [
  {
    icon: Sprout,
    title: "Productivos",
    items: [
      "Rendimientos por cultivo",
      "Pérdidas poscosecha 5% - 15%",
      "Uso de bioinsumos según escenario",
      "Mano de obra familiar complementada con jornales"
    ]
  },
  {
    icon: BadgeDollarSign,
    title: "Económicos",
    items: [
      "Precios de venta proyectados",
      "Inflación proyectada",
      "Tasa de descuento 8% - 12%",
      "Vida útil de activos 3 - 15 años"
    ]
  },
  {
    icon: Settings,
    title: "Operativos",
    items: [
      "Áreas disponibles: 17,7 ha y 26,4 ha",
      "Número de ciclos productivos según cultivo",
      "Disponibilidad hídrica variable",
      "Registros productivos por asociación"
    ]
  }
];

const baselineFeatures = [
  "Sin tecnificación.",
  "Uso moderado de agroquímicos.",
  "Mano de obra familiar no monetizada.",
  "Riego sin medición.",
  "Pérdidas poscosecha cercanas al 15%.",
  "Costos productivos mínimos."
];

const baselineIndicators = [
  ["Producción total", `${formatNumber(8300)} kg`],
  ["Producción en bultos", "166"],
  ["Ingresos anuales", formatCurrency(12600000)],
  ["Costos totales", formatCurrency(6727800)],
  ["Utilidad neta", formatCurrency(5872200)],
  ["TIR", "112,54 %"]
];

const decisionItems = [
  ["Permite comparar escenarios productivos", "Evalúa el impacto económico de diferentes niveles de tecnificación y buenas prácticas agrícolas."],
  ["Identifica oportunidades de mejora", "Detecta puntos críticos en costos, productividad y sostenibilidad."],
  ["Apoya la gestión de inversiones", "Proporciona indicadores financieros claros para evaluar la viabilidad de proyectos y tecnologías."],
  ["Promueve la sostenibilidad financiera", "Integra criterios económicos, sociales y ambientales para decisiones responsables y de largo plazo."]
];

function ProjectHero() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroContent.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.16)_100%)]" />
        <div className="relative max-w-2xl px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold text-agro-900">Información del Proyecto</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Conoce el modelo económico-financiero, su metodología, supuestos y cómo se aplica al
            sistema productivo de yuca y frijol caupi.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

function ProjectInfo() {
  return (
    <>
      <ProjectHero />

      <SectionCard>
        <div className="flex gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-agro-100 text-agro-700">
            <FileText size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-agro-900">
              1. Introducción del Modelo Económico-Financiero
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              El modelo permite evaluar la viabilidad productiva, operativa y económica de sistemas
              agrícolas, integrando costos, ingresos, flujos de caja y análisis de escenarios.
            </p>
            <p className="mt-1 text-sm leading-7 text-slate-600">
              Se basa en información real de campo y permite simular diferentes condiciones
              productivas para apoyar la toma de decisiones estratégicas en el corto, mediano y largo
              plazo.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">2. Metodología del Modelo</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {methodologyCards.map((item) => {
              const Icon = item.icon;

              return (
                <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center" key={item.title}>
                  <Icon className="mx-auto text-agro-700" size={34} />
                  <h3 className="mt-4 text-sm font-bold text-agro-900">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">3. Supuestos del Modelo</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {assumptionGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="rounded-lg border border-slate-200 p-4" key={group.title}>
                  <div className="flex items-center gap-3">
                    <Icon className="text-agro-700" size={24} />
                    <h3 className="font-bold text-agro-900">{group.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {group.items.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </SectionCard>
      </div>

      <SectionCard>
        <h2 className="text-lg font-bold text-agro-900">
          4. Escenario 1 - Línea Base (Condición Inicial)
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Representa las condiciones actuales de producción con baja tecnificación y prácticas tradicionales.
        </p>
        <div className="mt-4 grid gap-4 xl:grid-cols-[0.8fr_1.7fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-agro-900">Características principales</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-1">
              {baselineFeatures.map((item) => (
                <li className="flex items-start gap-2" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-agro-600" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-agro-900">Indicadores clave (por 1 ha)</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {baselineIndicators.map(([label, value]) => (
                <article className="min-w-0 rounded-lg border border-slate-200 p-4 text-center" key={label}>
                  <p className="min-h-8 text-xs font-semibold leading-4 text-slate-600">{label}</p>
                  <p className="mt-3 break-words text-lg font-bold leading-6 text-slate-950">{value}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ClipboardList size={15} />
              Resultados aparentes que no incluyen todos los costos reales del sistema.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <h2 className="text-lg font-bold text-agro-900">
          5. Importancia del Modelo para la Toma de Decisiones
        </h2>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {decisionItems.map(([title, text]) => (
            <article className="flex gap-4 rounded-lg border border-slate-200 p-4" key={title}>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-agro-50 text-agro-700">
                <Sprout size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-agro-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>

      <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-agro-700">
            <Leaf size={28} />
          </div>
          <p>
            Este modelo es una herramienta de apoyo para la planificación y evaluación de sistemas
            productivos agrosostenibles. Los resultados dependen de la calidad de los datos ingresados
            y de las condiciones reales de cada sistema.
          </p>
        </div>
        <div className="flex justify-end gap-3 text-agro-800">
          <Calculator size={44} strokeWidth={1.6} />
          <LineChart size={44} strokeWidth={1.6} />
          <Sprout size={44} strokeWidth={1.6} />
        </div>
      </section>
    </>
  );
}

export default ProjectInfo;
