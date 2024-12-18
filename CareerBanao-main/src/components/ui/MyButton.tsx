import { Button, ButtonProps } from "antd";
import React from "react";

interface childrenProps {
  children: React.ReactNode;
  type?: ButtonProps["type"];
  icon?: ButtonProps["icon"];
  size?: ButtonProps["size"];
  block?: ButtonProps["block"];
  loading?: ButtonProps["loading"];
  disabled?: ButtonProps["disabled"];
  shape?: ButtonProps["shape"];
  onClick?: () => void;
}

const MyButton = (props: childrenProps) => {
  return (
    <Button
      block={props.block}
      size={props.size}
      icon={props.icon}
      type={props.type ?? "primary"}
      loading={props.loading}
      disabled={props.disabled}
      shape={props.shape}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
