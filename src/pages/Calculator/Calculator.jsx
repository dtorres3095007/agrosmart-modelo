import React from "react";
import PlaceholderContent from "../../components/PlaceholderContent/PlaceholderContent.jsx";
import { heroContent } from "../../constants/homeContent.jsx";

function Calculator() {
  return (
    <>
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
        <div className="relative min-h-[130px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroContent.image}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.95)_48%,rgba(255,255,255,0.18)_100%)]" />
          <div className="relative max-w-2xl px-6 py-7 md:px-8">
            <h1 className="text-3xl font-bold text-agro-900">Calculadora Económico-Financiera</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Ingresa los parámetros de tu sistema productivo y revisa los indicadores financieros
              actualizados en tiempo real.
            </p>
          </div>
        </div>
      </section>

      <PlaceholderContent enableInternalScroll hideHeader showLiveSummary />
    </>
  );
}

export default Calculator;
