import React from "react";
import MainPanel from "./MainPanel";
import Sidenav from "./Sidenav";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidenav />
      <div className="c-wrapper">
        {/* <Navbar /> */}
        <div className="c-body">
          <MainPanel />
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
