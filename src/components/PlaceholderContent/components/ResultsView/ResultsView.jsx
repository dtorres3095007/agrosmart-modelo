import { BarChart3, Download, FileSpreadsheet, TrendingUp, Wallet } from "lucide-react";
import { formatCurrency, formatNumber } from "../../../../utils/financialCalculations.js";
import MetricCard from "../MetricCard/MetricCard.jsx";
import SimpleBars from "../SimpleBars/SimpleBars.jsx";
import { resultsViewTranslations } from "./translations.js";

function ResultsView({ initialResults, results, resultsRef, values, onExportData, onExportPdf }) {
  const comparisonGap = results.utility - initialResults.utility;

  return (
    <div className="space-y-5">
      <div ref={resultsRef} className="space-y-5 bg-white">
        <div className="grid gap-4 lg:grid-cols-3">
          <MetricCard icon={TrendingUp} label={resultsViewTranslations.income} value={formatCurrency(results.income)} />
          <MetricCard icon={Wallet} label={resultsViewTranslations.costs} value={formatCurrency(results.totalCosts)} tone="amber" />
          <MetricCard icon={BarChart3} label={resultsViewTranslations.utility} value={formatCurrency(results.utility)} tone="blue" />
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultsViewTranslations.incomeVsCosts}</h3>
            <SimpleBars data={results.projections} keys={["income", "costs"]} />
            <div className="mt-3 flex gap-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-600" />{resultsViewTranslations.income}</span>
              <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-amber-500" />{resultsViewTranslations.costs}</span>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultsViewTranslations.utilityEvolution}</h3>
            <SimpleBars data={results.projections} keys={["utility"]} />
            <div className="mt-3 text-xs font-bold text-slate-600">
              {resultsViewTranslations.projection} {values.inflation}%.
            </div>
          </article>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultsViewTranslations.financialIndicators}</h3>
            <dl className="mt-4 grid gap-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultsViewTranslations.van}</dt>
                <dd className="font-bold text-slate-900">{formatCurrency(results.netPresentValue)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultsViewTranslations.benefitCostRatio}</dt>
                <dd className="font-bold text-slate-900">{formatNumber(results.benefitCostRatio, { maximumFractionDigits: 2 })}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultsViewTranslations.breakEvenPoint}</dt>
                <dd className="font-bold text-slate-900">{formatNumber(results.breakEvenPoint, { maximumFractionDigits: 1 })}%</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-600">{resultsViewTranslations.payback}</dt>
                <dd className="font-bold text-slate-900">
                  {results.paybackYear ? `${resultsViewTranslations.yearPrefix} ${results.paybackYear}` : resultsViewTranslations.noRecovery}
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultsViewTranslations.userVsScenario}</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-md bg-slate-50 p-3">
                <span className="font-semibold text-slate-600">{resultsViewTranslations.userUtility}</span>
                <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(results.utility)}</p>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <span className="font-semibold text-slate-600">{resultsViewTranslations.baseUtility}</span>
                <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(initialResults.utility)}</p>
              </div>
              <div className="rounded-md bg-agro-50 p-3">
                <span className="font-semibold text-agro-800">{resultsViewTranslations.difference}</span>
                <p className="mt-1 text-lg font-bold text-agro-900">{formatCurrency(comparisonGap)}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50" type="button" onClick={onExportPdf}>
          <Download size={17} />
          {resultsViewTranslations.exportPdf}
        </button>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-4 text-sm font-bold text-white transition hover:bg-agro-700" type="button" onClick={onExportData}>
          <FileSpreadsheet size={17} />
          {resultsViewTranslations.exportExcel}
        </button>
      </div>
    </div>
  );
}

export default ResultsView;
