import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Topbar from "../Topbar/Topbar.jsx";
import FloatingMenuButton from "./components/FloatingMenuButton.jsx";
import MobileMenuOverlay from "./components/MobileMenuOverlay.jsx";

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

      <MobileMenuOverlay isVisible={isSidebarOpen} onClick={closeSidebar} />
      <FloatingMenuButton
        isHidden={isSidebarOpen}
        onClick={() => setIsSidebarOpen((currentValue) => !currentValue)}
      />
    </div>
  );
}

export default AppLayout;
