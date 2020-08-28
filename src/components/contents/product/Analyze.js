import React from "react";
import { CRow } from "@coreui/react";

const Colors = () => {
  return (
    <>
      <div className="card airx-panel-defaults-main">
        <div className="card-header airx-panel-defaults-sub">
          Analyze Product
        </div>
        <div className="card-body ax-panel-tile-default">
          <CRow></CRow>
        </div>
      </div>
      <div className="card airx-panel-defaults-main">
        <div className="card-header airx-panel-defaults-sub">
          Product Analysis Report
        </div>
        <div className="card-body ax-panel-tile-default">
          <CRow className="mb-3"></CRow>
        </div>
      </div>
    </>
  );
};

export default Colors;
