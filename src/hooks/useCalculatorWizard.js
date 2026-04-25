import { useMemo, useState } from "react";
import { initialScenario, wizardSteps } from "../constants/calculator.js";
import { calculateFinancials } from "../utils/financialCalculations.js";

function normalizeValue(field, value) {
  if (field.type !== "number") {
    return value;
  }

  const numericValue = Math.max(Number(value || 0), Number(field.min ?? 0));

  if (field.max !== undefined) {
    return Math.min(numericValue, Number(field.max));
  }

  return numericValue;
}

export function useCalculatorWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(initialScenario);

  const fieldMap = useMemo(
    () =>
      wizardSteps
        .flatMap((step) => step.fields)
        .reduce((fields, field) => ({ ...fields, [field.name]: field }), {}),
    []
  );

  const results = useMemo(() => calculateFinancials(values), [values]);
  const initialResults = useMemo(() => calculateFinancials(initialScenario), []);

  const updateField = (name, value) => {
    const field = fieldMap[name];
    setValues((currentValues) => ({
      ...currentValues,
      [name]: field ? normalizeValue(field, value) : value
    }));
  };

  const resetForm = () => {
    setValues(initialScenario);
    setActiveStep(0);
  };

  const goNext = () => setActiveStep((step) => Math.min(step + 1, wizardSteps.length - 1));
  const goBack = () => setActiveStep((step) => Math.max(step - 1, 0));

  return {
    activeStep,
    currentStep: wizardSteps[activeStep],
    goBack,
    goNext,
    initialResults,
    resetForm,
    results,
    setActiveStep,
    steps: wizardSteps,
    updateField,
    values
  };
}
