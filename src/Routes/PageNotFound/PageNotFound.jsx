import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../Components/Wrapper";
import Image from "../../Components/Image";
import PageNotFoundImage from "../../Assets/Images/pageNotFound.svg";
import cn from "./PageNotFound.module.scss";

export default function PageNotFound() {
  const navigate = useNavigate();

  const onNavigateRoute = () => {
    navigate("/");
  };
  return (
    <Wrapper className={cn.pageNotFound}>
      <Image src={PageNotFoundImage} />
      <Button
        type="primary"
        style={{ backgroundColor: "#557495" }}
        onClick={onNavigateRoute}
      >
        Go Back
      </Button>
    </Wrapper>
  );
}
