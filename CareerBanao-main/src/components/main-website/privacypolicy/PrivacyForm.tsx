import { Form } from "antd";
import { useState } from "react";
import axios from "axios";
import BaseUrl from "utils/baseurl";
import { toast } from "react-toastify";
import MyForm from "src/components/ui/MyForm";
import FormInput from "src/components/ui/FormItems/FormInput";

const menuOptions = [
    {
        value: "Your Stream",
        label: "Your Stream",
        disabled: true
    },
    {
        value: "Engineering",
        label: "Engineering",
    },
    {
        value: "Medical",
        label: "Medical",
    },
    {
        value: "Management",
        label: "Management",
    },
]


function PrivacyForm() {
    const [form] = Form.useForm();
    const [isSubmitActive, setIsSubmitActive] = useState(false)

    
    const validateHandler = async () => {
        setIsSubmitActive(false)
        const values = await form.validateFields();
        const {name , email , phone} = values;
        if(values.interest == undefined) return
        if(name == "" || email == "" || phone== "") return
        setIsSubmitActive(true);
    };
    async function submitHandler(e: any) {
        e.preventDefault();
        const values = await form.validateFields();

        const payload = {
            name:values.name,
            email:values.email,
            phone: values.phone,
            category: "expert-counsellors",
            user_query: values.interest
        }
        try {
            const response = await axios.post(`${BaseUrl}/userQueryAPI`, JSON.stringify(payload))
            if (response.status == 200) {
                form.resetFields();
                toast.success("We will Contact with you soon");
                setIsSubmitActive(false)

            } else {
                toast.error("Please Check Your Details");
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error)
        }
    }


    return (
        <div className="Contact-for bg-[#EDEDE9] mt-[5rem] py-[3rem]">
            <h2 className="font-normal m-0  text-[32px] text-center">Get in touch with our </h2>
            <h2 className="text-[32px] m-0 font-semibold text-center">expert counsellors</h2>

            <div className="form">
                <div className="flex flex-col" >
                    <MyForm form={form}>
                        <div className="flex flex-col lg:gap-5 lg:flex-row justify-evenly my-[3rem] lg:px-3">
                            <div className="w-[100%] lg:w-[23%]">
                                <FormInput onChange={validateHandler} name="name" required={true} type="text" pattern={/^[a-zA-Z\s]*$/} className="h-[40px]" />
                            </div>
                            <div className="w-[100%] lg:w-[23%]">
                                <FormInput onChange={validateHandler}  name="phone" required={true} type="tel" pattern={/^[0-9]{10}$/} className="h-[40px]" />
                            </div>
                            <div className="w-[100%] lg:w-[23%]">
                                <FormInput onChange={validateHandler}  name="email" required={true} type="email" className="h-[40px]" />
                            </div>
                            <div className="w-[100%] lg:w-[23%]">
                                <FormInput
                                    name="interest"
                                    select={true}
                                    options={menuOptions}
                                    onChange={validateHandler}
                                    required={true}
                                />
                            </div>
                        </div>
                    </MyForm>
                    <div className="w-full text-center">
                        <button onClick={submitHandler} type="submit" disabled={!isSubmitActive} className={`bg-primaryBtn h-[3rem] rounded-3xl text-white text-[16px] font-semibold px-[2rem] ${!isSubmitActive && "cursor-not-allowed bg-slate-500"}`}>Request for a callback</button>
                    </div>
                </div>
            </div >


        </div >
    )
}

export default PrivacyForm;

