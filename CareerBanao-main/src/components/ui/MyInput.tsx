import { Input, InputProps } from "antd";

interface childreProps {
  children?: React.ReactNode;
  placeholder?: InputProps["placeholder"];
  value?: InputProps["value"];
  onChange?: InputProps["onChange"];
  type?:InputProps["type"];
  pattern?:InputProps["pattern"];
  className?:InputProps["className"];
  prefix?:InputProps["prefix"];
  disabled?:InputProps["disabled"];
}

const MyInput = (props: childreProps) => {
  return <Input {...props}/>;
};
export default MyInput;
