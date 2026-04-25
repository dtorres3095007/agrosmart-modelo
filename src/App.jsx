import React, { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Calculator from "./pages/Calculator/Calculator.jsx";
import Comparison from "./pages/Comparison/Comparison.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo.jsx";
import Results from "./pages/Results/Results.jsx";
import Sensitivity from "./pages/Sensitivity/Sensitivity.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import { getPageFromPath, navigateToPage } from "./utils/router.js";

function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));
  const pages = {
    home: <Home />,
    calculator: <Calculator />,
    comparison: <Comparison />,
    "project-info": <ProjectInfo />,
    results: <Results />,
    sensitivity: <Sensitivity />,
    "quick-guide": <Settings />
  };

  useEffect(() => {
    const syncRoute = () => setActivePage(getPageFromPath(window.location.pathname));
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  return (
    <AppLayout activePage={activePage} onNavigate={navigateToPage}>
      {pages[activePage] || <ProjectInfo />}
    </AppLayout>
  );
}

export default App;
