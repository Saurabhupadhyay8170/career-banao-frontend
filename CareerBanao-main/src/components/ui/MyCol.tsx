import { Col, ColProps } from "antd";
import React from "react";

interface childreProps {
  children?: React.ReactNode;
  span?: ColProps["span"];
  offset?: ColProps["offset"];
  style?: React.CSSProperties;
  className?: string;
  md?: ColProps["md"]; 
  lg?: ColProps["lg"];
  sm?: ColProps["sm"];
  xs?: ColProps["xs"];
  xl?: ColProps["xl"];
  xxl?: ColProps["xxl"];
  onClick?: () => void;
}

const MyCol = ({
  children,
  span,
  offset,
  style,
  md,
  sm,
  xs,
  xl,
  lg,
  xxl,
  className,
  onClick,
}: childreProps) => {
  return (
    <Col
      span={span}
      md={md}
      lg={lg}
      sm={sm}
      xs={xs}
      xl={xl}
      xxl={xxl}
      offset={offset}
      style={style}
      className={className}
      onClick={onClick}
    >
      {children}
    </Col>
  );
};

export default MyCol;
