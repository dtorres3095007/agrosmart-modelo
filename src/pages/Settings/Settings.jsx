import React from "react";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Database,
  Download,
  Info,
  LineChart,
  Settings as SettingsIcon,
  Sprout,
  Target,
  Upload
} from "lucide-react";
import { heroContent } from "../../constants/homeContent.jsx";

const platformSteps = [
  {
    icon: Database,
    title: "Ingresa datos",
    text: "Completa la información productiva, económica y operativa del sistema."
  },
  {
    icon: Calculator,
    title: "El modelo calcula",
    text: "El modelo procesa datos y genera indicadores financieros automáticamente."
  },
  {
    icon: BarChart3,
    title: "Analiza resultados",
    text: "Revisa resultados por escenario y principales indicadores generados."
  },
  {
    icon: LineChart,
    title: "Compara y evalúa",
    text: "Compara escenarios, analiza sensibilidad y toma mejores decisiones."
  },
  {
    icon: Download,
    title: "Exporta información",
    text: "Descarga reportes y gráficos para compartir o respaldar tu análisis."
  }
];

const parameterGroups = [
  {
    icon: Sprout,
    title: "Parámetros productivos",
    text: "Rendimientos, áreas cultivadas, número de ciclos, pérdidas, mano de obra, entre otros."
  },
  {
    icon: Calculator,
    title: "Parámetros económicos",
    text: "Precios de venta, costos de insumos, inflación, tasa de descuento e impuestos."
  },
  {
    icon: SettingsIcon,
    title: "Parámetros operativos",
    text: "Riego, energía, uso de agroquímicos, maquinaria, disponibilidad hídrica y prácticas BPA."
  },
  {
    icon: ClipboardList,
    title: "Parámetros de tecnificación",
    text: "Inversiones en tecnología, infraestructura y mejoras productivas consideradas en los escenarios."
  }
];

const assumptions = [
  "Los precios se mantienen constantes dentro de cada escenario base, optimización y modernización.",
  "El horizonte de análisis es de 5 años, con flujos anuales.",
  "Los rendimientos son constantes por ciclo, según la información ingresada por el usuario.",
  "Los flujos de caja no incluyen financiamiento externo.",
  "Los costos de insumos y operaciones se calculan por hectárea y por ciclo productivo.",
  "El análisis no considera efectos macroeconómicos externos no especificados."
];

const scopeItems = [
  "Evalúa la viabilidad económica y financiera de sistemas productivos de yuca y frijol caupi.",
  "Permite comparar escenarios de tecnificación y buenas prácticas agrícolas.",
  "Apoya la toma de decisiones basada en datos y análisis financiero."
];

const limitationItems = [
  "Los resultados dependen de la calidad de los datos ingresados.",
  "No reemplaza el criterio técnico ni la experiencia del productor o asesor.",
  "No considera eventos extraordinarios no contemplados en los supuestos."
];

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

function SettingsHero() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroContent.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.16)_100%)]" />
        <div className="relative max-w-2xl px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold text-agro-900">Guía rápida del Modelo y Plataforma</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Conoce cómo funciona el modelo económico-financiero, los principales componentes que lo
            conforman y cómo utilizar la plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}

function Settings() {
  return (
    <>
      <SettingsHero />

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">1. ¿Cómo funciona la plataforma?</h2>
          <p className="mt-1 text-sm text-slate-600">
            La plataforma sigue un flujo de trabajo simple y estructurado.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {platformSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="relative text-center" key={step.title}>
                  {index < platformSteps.length - 1 ? (
                    <span className="absolute left-1/2 top-8 hidden h-px w-full bg-slate-200 md:block" />
                  ) : null}
                  <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-agro-50 text-agro-700">
                    <Icon size={28} />
                  </span>
                  <span className="absolute left-1/2 top-0 z-20 grid h-6 w-6 -translate-x-10 place-items-center rounded-full bg-agro-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-agro-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">2. Parámetros del modelo</h2>
          <p className="mt-1 text-sm text-slate-600">
            El modelo se compone de cuatro grupos de parámetros principales.
          </p>
          <div className="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
            {parameterGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="flex items-center gap-4 p-4" key={group.title}>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-agro-50 text-agro-700">
                    <Icon size={23} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-agro-900">{group.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{group.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
            <Info className="shrink-0 text-agro-700" size={17} />
            Todos los parámetros pueden ajustarse en la Calculadora antes de ejecutar el modelo.
          </div>
        </SectionCard>
      </div>

      <SectionCard>
        <h2 className="text-lg font-bold text-agro-900">3. Supuestos clave del modelo</h2>
        <p className="mt-1 text-sm text-slate-600">
          Para el correcto funcionamiento, el modelo utiliza los siguientes supuestos generales.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {assumptions.map((item) => (
            <div className="flex items-start gap-3 text-sm leading-6 text-slate-600" key={item}>
              <CheckCircle2 className="mt-0.5 shrink-0 text-agro-600" size={17} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">4. Alcance y limitaciones</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Target className="text-agro-700" size={22} />
                <h3 className="text-sm font-bold text-agro-900">Alcance</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {scopeItems.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-amber-600" size={22} />
                <h3 className="text-sm font-bold text-agro-900">Limitaciones</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {limitationItems.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-lg font-bold text-agro-900">5. Manual de usuario</h2>
          <p className="mt-1 text-sm text-slate-600">
            Descarga la documentación oficial para conocer en detalle el uso de la plataforma.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid min-h-44 place-items-center rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
              <BookOpen className="text-agro-700" size={42} />
              <p className="mt-3 text-sm font-bold text-agro-900">Manual de usuario</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="text-sm font-bold text-agro-900">Manual de usuario</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Guía completa para utilizar la plataforma, entender el modelo, sus parámetros y generar
                reportes.
              </p>
              <button className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-agro-600 px-4 text-sm font-bold text-white transition hover:bg-agro-700" type="button">
                <Download size={17} />
                Descargar manual PDF
              </button>
            </div>
          </div>
        </SectionCard>
      </div>

      <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
            <Info size={24} />
          </div>
          <p>
            La plataforma está diseñada para ser una herramienta de apoyo a la planificación y
            evaluación de sistemas productivos agrosostenibles. Úsala, explora los escenarios y toma
            decisiones informadas.
          </p>
        </div>
        <div className="flex justify-end gap-3 text-agro-800">
          <Upload size={42} strokeWidth={1.6} />
          <Sprout size={42} strokeWidth={1.6} />
        </div>
      </section>
    </>
  );
}

export default Settings;
