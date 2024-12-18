import { Flex, FlexProps } from "antd";

interface childreProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  vertical?: FlexProps["vertical"];
  justify?: FlexProps["justify"];
  align?: FlexProps["align"];
  gap?: FlexProps["gap"];
}

const MyFlex = ({ children, vertical, justify, align, gap }: childreProps) => {
  return (
    <Flex vertical={vertical} justify={justify} align={align} gap={gap}>
      {children}
    </Flex>
  );
};

export default MyFlex;
