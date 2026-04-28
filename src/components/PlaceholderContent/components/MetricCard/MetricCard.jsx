import { metricToneClasses } from "./constants.js";

function MetricCard({ icon: Icon, label, value, tone = "green" }) {
  return (
    <article className={`rounded-lg border p-4 ${metricToneClasses[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{label}</span>
        <Icon size={20} />
      </div>
      <p className="mt-3 text-xl font-bold text-slate-950">{value}</p>
    </article>
  );
}

export default MetricCard;
