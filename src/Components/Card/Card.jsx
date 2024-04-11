import React from "react";
import cn from "./Card.module.scss";

export default function Card(props) {
  const className = `${cn.card} ${props.className}`;
  return <div className={className}>{props.children}</div>;
}
