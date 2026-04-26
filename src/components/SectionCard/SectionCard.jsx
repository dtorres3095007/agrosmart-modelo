import React from "react";

function SectionCard({ children, className = "" }) {
  return (
    <section className={`flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-panel ${className}`}>
      {children}
    </section>
  );
}

export default SectionCard;
