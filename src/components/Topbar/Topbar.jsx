import React from "react";
import { ChevronDown, CircleHelp, Download, Leaf, Menu, UserCircle } from "lucide-react";

function Topbar({ onNavigate }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <button className="grid h-10 w-10 place-items-center rounded-md text-slate-700 transition hover:bg-slate-100">
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-2 lg:hidden">
          <Leaf className="text-agro-700" size={24} />
          <span className="text-base font-bold text-agro-800">AgroSostenible</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-slate-600 md:gap-5">
        <button
          className="hidden items-center gap-2 rounded-md px-2 py-2 transition hover:bg-slate-100 sm:flex"
          type="button"
          onClick={() => onNavigate("quick-guide")}
        >
          <CircleHelp size={18} />
          <span>Ayuda</span>
        </button>
        <button className="hidden items-center gap-2 rounded-md px-2 py-2 transition hover:bg-slate-100 sm:flex">
          <Download size={18} />
          <span>Exportar</span>
        </button>
        <button className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-slate-100">
          <UserCircle size={20} />
          <span className="hidden sm:inline">Usuario</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
