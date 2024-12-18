import { Form, FormProps } from "antd";

interface childreProps {
  children?: React.ReactNode;
  layout?: FormProps["layout"];
  form?: FormProps["form"];
  initialValues?: FormProps["initialValues"];
  className?:FormProps["className"]
}

const MyForm = (props: childreProps) => {
  return (
    <Form
      form={props.form}
      layout={props.layout ?? "vertical"}
      initialValues={props.initialValues}
      style={{ marginTop: "25px" }}
    >
      {props.children}
    </Form>
  );
};

export default MyForm;
export { Form };
