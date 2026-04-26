import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import DataTable from "./DataTable.jsx";

function ComparisonTableSection({ rows, table, showVariation = false }) {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{table.title}</h2>
      <DataTable
        headers={table.headers}
        rows={rows}
        showVariation={showVariation}
        variationHeader={table.variationHeader}
      />
    </SectionCard>
  );
}

export default ComparisonTableSection;
