// import "./contact.css";
import { Form } from 'antd';
import mailIcon from "../../../assets/email.png"
import phoneIcon from "../../../assets/telephone.png"
import AddressIcon from "../../../assets/location.png"
import BaseUrl from 'utils/baseurl'
import axios from 'axios'
import { toast } from "react-toastify"
import FormInput from 'src/components/ui/FormItems/FormInput';
import MyForm from 'src/components/ui/MyForm';

const style = {
    letterSpacing: "2px"
}
const boxShadow = {
    boxShadow: "0 7px 29px 0 hsla(240,5%,41%,.2)",
    borderRadius: "6px"
}


const Contact = () => {
    const [contactForm] = Form.useForm();

    const submitHandler = async (e: any) => {
        e.preventDefault()
        const values = await contactForm.validateFields();
        const payload = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            user_query: values.message,
            category: "contact",
        }
        try {
            const response = await axios.post(`${BaseUrl}/userQueryAPI`, JSON.stringify(payload))
            if (response.status == 200) {
                toast.success("We will connect with you soon")
                contactForm.resetFields()
            } else {
                toast.error("Please Check your details")
            }
        } catch (error) {
            toast.error("Please check your Network")
            contactForm.resetFields()
        }

    };

    return (
        <div className='contact-container font-popins w-full relative top-[50px] min-h-[calc(100vh-50px)] flex justify-center items-center'>
            <div style={boxShadow} className="contact-main  gap-2 relative w-full lg:w-[50%] px-10 py-8 flex flex-col-reverse lg:flex-row  lg:bg-white">
                <div className="contact-left font-sans my-auto w-full lg:w-2/4 text-center ">
                    <div className='w-full lg:w-3/4'>
                        <img src={AddressIcon} width={20} alt="" className='inline-block text-center' />
                        <h2 className='text-black m-0 mt-1 text-[18px] font-[500]'>Address</h2>
                        <p className='text-[14px] mb-8 text-[#afafb6]'>Spring Meadows Business Park, Sector 63,Noida, Uttar Pradesh 201301</p>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <img src={phoneIcon} width={20} alt="" className='inline-block text-center' />
                        <h2 className='text-black m-0 mt-1 text-[18px] font-[500]'>Phone</h2>
                        <p className='text-[14px] mb-8 text-[#afafb6]'>+91 8750092628</p>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <img src={mailIcon} width={20} alt="" className='inline-block text-center' />
                        <h2 className='text-black m-0 mt-1 text-[18px] font-[500]'>Email</h2>
                        <p className='text-[14px] mb-8 text-[#afafb6]'>infocareerbanao@gmail.com</p>
                    </div>

                </div>
                <div className="contact-right pt-[1rem] lg:pt-0 w-full lg:w-3/4 flex flex-col justify-between">
                    <h1 style={style} className='letterSpace text-[18px] text-center lg:text-start lg:text-[23px] text-primaryBtn font-[600]'>SEND US A MESSAGE</h1>
                    <form onSubmit={submitHandler} className='flex mt-0 lg:mt-3 flex-col gap-2'>
                        <MyForm form={contactForm} >
                            <FormInput name="name" required={true} type="text" pattern={/^[a-zA-Z\s]*$/} className='h-[50px]' />
                            <FormInput name="phone" required={true} type="tel" pattern={/^[0-9]{10}$/} className='h-[50px]' />
                            <FormInput name="email" required={true} type="email" className='h-[50px]' />
                            <FormInput name="message" required={true} type="text" pattern={/^[a-zA-Z\s]*$/} textArea={true} />
                        </MyForm>

                        <div className='w-full mt-2 lg:text-start text-center'>
                            <button type='submit' className="bg-primaryBtn hover:bg-hoverBtn w-3/4 lg:w-2/4 py-2 text-white rounded-3xl">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>





    )
};

export default Contact;
