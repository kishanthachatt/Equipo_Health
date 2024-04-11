import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faCircleRight,
  faCircleLeft,
  faPerson,
  faTruckMedical,
  faListCheck,
  faHospitalUser,
  faStethoscope,
  faHouseMedical,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import "./SideBar.scss";
import { ROUTE } from "../../Routes.constants";

export default function Sidebars(props) {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(ROUTE.PATIENT_DETAILS);

  const handleMenuItemClick = (route) => {
    setSelected(route);
    navigate(route);
  };

  const handleCollapsedChange = () => {
    props.changeCollapse(!props.collapse);
  };

  return (
    <Sidebar
      collapsed={props.collapse}
      toggled={props.toggle}
      handleCollapsedChange={handleCollapsedChange}
      backgroundColor="#5d5c61"
      transitionDuration={1000}
      breakPoint={"md"}
      onBackdropClick={props.changeToggle}
    >
      <Menu closeOnClick>
        <MenuItem>
          <div className="closemenu" onClick={handleCollapsedChange}>
            {props.collapse ? (
              <FontAwesomeIcon icon={faCircleRight} />
            ) : (
              <FontAwesomeIcon icon={faCircleLeft} />
            )}
          </div>
        </MenuItem>
        <hr />
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
          icon={<FontAwesomeIcon icon={faListCheck} />}
          onClick={() => handleMenuItemClick(ROUTE.TASKS)}
          active={selected === ROUTE.TASKS}
        >
          Tasks
        </MenuItem>
        <hr />
        <MenuItem
          icon={<FontAwesomeIcon icon={faTruckMedical} />}
          onClick={() => handleMenuItemClick(ROUTE.SERVICE)}
          active={selected === ROUTE.SERVICE}
        >
          Service
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faHospitalUser} />}
          onClick={() => handleMenuItemClick(ROUTE.HOSPITAL_USER)}
          active={selected === ROUTE.HOSPITAL_USER}
        >
          Users
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faStethoscope} />}
          onClick={() => handleMenuItemClick(ROUTE.DOCTORS)}
          active={selected === ROUTE.DOCTORS}
        >
          Doctors
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faHouseMedical} />}
          onClick={() => handleMenuItemClick(ROUTE.NURSE)}
          active={selected === ROUTE.NURSE}
        >
          Nurses
        </MenuItem>
        <hr />
        <MenuItem
          icon={<FontAwesomeIcon icon={faServer} />}
          onClick={() => handleMenuItemClick(ROUTE.SERVER)}
          active={selected === ROUTE.SERVER}
        >
          Server
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
