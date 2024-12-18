import { useState } from "react"
import default_img from "../../../assets/defaultCardLogo.jpeg"
import { Link, useLocation } from "react-router-dom";
import { Checkbox, Form } from "antd";
import { toast } from "react-toastify";
import axios from "axios";
import BaseUrl from "utils/baseurl";
import { useDispatch } from "react-redux";
import { setShowFormPopup } from "../../../redux/showFormPopupSlice";
import MyForm from "src/components/ui/MyForm";
import FormInput from "src/components/ui/FormItems/FormInput";
import { states } from "src/utils/constants";


const customStyle = {
    boxShadow: "rgb(52 51 51) 3px 6px 17px 1px",
}
const personIconPath = "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z";
const phoneIconPath = "M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z";


function CounsellingFormPopup({ collegeName }: any) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [isCheck, setIsCheck] = useState(false)
    const path = useLocation().pathname;



    async function validateHandler() {
        const values = await form.validateFields();
        for (const key in values) {
            if (values.hasOwnProperty(key) && values[key] === "") {
                return;
            }
        }
        setIsCheck(!isCheck)
    }

    async function submitHandler(e: any) {
        e.preventDefault()
        const values = await form.getFieldsValue()
        const payload = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            address: values.state + ";" + values.city,
            category: path.includes("engineering") ? "eng-Counselling" : path.includes("management") ? "mang-Counselling" : "med-Counselling",
            college: collegeName,
        }
        try {
            const response = await axios.post(`${BaseUrl}/userQueryAPI`, JSON.stringify(payload))
            if (response.status == 200) {
                toast.success("Register Successfully")
                form.resetFields();
                dispatch(setShowFormPopup())
            } else {
                toast.error("Registration Failed")
            }
        } catch (error) {
            toast.error("Please check your Network")
        }
    }



    return (
        <div className="pop-container transition-all fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center p-[1.75rem] lg:p-0 items-center z-[1000]">
            <div style={customStyle} className="main-popup w-full lg:w-4/6 bg-[#f7f7f7] p-2 pb-5 rounded-lg">
                <div className="popup-header max-h-[60px] lg:max-h-full mt-5 flex">
                    <div className="pop-header-left w-[15%] mt-2 lg:w-[20%] flex justify-center items-center">
                        <div className=" w-[70px] h-[50px] lg:w-[100px] flex items-center lg:h-[100px] rounded-full">
                            <img src={default_img} alt="logo" className="rounded-full" />
                        </div>
                    </div>
                    <div className="pop-header-center w-[75%] flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-primaryBtn text-lg lg:text-3xl font-semibold">Register for Counselling</h1>
                        <h1 className="text-primaryNavText text-base lg:text-2xl">Get details and latest updates</h1>
                    </div>
                    <div className="pop-header-right w-[5%]" onClick={() => { dispatch(setShowFormPopup()) }}>
                        <span className="text-4xl cursor-pointer">x</span>
                    </div>
                </div>
                <div className="px-5">
                    <MyForm form={form}>
                        <div className="popup-form-inputs mt-8 flex flex-col lg:flex-row lg:gap-5">
                            <div className="popup-form-left w-full lg:w-2/4">
                                <MyInput
                                    name="name"
                                    label={"Full Name"}
                                    pattern={/^[a-zA-Z\s]*$/}
                                    prefix={<Icon path={personIconPath} />}
                                />
                                <MyInput
                                    name="phone"
                                    type="tel"
                                    max={10}
                                    pattern={/^[0-9]{10}$/}
                                    label={"Mobile Number"}
                                    prefix={<Icon path={phoneIconPath} />}
                                />
                                <MyInput
                                    label={"Interested in"}
                                    disabled={true}
                                    select={true}
                                    defaultValue={collegeName}

                                />
                            </div>
                            <div className="popup-form-right w-full lg:w-2/4">
                                <MyInput
                                    name="email"
                                    type="email"
                                    label={"Email Address"}
                                    prefix={<Icon path={""} />}
                                />
                                <MyInput
                                    name="state"
                                    type="text"
                                    label={"State"}
                                    prefix={<Icon path={""} />}
                                    select={true}
                                    options={states.map((item) => ({ value: item, label: item })).sort()}
                                />
                                <MyInput
                                    name="city"
                                    type="text"
                                    label={"City"}
                                    prefix={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    }
                                    pattern={/^[A-Za-z\s]+$/}
                                />
                            </div>
                        </div>
                    </MyForm>
                    <div className="form-footer flex flex-col lg:flex-row">
                        <div className="form-footer-left w-full lg:w-3/4">
                            <h3 className="text-primaryNavText text-sm lg:text-base font-semibold">
                                <Checkbox onChange={validateHandler} checked={isCheck} />
                                {" "}By submitting this form , you accept and agree to our  <Link to={"/terms-and-conditions"} className="text-blue-600">Terms of Use.</Link>
                            </h3>
                        </div>
                        <div className="form-footer-right w-full lg:w-1/4 flex items-end">
                            <button type="submit" onClick={submitHandler} disabled={!isCheck} className={`rounded-3xl w-full lg:w-[80] lg:h-[80%] text-white p-1 ${isCheck ? "bg-primaryBtn hover:bg-hoverBtn cursor-pointer" : "bg-slate-400 cursor-not-allowed"}`}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounsellingFormPopup



function MyInput({ label, type = "text", ...props }: any) {
    return (
        <div>
            <label htmlFor={label} className="block lg:mb-2 text-sm font-medium text-gray-900">{label}<span className="text-red-500 text-sm ml-1">*</span></label>
            <div className="relative mb-2 lg:mb-6">
                <FormInput
                    name={props.name}
                    max={props.max}
                    required={true}
                    type={type}
                    pattern={props.pattern}
                    className="bg-[#f7f7f7] border border-gray-200 text-gray-900 text-sm rounded-lg focus-visible:outline-none focus:ring-blue-700 focus:border-blue-700 w-full flex p-2.5"
                    prefix={props.prefix}
                    select={props.select}
                    options={props.options}
                    defaultValue={props.defaultValue ? props.defaultValue : ""}
                    disabled={props.disabled}
                    value={props.value}
                />
            </div>

        </div>

    );
}
function Icon({ path }: any) {
    return (
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            {path ?
                <path d={path} />
                :
                <>
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </>
            }
        </svg>
    );
}
