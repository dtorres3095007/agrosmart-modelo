import React from "react";
import { BarChart3, TrendingUp, Wallet } from "lucide-react";
import { isFieldVisible } from "../../../../constants/calculator.js";
import { formatCurrency, formatNumber } from "../../../../utils/financialCalculations.js";
import MetricCard from "../MetricCard/MetricCard.jsx";
import SimpleBars from "../SimpleBars/SimpleBars.jsx";
import { pdfReportTranslations } from "./translations.js";
import { formatInputValue } from "./utils.js";

const PdfReport = React.forwardRef(function PdfReport({ initialResults, results, steps, values }, ref) {
  const comparisonGap = results.utility - initialResults.utility;
  const resultTexts = pdfReportTranslations.results;
  const inputGroups = steps
    .map((step) => ({
      ...step,
      fields: step.fields.filter((field) => isFieldVisible(field, values))
    }))
    .filter((step) => step.fields.length > 0)
    .map((step) => ({
      title: step.title,
      rows: step.fields.map((field) => [field.label, formatInputValue(field, values[field.name])])
    }));

  return (
    <div className="fixed -left-[9999px] top-0 w-[980px] bg-white p-10 text-slate-900" ref={ref}>
      <div className="border-b border-slate-200 pb-5" data-pdf-block="true">
        <p className="text-sm font-bold uppercase tracking-wide text-agro-700">{pdfReportTranslations.brand}</p>
        <h1 className="mt-2 text-3xl font-bold text-agro-900">{pdfReportTranslations.title}</h1>
        <p className="mt-2 text-sm text-slate-600">{pdfReportTranslations.description}</p>
      </div>

      <section className="mt-6" data-pdf-block="true">
        <h2 className="text-lg font-bold text-agro-900">{pdfReportTranslations.inputsTitle}</h2>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {inputGroups.map((group) => (
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4" key={group.title}>
              <h3 className="text-sm font-bold text-agro-900">{group.title}</h3>
              <div className="mt-3 divide-y divide-slate-200">
                {group.rows.map(([label, value]) => (
                  <div className="flex justify-between gap-3 py-2 text-xs" key={label}>
                    <span className="font-semibold text-slate-600">{label}</span>
                    <span className="text-right font-bold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6" data-pdf-block="true">
        <h2 className="text-lg font-bold text-agro-900">{pdfReportTranslations.mainResultsTitle}</h2>
        <div className="mt-3 grid grid-cols-3 gap-4">
          <MetricCard icon={TrendingUp} label={resultTexts.income} value={formatCurrency(results.income)} />
          <MetricCard icon={Wallet} label={resultTexts.costs} value={formatCurrency(results.totalCosts)} tone="amber" />
          <MetricCard icon={BarChart3} label={resultTexts.utility} value={formatCurrency(results.utility)} tone="blue" />
        </div>
      </section>

      <section className="mt-6 space-y-4">
        <article className="rounded-lg border border-slate-200 p-4" data-pdf-block="true">
          <h3 className="font-bold text-slate-900">{resultTexts.incomeVsCosts}</h3>
          <SimpleBars data={results.projections} keys={["income", "costs"]} />
        </article>
        <article className="rounded-lg border border-slate-200 p-4" data-pdf-block="true">
          <h3 className="font-bold text-slate-900">{resultTexts.utilityEvolution}</h3>
          <SimpleBars data={results.projections} keys={["utility"]} />
        </article>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-4" data-pdf-block="true">
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">{resultTexts.financialIndicators}</h3>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">{resultTexts.van}</dt>
              <dd className="font-bold">{formatCurrency(results.netPresentValue)}</dd>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">{resultTexts.internalRate}</dt>
              <dd className="font-bold">
                {results.internalRate === null
                  ? resultTexts.notApplicable
                  : `${formatNumber(results.internalRate, { maximumFractionDigits: 2 })}%`}
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">{resultTexts.benefitCostRatio}</dt>
              <dd className="font-bold">{formatNumber(results.benefitCostRatio, { maximumFractionDigits: 2 })}</dd>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">{resultTexts.breakEvenPoint}</dt>
              <dd className="font-bold">{formatNumber(results.breakEvenPoint, { maximumFractionDigits: 1 })}%</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold text-slate-600">{resultTexts.payback}</dt>
              <dd className="font-bold">{results.paybackYear ? `${resultTexts.yearPrefix} ${results.paybackYear}` : resultTexts.noRecovery}</dd>
            </div>
          </dl>
        </article>
        <article className="rounded-lg border border-agro-100 bg-agro-50 p-4">
          <h3 className="font-bold text-agro-900">{pdfReportTranslations.conclusionsTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {pdfReportTranslations.conclusionsIntro} {formatCurrency(results.utility)}. {pdfReportTranslations.conclusionsDifference}{" "}
            {formatCurrency(comparisonGap)}.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-700">
            {pdfReportTranslations.notes.map((note) => (
              <li className="flex gap-2" key={note}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-agro-700" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
});

export default PdfReport;
