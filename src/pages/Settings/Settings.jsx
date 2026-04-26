import React from "react";
import AssumptionsSection from "./components/AssumptionsSection.jsx";
import DocumentsSection from "./components/DocumentsSection.jsx";
import ParametersSection from "./components/ParametersSection.jsx";
import ScopeLimitationsSection from "./components/ScopeLimitationsSection.jsx";
import SettingsFooter from "./components/SettingsFooter.jsx";
import SettingsHero from "./components/SettingsHero.jsx";
import WorkflowSection from "./components/WorkflowSection.jsx";

function Settings() {
  return (
    <>
      <SettingsHero />

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <WorkflowSection />
        <ParametersSection />
      </div>

      <AssumptionsSection />

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <ScopeLimitationsSection />
        <DocumentsSection />
      </div>

      <SettingsFooter />
    </>
  );
}

export default Settings;
