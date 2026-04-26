import React from "react";
import AssumptionsSection from "./components/AssumptionsSection.jsx";
import BaselineScenarioSection from "./components/BaselineScenarioSection.jsx";
import DecisionSection from "./components/DecisionSection.jsx";
import MethodologySection from "./components/MethodologySection.jsx";
import ProjectFooter from "./components/ProjectFooter.jsx";
import ProjectHero from "./components/ProjectHero.jsx";
import ProjectIntro from "./components/ProjectIntro.jsx";

function ProjectInfo() {
  return (
    <>
      <ProjectHero />
      <ProjectIntro />

      <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
        <MethodologySection />
        <AssumptionsSection />
      </div>

      <BaselineScenarioSection />
      <DecisionSection />
      <ProjectFooter />
    </>
  );
}

export default ProjectInfo;
