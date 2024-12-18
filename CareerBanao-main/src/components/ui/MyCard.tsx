import { Card, CardProps } from "antd";
import React from "react";

interface childreProps {
  children?: React.ReactNode;
  title?: CardProps["title"];
  size?: CardProps["size"];
  extra?: CardProps["extra"];
}

const MyCard = (props: childreProps) => {
  return <Card {...props}>{props.children}</Card>;
};

export default MyCard;
