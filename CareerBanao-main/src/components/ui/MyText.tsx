import { Typography } from "antd";
import { BaseType } from "antd/es/typography/Base";
import { TitleProps } from "antd/es/typography/Title";
import React from "react";

interface childreProps { 
  children: React.ReactNode;
  variant: string;
  type?: BaseType;
  level?: TitleProps["level"];
  style?: React.CSSProperties;
}

const MyText = ({ children, variant, type, level, style }: childreProps) => {
  if (variant === "text") {
    return (
      <Typography.Text style={style} type={type}>
        {children}
      </Typography.Text>
    );
  }
  if (variant === "title") {
    return (
      <Typography.Title style={style} level={level} type={type}>
        {children}
      </Typography.Title>
    );
  }
};

export default MyText;
