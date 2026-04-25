import React from "react";
import { Leaf, Sprout } from "lucide-react";
import { menuItems } from "../../constants/navigation.jsx";

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="hidden h-screen w-[250px] shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-28 items-center gap-3 px-5">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-agro-50 text-agro-700">
          <Leaf size={30} strokeWidth={1.9} />
        </div>
        <div>
          <p className="text-xl font-bold leading-6 text-agro-700">AgroSostenible</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Modelo Económico-Financiero</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              className={`flex h-11 items-center gap-3 rounded-md px-4 text-sm font-semibold transition ${
                activePage === item.id
                  ? "bg-agro-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-agro-50 hover:text-agro-800"
              }`}
              href={item.path}
              key={item.label}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.id);
              }}
            >
              <Icon size={18} strokeWidth={2.1} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-lg border border-agro-100 bg-agro-50 p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-agro-800">
            <Sprout size={18} />
            <span>¿Necesitas ayuda?</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Consulta la guía rápida para entender cómo usar la calculadora.
          </p>
          <button
            className="mt-4 rounded-md bg-agro-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-agro-700"
            type="button"
            onClick={() => onNavigate("quick-guide")}
          >
            Ver guía
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
