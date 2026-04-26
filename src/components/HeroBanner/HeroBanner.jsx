import React from "react";
import { heroBannerIcons, heroBannerImage } from "./constants.js";
import { heroBannerTranslations } from "./translations.js";

function HeroBanner() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="relative min-h-[290px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBannerImage}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_39%,rgba(255,255,255,0.46)_63%,rgba(255,255,255,0.02)_100%)]" />

        <div className="relative flex min-h-[290px] max-w-3xl flex-col justify-center px-6 py-7 md:px-8">
          <h1 className="text-3xl font-bold tracking-normal text-agro-900 md:text-4xl">
            {heroBannerTranslations.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            {heroBannerTranslations.description}
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {heroBannerTranslations.pillars.map((pillar) => {
              const Icon = heroBannerIcons[pillar.icon];

              return (
                <article key={pillar.title}>
                  <Icon className="text-agro-700" size={34} strokeWidth={1.7} />
                  <h2 className="mt-4 text-sm font-bold leading-5 text-slate-900">{pillar.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
