import React from "react";
import { topbarIcons } from "../constants.js";
import { topbarTranslations } from "../translations.js";

function BrandMark() {
  const LeafIcon = topbarIcons.leaf;

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <LeafIcon className="text-agro-700" size={24} />
      <span className="text-base font-bold text-agro-800">{topbarTranslations.brand}</span>
    </div>
  );
}

export default BrandMark;
