import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import PageWrapper from "../../Components/PageWrapper";
import PageBody from "../../Components/PageBody";
import PageContent from "../../Components/PageContent";
import SideBar from "../../Components/SideBar";

import Header from "../Header";
import Wrapper from "../Wrapper";

import cn from "./Layout.module.scss";

export default function Layout() {
  const [collapse, setCollapse] = useState(true);
  const [toggle, setToggle] = useState(false);

  const changeCollapse = (collapsed) => {
    setCollapse(collapsed);
  };

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <PageWrapper>
      <Header changeToggle={changeToggle} />
      <Wrapper className={cn.contentWrapper}>
        <SideBar
          collapse={collapse}
          changeCollapse={changeCollapse}
          toggle={toggle}
          changeToggle={changeToggle}
        />
        <PageBody collapse={collapse}>
          <PageContent>
            <Outlet />
          </PageContent>
        </PageBody>
      </Wrapper>
    </PageWrapper>
  );
}
