import React from "react";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function SettingsFooter() {
  const InfoIcon = settingsIcons.info;
  const SproutIcon = settingsIcons.sprout;
  const UploadIcon = settingsIcons.upload;

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <InfoIcon size={24} />
        </div>
        <p>{settingsTranslations.footer}</p>
      </div>
      <div className="flex justify-end gap-3 text-agro-800">
        <UploadIcon size={42} strokeWidth={1.6} />
        <SproutIcon size={42} strokeWidth={1.6} />
      </div>
    </section>
  );
}

export default SettingsFooter;
