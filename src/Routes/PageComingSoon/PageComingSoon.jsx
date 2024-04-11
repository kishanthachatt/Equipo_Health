import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../Components/Wrapper";
import Image from "../../Components/Image";
import PageComingSoonImg from "../../Assets/Images/PageComingSoon.svg";
import cn from "./PageComingSoon.module.scss";

export default function PageComingSoon(props) {
  const navigate = useNavigate();

  const onNavigateRoute = () => {
    navigate("/");
  };

  return (
    <Wrapper className={cn.pageComingSoon}>
      <Wrapper className={cn.title}>
        {props.title ? (
          <span>
            <b>{props.title} Page</b>
          </span>
        ) : (
          ""
        )}
        <span>Under Construction</span>
      </Wrapper>
      <Image src={PageComingSoonImg} />
    </Wrapper>
  );
}
