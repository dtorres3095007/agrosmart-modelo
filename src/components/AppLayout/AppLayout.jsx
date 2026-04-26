import React, { useState } from "react";
import { PanelLeft } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Topbar from "../Topbar/Topbar.jsx";

function AppLayout({ activePage, children, onNavigate }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.matchMedia("(min-width: 1024px)").matches);

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleNavigate = (pageId) => {
    onNavigate(pageId);

    if (!window.matchMedia("(min-width: 1024px)").matches) {
      closeSidebar();
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="flex h-screen">
        <Sidebar
          activePage={activePage}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          onNavigate={handleNavigate}
        />
        <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
          <Topbar
            onNavigate={handleNavigate}
            onToggleSidebar={() => setIsSidebarOpen((currentValue) => !currentValue)}
          />
          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-5 px-4 py-5 md:px-6">
              {children}
            </div>
          </main>
        </div>
      </div>

      {isSidebarOpen && (
        <button
          aria-label="Cerrar menú"
          className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden"
          type="button"
          onClick={closeSidebar}
        />
      )}

      <button
        aria-label="Abrir menú"
        className={`fixed bottom-5 right-5 z-20 h-12 w-12 place-items-center rounded-full bg-agro-700 text-white shadow-lg transition hover:bg-agro-800 lg:hidden ${
          isSidebarOpen ? "hidden" : "grid"
        }`}
        type="button"
        onClick={() => setIsSidebarOpen((currentValue) => !currentValue)}
      >
        <PanelLeft size={22} />
      </button>
    </div>
  );
}

export default AppLayout;
