import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeaderNav,
  CCreateElement,
  CSidebar,
  CSidebarHeader,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import Account from "./contents/profile/Account";
import navigation from "../resources/scripts/navigation";

const Sidenav = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarHeader className="airx-height airx-borders-r">
        <CHeaderNav className="px-3 airx-height">
          <Account />
          Administrator
        </CHeaderNav>
      </CSidebarHeader>

      {/* <CDropdownItem className="airx-borders-r" divider /> */}
      <CSidebarNav className="airx-color-primary airx-borders-t-r">
        <br className="nav-hr" />
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none airx-color-secondary airx-borders-r" />
    </CSidebar>
  );
};

export default React.memo(Sidenav);
