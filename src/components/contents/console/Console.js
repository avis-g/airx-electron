import React, { useState } from "react";
import { CCardGroup, CWidgetProgressIcon, CProgress } from "@coreui/react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CDropdownItem,
  CRow,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Widgets = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <CRow>
        <CCol>
          <CCard className="ax-tile-bg">
            <CCardHeader className="ax-console-tile">
              Quick Overview
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem
                      onClick={() => setActiveTab(0)}
                      action
                      active={activeTab === 0}
                    >
                      Messages
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(1)}
                      action
                      active={activeTab === 1}
                    >
                      Notifications
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(2)}
                      action
                      active={activeTab === 2}
                    >
                      Tasks
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(3)}
                      action
                      active={activeTab === 3}
                    >
                      Approval
                    </CListGroupItem>
                  </CListGroup>
                </CCol>
                {/* ax-messages */}
                <CCol xs="8">
                  <CTabContent>
                    <CTabPane active={activeTab === 0}>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          New order for item MEZ-248 has been confirmed.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Order no. X56-VGD-987 is ready for delivery.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Order no. X56-VGD-987 is ready for delivery.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Order no. X56-VGD-987 is ready for delivery.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="text-center border-top">
                        <strong>View all tasks</strong>
                      </CDropdownItem>
                    </CTabPane>

                    <CTabPane active={activeTab === 1}>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Warehouse stock of MEZ-SYPHONE-278 and MEZ-ANGLE-378
                          are depleting.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Production for order number 435-BCV-X7Z hated.
                          Resources Unsufficient.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Warehouse stock of MEZ-SYPHONE-278 and MEZ-ANGLE-378
                          are depleting.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Warehouse stock of MEZ-SYPHONE-278 and MEZ-ANGLE-378
                          are depleting.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="text-center border-top">
                        <strong>View all tasks</strong>
                      </CDropdownItem>
                    </CTabPane>

                    <CTabPane active={activeTab === 2}>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Invoice is pending for order number 569-BYX-D54.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          System Repairing of workstation 2-C scheduled for 24,
                          Aug, 2020.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Invoice is pending for order number 569-BYX-D54.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          System Repairing of workstation 2-C scheduled for 24,
                          Aug, 2020.
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="text-center border-top">
                        <strong>View all tasks</strong>
                      </CDropdownItem>
                    </CTabPane>

                    <CTabPane active={activeTab === 3}>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Request for workstation 3-A repair.
                          <CButtonGroup className="ax-right-end-align">
                            <CButton color="secondary">Approve</CButton>
                            <CButton color="secondary">Hold</CButton>
                            <CButton color="secondary">Decline</CButton>
                          </CButtonGroup>
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Request for warehouse replinishment.
                          <CButtonGroup className="ax-right-end-align">
                            <CButton color="secondary">Approve</CButton>
                            <CButton color="secondary">Hold</CButton>
                            <CButton color="secondary">Decline</CButton>
                          </CButtonGroup>
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Request for workstation 3-A repair.
                          <CButtonGroup className="ax-right-end-align">
                            <CButton color="secondary">Approve</CButton>
                            <CButton color="secondary">Hold</CButton>
                            <CButton color="secondary">Decline</CButton>
                          </CButtonGroup>
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                      <CDropdownItem className="d-block">
                        <div className="small mb-1">
                          Request for workstation 3-A repair.
                          <CButtonGroup className="ax-right-end-align">
                            <CButton color="secondary">Approve</CButton>
                            <CButton color="secondary">Hold</CButton>
                            <CButton color="secondary">Decline</CButton>
                          </CButtonGroup>
                        </div>
                        <CProgress size="xs" color="info" value={0} />
                      </CDropdownItem>
                    </CTabPane>
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* General Overview */}
      <CCardGroup className="mb-4 ax-top-tiles">
        <CWidgetProgressIcon
          header="87.500"
          text="Orders Confirmed"
          color="gradient-info"
          className="ax-top-tiles"
        >
          {/* <CIcon name="cil-people" height="36" className="ax-tiles-icon" /> */}
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="38.456, 45.63%"
          text="Orders Procressing"
          color="gradient-success"
          className="ax-top-tiles"
        >
          {/* <CIcon name="cil-userFollow" height="36" className="ax-tiles-icon" /> */}
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="12.386, 23.89%"
          text="Orders Delivered"
          color="gradient-warning"
          className="ax-top-tiles"
        >
          {/* <CIcon name="cil-basket" height="36" className="ax-tiles-icon" /> */}
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="11,456, 22.79%"
          text="Prpduction halted"
          className="ax-top-tiles"
        >
          {/* <CIcon name="cil-chartPie" height="36" className="ax-tiles-icon" /> */}
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="23M 36S / unit"
          text="Average Production Time"
          color="gradient-danger"
          className="ax-top-tiles"
        >
          {/* <CIcon name="cil-speedometer" height="36" className="ax-tiles-icon" /> */}
        </CWidgetProgressIcon>
      </CCardGroup>
      {/* visitors cliet products blah blah white */}
      <table className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr className="ax-console-tile">
            <th className="text-center ax-tb-hdr">
              <CIcon name="cil-people" />
            </th>
            <th className="ax-tb-hdr">User</th>
            <th className="text-center ax-tb-hdr">Privilege</th>
            <th className="text-center ax-tb-hdr">Email</th>
            <th className="text-center ax-tb-hdr">Phone</th>
            <th className="text-center ax-tb-hdr">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/1.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Govinda Shrestha</div>
            </td>
            <td className="text-center ax-tb-bdy">Admin</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/2.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Besh Praksh Danuwar</div>
            </td>
            <td className="text-center ax-tb-bdy">Observer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Inactive</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/4.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Michael Schumacher</div>
            </td>
            <td className="text-center ax-tb-bdy">Observer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/5.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Henning May</div>
            </td>
            <td className="text-center ax-tb-bdy">Warehouse Maintainer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/2.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Bikash Poudel</div>
            </td>
            <td className="text-center ax-tb-bdy">Warehouse Maintainer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/7.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Albert Einstein</div>
            </td>
            <td className="text-center ax-tb-bdy">Warehouse Maintainer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>

          <tr>
            <td className="text-center ax-tb-bdy">
              <div className="c-avatar ax-tb-bdy">
                <img src={"images/4.jpg"} className="c-avatar-img ax-tb-bdy" />
              </div>
            </td>
            <td className="text center ax-tb-bdy">
              <div>Daniel Day Lewis</div>
            </td>
            <td className="text-center ax-tb-bdy">Warehouse Maintainer</td>
            <td className="text-center ax-tb-bdy">admin@airx.de</td>
            <td className="text-center ax-tb-bdy">+49 398765017</td>
            <td className="text-center ax-tb-bdy">Active</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Widgets;
