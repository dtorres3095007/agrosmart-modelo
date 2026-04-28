import { BarChart3, Info, Sprout, TrendingUp, Wallet } from "lucide-react";
import { formatCurrency, formatNumber } from "../../../../utils/financialCalculations.js";
import { liveSummaryTranslations } from "./translations.js";

const liveSummaryIcons = {
  barChart: BarChart3,
  info: Info,
  sprout: Sprout,
  trending: TrendingUp,
  wallet: Wallet
};

function LiveSummary({ layout = "footer", results }) {
  const isSidebar = layout === "sidebar";

  return (
    <aside className={`${isSidebar ? "rounded-lg border border-slate-200 bg-white p-5" : "border-t border-slate-200 bg-white p-4"}`}>
      <div className={`flex flex-col gap-1 ${isSidebar ? "" : "sm:flex-row sm:items-center sm:gap-3"}`}>
        <p className="text-sm font-bold text-agro-700">{liveSummaryTranslations.title}</p>
        <p className="text-xs leading-5 text-slate-500">{liveSummaryTranslations.description}</p>
      </div>
      <div className={`mt-3 grid gap-3 ${isSidebar ? "" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
        {liveSummaryTranslations.items.map((item) => {
          const Icon = liveSummaryIcons[item.icon];
          const value = item.suffix === "$" ? formatCurrency(results[item.valueKey]) : formatNumber(results[item.valueKey]);

          return (
            <article className="rounded-lg border border-slate-200 bg-white p-3" key={item.label}>
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.tone}`}>
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-600">{item.label}</p>
                  <p className="mt-1 truncate text-sm font-bold text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{item.suffix}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className={`mt-3 text-xs font-semibold text-slate-500 ${isSidebar ? "" : "text-center"}`}>
        {liveSummaryTranslations.footer}
      </p>
    </aside>
  );
}

export default LiveSummary;
