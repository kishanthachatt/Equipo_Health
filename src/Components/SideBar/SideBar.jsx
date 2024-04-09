import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faCircleRight,
  faCircleLeft,
  faLeftLong,
  faPerson,
  faTruckMedical,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./SideBar.scss";
import { ROUTE } from "../../Routes.constants";

export default function Sidebars() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(ROUTE.PATIENT_DETAILS);

  const handleMenuItemClick = (route) => {
    setSelected(route);
    navigate(route);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      handleCollapsedChange={handleCollapsedChange}
      backgroundColor="#5d5c61"
      transitionDuration={1000}
    >
      <Menu>
        <MenuItem>
          <div className="closemenu" onClick={handleCollapsedChange}>
            {collapsed ? (
              <FontAwesomeIcon icon={faCircleRight} />
            ) : (
              <FontAwesomeIcon icon={faCircleLeft} />
            )}
          </div>
        </MenuItem>
        {/* <hr /> */}
      </Menu>
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            if (level === 0)
              return {
                backgroundColor: active ? "#557495" : undefined,
              };
          },
        }}
      >
        <MenuItem
          icon={<FontAwesomeIcon icon={faPerson} />}
          onClick={() => handleMenuItemClick(ROUTE.PATIENT_DETAILS)}
          active={selected === ROUTE.PATIENT_DETAILS}
        >
          Patient
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faTruckMedical} />}
          onClick={() => handleMenuItemClick(ROUTE.SERVICE)}
          active={selected === ROUTE.SERVICE}
        >
          Service
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faListCheck} />}
          onClick={() => handleMenuItemClick(ROUTE.TASKS)}
          active={selected === ROUTE.TASKS}
        >
          Tasks
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
