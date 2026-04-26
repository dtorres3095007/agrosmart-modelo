/** Must match Vite `base` (without trailing slash) and `BrowserRouter` basename. */
export const ROUTER_BASENAME = "/modelo-financiero";

export const pageRoutes = {
  home: "/",
  "project-info": "/proyecto",
  calculator: "/calculadora",
  results: "/resultados",
  comparison: "/comparacion",
  sensitivity: "/analisis",
  "quick-guide": "/guia-rapida"
};

/** Pathname from `useLocation()` is already relative to React Router basename. */
export function getPageFromPath(pathname) {
  return Object.entries(pageRoutes).find(([, path]) => path === pathname)?.[0] || "project-info";
}
