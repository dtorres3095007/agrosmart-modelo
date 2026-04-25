export const pageRoutes = {
  home: "/",
  "project-info": "/proyecto",
  calculator: "/calculadora",
  results: "/resultados",
  comparison: "/comparacion",
  sensitivity: "/analisis",
  "quick-guide": "/guia-rapida"
};

export function getPageFromPath(pathname) {
  return Object.entries(pageRoutes).find(([, path]) => path === pathname)?.[0] || "project-info";
}

export function navigateToPage(pageId) {
  const path = pageRoutes[pageId] || pageRoutes["project-info"];
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
