import React from "react";
import { Button } from "antd";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyLogo from "../../Assets/Images/companyLogo.png";
import Image from "../Image";
import Settings from "./Options/Settings";
import Notification from "./Options/Notification";
import Files from "./Options/Files";
import Announcement from "./Options/Announcement";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

import cn from "./Header.module.scss";

export default function Header() {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.searchWrap}>
        <SearchBar />
        <Button type="primary" className={cn.button}>
          <FontAwesomeIcon icon={faSearch} />
          Advance Search
        </Button>
        <Button type="primary" className={cn.button}>
          <FontAwesomeIcon icon={faPlus} />
          Patient
        </Button>
      </div>
      <div className={cn.logowrap}>
        <Image src={CompanyLogo} className={cn.companyLogo} />
        <div className={cn.optionsWrapper}>
          <Notification className={cn.options} />
          <Settings className={cn.options} />
          <Files className={cn.options} />
          <Announcement className={cn.options} />
        </div>
        <Profile />
      </div>
    </div>
  );
}
