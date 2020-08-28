import React from "react";

const Console = React.lazy(() =>
  import("./components/contents/console/Console")
);
// Console Ends and Product Begins
const Analyze = React.lazy(() =>
  import("./components/contents/product/Analyze")
);
const Bill = React.lazy(() => import("./components/contents/product/Bill"));
const New = React.lazy(() =>
  import("./components/contents/product/operations/New")
);
const Modify = React.lazy(() =>
  import("./components/contents/product/operations/Modify")
);
//Product Ends and System Begins
const Analysis = React.lazy(() =>
  import("./components/contents/system/Analysis")
);
const Calibration = React.lazy(() =>
  import("./components/contents/system/Calibration")
);
const Monitor = React.lazy(() =>
  import("./components/contents/system/Monitor")
);
const Library = React.lazy(() =>
  import("./components/contents/system/Library")
);
const Customization = React.lazy(() =>
  import("./components/contents/system/Customization")
);
//System Ends and  General Begins
const Orders = React.lazy(() => import("./components/contents/general/Orders"));
const Selection = React.lazy(() =>
  import("./components/contents/general/Selection")
);
const Warehouse = React.lazy(() =>
  import("./components/contents/general/Warehouse")
);
//General Ends and Support Begins
const Assistant = React.lazy(() =>
  import("./components/contents/support/Assistant")
);
const Care = React.lazy(() => import("./components/contents/support/Care"));
//Supports Ends

const routes = [
  { path: "/console", exact: true, name: "Home" },
  { path: "/console", name: "Console", component: Console },
  { path: "/analyze", name: "Product Analyze", component: Analyze },
  { path: "/generatebill", name: "Generate Bill", component: Bill },
  { path: "/newproduct", name: "Add New Product", component: New },
  { path: "/modifyproduct", name: "Modify Product", component: Modify },
  { path: "/analysis", name: "System Analysis", component: Analysis },
  { path: "/calibration", name: "System Calibration", component: Calibration },
  { path: "/monitor", name: "System Monitor", component: Monitor },
  { path: "/library", name: "MOdel library", component: Library },
  { path: "/customize", name: "Customize System", component: Customization },
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/selection", name: "Mode Selection", component: Selection },
  { path: "/warehouse", name: "Warehouse", component: Warehouse },
  { path: "/assistant", name: "Virtual Assistant", component: Assistant },
  { path: "/care", name: "Customer Care", component: Care },
];

export default routes;
