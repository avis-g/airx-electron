import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = () => {
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg src={"images/2.jpg"} className="c-avatar-img" />
        </div>
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0 airx-color-secondary"
        placement="bottom-end"
      >
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center airx-borders-b"
        >
          <strong>Aavishkaar Gyawali</strong>
        </CDropdownItem>

        {/* <CDropdownItem divider /> */}
        <CDropdownItem className="airx-drop-items" to="/icons">
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem className="airx-drop-items">
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
