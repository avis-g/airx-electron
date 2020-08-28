export default [
  {
    _tag: "CSidebarNavItem",
    name: "Console",
    to: "/console",
    icon: "cil-command",
  },
  // AIRX DASHBOARD ENDS AND PRODUCT CATEGORY STARTS
  {
    _tag: "CSidebarNavTitle",
    _children: ["Product"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Analyze",
    to: "/analyze",
    icon: "cil-compress",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bill Generate",
    to: "/generatebill",
    icon: "cil-note-add",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Operations",
    route: "/pages",
    icon: "cil-eyedropper",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Product",
        to: "/newproduct",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Update Product",
        to: "/modifyproduct",
      },
    ],
  },
  //AIRX PRODUCTC CATEGORY ENDS AND SYSTEM CATEGORy STARTS
  {
    _tag: "CSidebarNavTitle",
    _children: ["System"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Analysis",
    to: "/analysis",
    icon: "cil-audio-spectrum",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Calibration",
    to: "/calibrationss",
    icon: "cil-snowflake",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Monitor",
    to: "/monitor",
    icon: "cil-graph",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Model Library",
    to: "/library",
    icon: "cil-library",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customization",
    to: "/customize",
    icon: "cil-grain",
  },
  //AIRX SYSTEM CATEGORY ENDS AND
  {
    _tag: "CSidebarNavDivider",
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["General"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Warehouse",
    to: "/warehouse",
    icon: "cil-house",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Orders",
    to: "/orders",
    icon: "cil-cart",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Mode Selection",
    to: "/selection",
    icon: "cil-cursor-move",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Support",
    route: "/pages",
    icon: "cil-voice-over-record",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Customer Care",
        to: "/care",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Virtual Assistant",
        to: "/assistant",
      },
    ],
  },
];
