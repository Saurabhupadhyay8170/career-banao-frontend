import { FormItemProps, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Form } from "ui/MyForm";
import MyInput from "ui/MyInput";

interface childreProps {
  name: FormItemProps["name"];
  rules?: FormItemProps["rules"];
  required?: FormItemProps["required"];
  type?: any,
  pattern?: RegExp;
  max?: number
  className?: string;
  textArea?: boolean;
  prefix?: React.ReactNode
  select?: boolean;
  defaultValue?: string;
  options?: any[]
  disabled?: boolean
  value?: string;
  onChange?: (e: any) => Promise<void>;
  showName?:string;
}

const FormInput = (props: childreProps) => {
  return (
    <Form.Item
      name={props.name}
      className="mb-3"
      rules={[
        {
          type: props.type,
          message: `Please check your ${props.showName ? props.showName : props.name}`
        },
        {
          required: props.required,
          message: `Please provide your ${props.showName ? props.showName : props.name}`
        },
        // {
        //   max: props.max,
        //   message: `Enter 10 Digit number only`
        // },
        {
          pattern: new RegExp(props.pattern ? props.pattern : ""),
          message: `Please enter valid ${props.showName ? props.showName : props.name}`
        },
      ]}

    >
      {
        props.textArea && <TextArea placeholder={"Enter your " + props.name} style={{ height: 120, resize: 'none', }} />
      }
      {
        !props.textArea && !props.select && <MyInput placeholder={"Enter your " + props.name} onChange={props.onChange} className={props.className} prefix={props.prefix} disabled={props.disabled} value={props.value} />
      }
      {
        props.select && <Select
        showSearch
          disabled={props.disabled}
          defaultValue={props.defaultValue ? props.defaultValue : "Choose your " + props.name}
          // id="select"
          style={{ width: "100%", fontWeight: "500"}}
          options={props.options ? props.options : []}
          onChange={props.onChange}
          className="bg-[#f7f7f7]"
        />
      }
    </Form.Item>
  );
};

export default FormInput;
