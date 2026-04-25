import React from "react";
import { PanelLeft } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Topbar from "../Topbar/Topbar.jsx";

function AppLayout({ activePage, children, onNavigate }) {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="flex h-screen">
        <Sidebar activePage={activePage} onNavigate={onNavigate} />
        <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
          <Topbar onNavigate={onNavigate} />
          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-5 px-4 py-5 md:px-6">
              {children}
            </div>
          </main>
        </div>
      </div>

      <button className="fixed bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-agro-700 text-white shadow-lg transition hover:bg-agro-800 lg:hidden">
        <PanelLeft size={22} />
      </button>
    </div>
  );
}

export default AppLayout;
