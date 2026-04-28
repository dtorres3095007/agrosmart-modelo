import { Sprout } from "lucide-react";
import { helperCalloutTranslations } from "./translations.js";

function HelperCallout() {
  return (
    <div className="m-4 flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-agro-600 text-white">
          <Sprout size={22} />
        </span>
        <p>{helperCalloutTranslations}</p>
      </div>
    </div>
  );
}

export default HelperCallout;
