import { Row, RowProps } from "antd";
import React from "react";

interface childreProps {
  children: React.ReactNode;
  justify?: RowProps["justify"];
  align?: RowProps["align"];
  gutter?: RowProps["gutter"];
  style?: React.CSSProperties;
  className?: string;
}

const MyRow = ({
  children,
  justify,
  align,
  gutter,
  style,
  className,
}: childreProps) => {
  return ( 
    <Row
      className={className}
      justify={justify}
      align={align}
      gutter={gutter}
      style={style}
    >
      {children}
    </Row>
  );
};

export default MyRow;
