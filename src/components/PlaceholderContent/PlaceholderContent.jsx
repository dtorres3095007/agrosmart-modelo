import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import { isFieldVisible } from "../../constants/calculator.js";
import { useCalculatorWizard } from "../../hooks/useCalculatorWizard.js";
import { pageRoutes } from "../../utils/router.js";
import CalculatorHeader from "./components/CalculatorHeader/CalculatorHeader.jsx";
import FieldControl from "./components/FieldControl/FieldControl.jsx";
import HelperCallout from "./components/HelperCallout/HelperCallout.jsx";
import LiveSummary from "./components/LiveSummary/LiveSummary.jsx";
import PdfReport from "./components/PdfReport/PdfReport.jsx";
import ReferencePanel from "./components/ReferencePanel/ReferencePanel.jsx";
import ResultsView from "./components/ResultsView/ResultsView.jsx";
import Stepper from "./components/Stepper/Stepper.jsx";
import WizardNavigation from "./components/WizardNavigation/WizardNavigation.jsx";
import WizardStepHeader from "./components/WizardStepHeader/WizardStepHeader.jsx";
import { exportTranslations } from "./translations.js";

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
  const visibleFields = currentStep.fields.filter((field) => isFieldVisible(field, values));

  const exportData = () => {
    const inputRows = steps.flatMap((step) =>
      step.fields
        .filter((field) => isFieldVisible(field, values))
        .map((field) => ({
          seccion: exportTranslations.inputSection,
          campo: field.label,
          valor: values[field.name]
        }))
    );
    const resultRows = [
      [exportTranslations.production, results.production],
      [exportTranslations.income, results.income],
      [exportTranslations.totalCosts, results.totalCosts],
      [exportTranslations.netUtility, results.utility],
      [exportTranslations.van, results.netPresentValue],
      [exportTranslations.benefitCostRatio, results.benefitCostRatio],
      [exportTranslations.breakEvenPoint, results.breakEvenPoint],
      [exportTranslations.payback, results.paybackYear || exportTranslations.noRecovery]
    ].map(([campo, valor]) => ({ seccion: exportTranslations.resultSection, campo, valor }));
    const projectionRows = results.projections.map((item) => ({
      [exportTranslations.year]: item.year,
      [exportTranslations.income]: item.income,
      [exportTranslations.costs]: item.costs,
      [exportTranslations.utility]: item.utility,
      [exportTranslations.cashFlow]: item.cashFlow
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(inputRows), exportTranslations.inputSheet);
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(resultRows), exportTranslations.resultsSheet);
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(projectionRows), exportTranslations.projectionSheet);
    XLSX.writeFile(workbook, exportTranslations.excelFileName);
  };

  const exportPdf = async () => {
    if (!pdfReportRef.current) return;

    const pdf = new jsPDF({ format: "a4", orientation: "portrait", unit: "mm" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const usableWidth = pageWidth - margin * 2;
    const usableHeight = pageHeight - margin * 2;
    const reportWidth = pdfReportRef.current.offsetWidth || 980;
    const blocks = Array.from(pdfReportRef.current.querySelectorAll("[data-pdf-block='true']"));
    const printableBlocks = blocks.length ? blocks : [pdfReportRef.current];
    const blockGap = 6;
    let position = margin;

    for (const block of printableBlocks) {
      const canvas = await html2canvas(block, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true
      });
      const image = canvas.toDataURL("image/png");
      const widthRatio = Math.min((block.offsetWidth || reportWidth) / reportWidth, 1);
      let imageWidth = usableWidth * widthRatio;
      let imageHeight = (canvas.height * imageWidth) / canvas.width;

      if (imageHeight > usableHeight) {
        const fitRatio = usableHeight / imageHeight;
        imageWidth *= fitRatio;
        imageHeight = usableHeight;
      }

      if (position > margin && position + imageHeight > pageHeight - margin) {
        pdf.addPage();
        position = margin;
      }

      pdf.addImage(image, "PNG", margin, position, imageWidth, imageHeight);
      position += imageHeight + blockGap;
    }

    pdf.save(exportTranslations.pdfFileName);
  };

  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white shadow-panel ${
        enableInternalScroll ? "flex min-h-[590px] flex-col" : ""
      }`}
    >
      {!hideHeader ? <CalculatorHeader onGuideClick={() => navigate(pageRoutes["quick-guide"])} /> : null}

      <div className={`grid gap-4 p-0 xl:grid-cols-[1fr_330px] ${enableInternalScroll ? "flex-1" : ""}`}>
        <div className="min-w-0">
          <div className="rounded-b-lg border-b border-slate-200">
            <Stepper activeStep={activeStep} steps={steps} onStepClick={setActiveStep} />
            <div className="min-w-0 flex-1 p-5 md:p-7">
              <WizardStepHeader activeStep={activeStep} currentStep={currentStep} onReset={resetForm} />

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
                    {visibleFields.map((field) => (
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

              <WizardNavigation
                activeStep={activeStep}
                isLastStep={isLastStep}
                onBack={goBack}
                onNext={isLastStep ? resetForm : goNext}
              />
            </div>
          </div>

          <HelperCallout />
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
