import React from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Calculator from "./pages/Calculator/Calculator.jsx";
import Comparison from "./pages/Comparison/Comparison.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo.jsx";
import Results from "./pages/Results/Results.jsx";
import Sensitivity from "./pages/Sensitivity/Sensitivity.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import { getPageFromPath, pageRoutes } from "./utils/router.js";

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = getPageFromPath(location.pathname);

  const onNavigate = (pageId) => {
    const path = pageRoutes[pageId] || pageRoutes["project-info"];
    navigate(path);
  };

  return (
    <AppLayout activePage={activePage} onNavigate={onNavigate}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto" element={<ProjectInfo />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/resultados" element={<Results />} />
        <Route path="/comparacion" element={<Comparison />} />
        <Route path="/analisis" element={<Sensitivity />} />
        <Route path="/guia-rapida" element={<Settings />} />
        <Route path="*" element={<Navigate to="/proyecto" replace />} />
      </Routes>
    </AppLayout>
  );
}

function App() {
  return <AppShell />;
}

export default App;
