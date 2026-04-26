import React from "react";
import { appLayoutTranslations } from "../translations.js";

function MobileMenuOverlay({ isVisible, onClick }) {
  if (!isVisible) return null;

  return (
    <button
      aria-label={appLayoutTranslations.closeMenu}
      className="fixed inset-0 z-20 bg-slate-900/40 lg:hidden"
      type="button"
      onClick={onClick}
    />
  );
}

export default MobileMenuOverlay;
