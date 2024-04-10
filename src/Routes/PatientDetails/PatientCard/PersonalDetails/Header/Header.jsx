import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import cn from "./Header.module.scss";

export default function Header() {
  return (
    <div className={cn.header}>
      <h3 className={cn.name}>Kishan Thachatt</h3>
      <div className={cn.actions}>
        <Button type="primary" className={cn.editButton}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button type="primary" className={cn.addButton}>
          <FontAwesomeIcon icon={faPlus} />
          Chart
        </Button>
        <Button type="primary" className={cn.addButton}>
          <FontAwesomeIcon icon={faPlus} />
          Enroll
        </Button>
      </div>
    </div>
  );
}
