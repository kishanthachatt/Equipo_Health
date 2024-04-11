import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import PageWrapper from "../../Components/PageWrapper";
import PageBody from "../../Components/PageBody";
import PageContent from "../../Components/PageContent";
// import BottomNavBar from "../../Components/BottomNavBar";
// import { Mobile } from "../../Components/Mobile";
import SideBar from "../../Components/SideBar";

import { useMediaType } from "../../MediaType.provider";

// import { BOTTOM_NAV_ARRAY, NOTIFICATION_NAV } from "../../Routes.constants";
import { VIEW_TYPE } from "../../Utils/constants";
import Header from "../Header";
import Wrapper from "../Wrapper";

import cn from "./Layout.module.scss";

export default function Layout() {
  const [collapse, setCollapse] = useState(true);

  const isMobile = VIEW_TYPE.MOB === useMediaType();

  const changeCollapse = (collapsed) => {
    setCollapse(collapsed);
  };

  return (
    <PageWrapper>
      {/* <Header /> */}
      <Wrapper className={cn.contentWrapper}>
        <SideBar collapse={collapse} changeCollapse={changeCollapse} />
        <PageBody collapse={collapse}>
          <PageContent>
            <Outlet />
          </PageContent>
        </PageBody>
      </Wrapper>
    </PageWrapper>
  );
}
