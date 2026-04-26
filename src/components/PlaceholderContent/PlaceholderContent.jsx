import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import { useCalculatorWizard } from "../../hooks/useCalculatorWizard.js";
import { formatCurrency, formatNumber } from "../../utils/financialCalculations.js";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../utils/router.js";
import { metricToneClasses, placeholderIcons, referenceRows } from "./constants.js";
import { placeholderTranslations } from "./translations.js";

function MetricCard({ icon: Icon, label, value, tone = "green" }) {
  return (
    <article className={`rounded-lg border p-4 ${metricToneClasses[tone]}`}>
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
  const InfoIcon = placeholderIcons.info;

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-agro-900">{placeholderTranslations.reference.title}</h3>
        <InfoIcon size={18} className="text-sky-700" />
      </div>
      <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
        {placeholderTranslations.reference.note}
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
          <span className="font-semibold text-slate-600">{placeholderTranslations.reference.currentArea}</span>
          <span className="font-bold text-slate-900">{formatNumber(values.area, { minimumFractionDigits: 2 })} ha</span>
        </div>
        <div className="mt-2 flex justify-between gap-3">
          <span className="font-semibold text-slate-600">{placeholderTranslations.reference.baseUtility}</span>
          <span className="font-bold text-agro-800">{formatCurrency(initialResults.utility)}</span>
        </div>
      </div>
    </aside>
  );
}

function LiveSummary({ layout = "footer", results }) {
  const isSidebar = layout === "sidebar";

  return (
    <aside className={`${isSidebar ? "rounded-lg border border-slate-200 bg-white p-5" : "border-t border-slate-200 bg-white p-4"}`}>
      <div className={`flex flex-col gap-1 ${isSidebar ? "" : "sm:flex-row sm:items-center sm:gap-3"}`}>
        <p className="text-sm font-bold text-agro-700">{placeholderTranslations.liveSummary.title}</p>
        <p className="text-xs leading-5 text-slate-500">
          {placeholderTranslations.liveSummary.description}
        </p>
      </div>
      <div className={`mt-3 grid gap-3 ${isSidebar ? "" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
        {placeholderTranslations.liveSummary.items.map((item) => {
          const Icon = placeholderIcons[item.icon];
          const value = item.suffix === "$" ? formatCurrency(results[item.valueKey]) : formatNumber(results[item.valueKey]);

          return (
            <article className="rounded-lg border border-slate-200 bg-white p-3" key={item.label}>
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.tone}`}>
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-600">{item.label}</p>
                  <p className="mt-1 truncate text-sm font-bold text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{item.suffix}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className={`mt-3 text-xs font-semibold text-slate-500 ${isSidebar ? "" : "text-center"}`}>
        {placeholderTranslations.liveSummary.footer}
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

function formatInputValue(field, value) {
  if (field.prefix === "$") {
    return formatCurrency(value);
  }

  if (field.suffix) {
    return `${formatNumber(value, { maximumFractionDigits: 2 })} ${field.suffix}`;
  }

  return String(value ?? "");
}

const PdfReport = React.forwardRef(function PdfReport({ initialResults, results, steps, values }, ref) {
  const comparisonGap = results.utility - initialResults.utility;
  const { pdf, results: resultTexts } = placeholderTranslations;
  const exportTexts = placeholderTranslations.export;
  const TrendingIcon = placeholderIcons.trending;
  const WalletIcon = placeholderIcons.wallet;
  const ChartIcon = placeholderIcons.barChart;
  const inputGroups = steps
    .filter((step) => step.fields.length > 0)
    .map((step) => ({
      title: step.title,
      rows: step.fields.map((field) => [field.label, formatInputValue(field, values[field.name])])
    }));

  return (
    <div className="fixed -left-[9999px] top-0 w-[980px] bg-white p-10 text-slate-900" ref={ref}>
      <div className="border-b border-slate-200 pb-5">
        <p className="text-sm font-bold uppercase tracking-wide text-agro-700">{pdf.brand}</p>
        <h1 className="mt-2 text-3xl font-bold text-agro-900">{pdf.title}</h1>
        <p className="mt-2 text-sm text-slate-600">{pdf.description}</p>
      </div>

      <section className="mt-6">
        <h2 className="text-lg font-bold text-agro-900">{pdf.inputsTitle}</h2>
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

      <section className="mt-6">
        <h2 className="text-lg font-bold text-agro-900">{pdf.mainResultsTitle}</h2>
        <div className="mt-3 grid grid-cols-3 gap-4">
          <MetricCard icon={TrendingIcon} label={resultTexts.income} value={formatCurrency(results.income)} />
          <MetricCard icon={WalletIcon} label={resultTexts.costs} value={formatCurrency(results.totalCosts)} tone="amber" />
          <MetricCard icon={ChartIcon} label={resultTexts.utility} value={formatCurrency(results.utility)} tone="blue" />
        </div>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-4">
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">{resultTexts.incomeVsCosts}</h3>
          <SimpleBars data={results.projections} keys={["income", "costs"]} />
        </article>
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">{resultTexts.utilityEvolution}</h3>
          <SimpleBars data={results.projections} keys={["utility"]} />
        </article>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-4">
        <article className="rounded-lg border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900">{resultTexts.financialIndicators}</h3>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <dt className="font-semibold text-slate-600">{resultTexts.van}</dt>
              <dd className="font-bold">{formatCurrency(results.netPresentValue)}</dd>
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
              <dd className="font-bold">{results.paybackYear ? `${exportTexts.yearPrefix} ${results.paybackYear}` : resultTexts.noRecovery}</dd>
            </div>
          </dl>
        </article>
        <article className="rounded-lg border border-agro-100 bg-agro-50 p-4">
          <h3 className="font-bold text-agro-900">{pdf.conclusionsTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {pdf.conclusionsIntro} {formatCurrency(results.utility)}. {pdf.conclusionsDifference}{" "}
            {formatCurrency(comparisonGap)}.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-700">
            {pdf.notes.map((note) => (
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

function ResultsView({ initialResults, results, resultsRef, values, onExportData, onExportPdf }) {
  const comparisonGap = results.utility - initialResults.utility;
  const resultTexts = placeholderTranslations.results;
  const exportTexts = placeholderTranslations.export;
  const DownloadIcon = placeholderIcons.download;
  const FileSpreadsheetIcon = placeholderIcons.fileSpreadsheet;
  const TrendingIcon = placeholderIcons.trending;
  const WalletIcon = placeholderIcons.wallet;
  const ChartIcon = placeholderIcons.barChart;

  return (
    <div className="space-y-5">
      <div ref={resultsRef} className="space-y-5 bg-white">
        <div className="grid gap-4 lg:grid-cols-3">
          <MetricCard icon={TrendingIcon} label={resultTexts.income} value={formatCurrency(results.income)} />
          <MetricCard icon={WalletIcon} label={resultTexts.costs} value={formatCurrency(results.totalCosts)} tone="amber" />
          <MetricCard icon={ChartIcon} label={resultTexts.utility} value={formatCurrency(results.utility)} tone="blue" />
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultTexts.incomeVsCosts}</h3>
            <SimpleBars data={results.projections} keys={["income", "costs"]} />
            <div className="mt-3 flex gap-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-agro-600" />{resultTexts.income}</span>
              <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-amber-500" />{resultTexts.costs}</span>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultTexts.utilityEvolution}</h3>
            <SimpleBars data={results.projections} keys={["utility"]} />
            <div className="mt-3 text-xs font-bold text-slate-600">{resultTexts.projection} {values.inflation}%.</div>
          </article>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultTexts.financialIndicators}</h3>
            <dl className="mt-4 grid gap-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultTexts.van}</dt>
                <dd className="font-bold text-slate-900">{formatCurrency(results.netPresentValue)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultTexts.benefitCostRatio}</dt>
                <dd className="font-bold text-slate-900">{formatNumber(results.benefitCostRatio, { maximumFractionDigits: 2 })}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <dt className="font-semibold text-slate-600">{resultTexts.breakEvenPoint}</dt>
                <dd className="font-bold text-slate-900">{formatNumber(results.breakEvenPoint, { maximumFractionDigits: 1 })}%</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-600">{resultTexts.payback}</dt>
                <dd className="font-bold text-slate-900">
                  {results.paybackYear ? `${exportTexts.yearPrefix} ${results.paybackYear}` : resultTexts.noRecovery}
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">{resultTexts.userVsScenario}</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-md bg-slate-50 p-3">
                <span className="font-semibold text-slate-600">{resultTexts.userUtility}</span>
                <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(results.utility)}</p>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <span className="font-semibold text-slate-600">{resultTexts.baseUtility}</span>
                <p className="mt-1 text-lg font-bold text-slate-950">{formatCurrency(initialResults.utility)}</p>
              </div>
              <div className="rounded-md bg-agro-50 p-3">
                <span className="font-semibold text-agro-800">{resultTexts.difference}</span>
                <p className="mt-1 text-lg font-bold text-agro-900">{formatCurrency(comparisonGap)}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50" type="button" onClick={onExportPdf}>
          <DownloadIcon size={17} />
          {resultTexts.exportPdf}
        </button>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-4 text-sm font-bold text-white transition hover:bg-agro-700" type="button" onClick={onExportData}>
          <FileSpreadsheetIcon size={17} />
          {resultTexts.exportExcel}
        </button>
      </div>
    </div>
  );
}

function PlaceholderContent({
  enableInternalScroll = false,
  hideHeader = false,
  sidebarMode = "reference",
  showLiveSummary = false
}) {
  const resultsRef = useRef(null);
  const pdfReportRef = useRef(null);
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
  const navigate = useNavigate();
  const isLastStep = activeStep === steps.length - 1;
  const ArrowLeftIcon = placeholderIcons.arrowLeft;
  const ArrowRightIcon = placeholderIcons.arrowRight;
  const BookIcon = placeholderIcons.book;
  const RefreshIcon = placeholderIcons.refresh;
  const SproutIcon = placeholderIcons.sprout;
  const { export: exportTexts, header, results: resultTexts } = placeholderTranslations;

  const exportData = () => {
    const inputRows = Object.entries(values).map(([key, value]) => ({
      seccion: exportTexts.inputSection,
      campo: key,
      valor: value
    }));
    const resultRows = [
      [exportTexts.production, results.production],
      [resultTexts.income, results.income],
      [exportTexts.totalCosts, results.totalCosts],
      [exportTexts.netUtility, results.utility],
      [resultTexts.van, results.netPresentValue],
      [resultTexts.benefitCostRatio, results.benefitCostRatio],
      [resultTexts.breakEvenPoint, results.breakEvenPoint],
      [resultTexts.payback, results.paybackYear || resultTexts.noRecovery]
    ].map(([campo, valor]) => ({ seccion: exportTexts.resultSection, campo, valor }));
    const projectionRows = results.projections.map((item) => ({
      [exportTexts.year]: item.year,
      [exportTexts.income]: item.income,
      [exportTexts.costs]: item.costs,
      [exportTexts.utility]: item.utility,
      [exportTexts.cashFlow]: item.cashFlow
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(inputRows), exportTexts.inputSheet);
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(resultRows), exportTexts.resultsSheet);
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(projectionRows), exportTexts.projectionSheet);
    XLSX.writeFile(workbook, exportTexts.excelFileName);
  };

  const exportPdf = async () => {
    if (!pdfReportRef.current) return;

    const canvas = await html2canvas(pdfReportRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true
    });
    const image = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ format: "a4", orientation: "portrait", unit: "mm" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const imageWidth = pageWidth - margin * 2;
    const imageHeight = (canvas.height * imageWidth) / canvas.width;
    let position = margin;
    let remainingHeight = imageHeight;

    pdf.addImage(image, "PNG", margin, position, imageWidth, imageHeight);
    remainingHeight -= pageHeight - margin * 2;

    while (remainingHeight > 0) {
      position = remainingHeight - imageHeight + margin;
      pdf.addPage();
      pdf.addImage(image, "PNG", margin, position, imageWidth, imageHeight);
      remainingHeight -= pageHeight - margin * 2;
    }

    pdf.save(exportTexts.pdfFileName);
  };

  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white shadow-panel ${
        enableInternalScroll ? "flex min-h-[590px] flex-col" : ""
      }`}
    >
      {!hideHeader ? (
        <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{header.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{header.description}</p>
          </div>
          <button
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-agro-500 px-4 text-sm font-bold text-agro-700 transition hover:bg-agro-50"
            type="button"
            onClick={() => navigate(pageRoutes["quick-guide"])}
          >
            <BookIcon size={17} />
            {header.guideButton}
          </button>
        </div>
      ) : null}

      <div
        className={`grid gap-4 p-0 xl:grid-cols-[1fr_330px] ${
          enableInternalScroll ? "flex-1" : ""
        }`}
      >
        <div className="min-w-0">
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
                  <RefreshIcon size={16} />
                  {resultTexts.restart}
                </button>
              </div>

              <div className="mt-6">
                {isLastStep ? (
                  <ResultsView
                    initialResults={initialResults}
                    results={results}
                    resultsRef={resultsRef}
                    values={values}
                    onExportData={exportData}
                    onExportPdf={exportPdf}
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
                  <ArrowLeftIcon size={17} />
                  {resultTexts.previous}
                </button>
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agro-600 px-6 text-sm font-bold text-white transition hover:bg-agro-700"
                  type="button"
                  onClick={isLastStep ? resetForm : goNext}
                >
                  {isLastStep ? resultTexts.newSimulation : resultTexts.next}
                  <ArrowRightIcon size={17} />
                </button>
              </div>
            </div>
          </div>

          <div className="m-4 flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-agro-600 text-white">
                <SproutIcon size={22} />
              </span>
              <p>{placeholderTranslations.helper}</p>
            </div>
          </div>
        </div>

        <div className="grid content-start gap-4 border-t border-slate-200 p-4 xl:border-l xl:border-t-0">
          {sidebarMode === "live-summary" ? (
            <LiveSummary layout="sidebar" results={results} />
          ) : (
            <ReferencePanel initialResults={initialResults} values={values} />
          )}
        </div>
      </div>
      <PdfReport initialResults={initialResults} results={results} steps={steps} values={values} ref={pdfReportRef} />
      {showLiveSummary ? <LiveSummary results={results} /> : null}
    </section>
  );
}

export default PlaceholderContent;
