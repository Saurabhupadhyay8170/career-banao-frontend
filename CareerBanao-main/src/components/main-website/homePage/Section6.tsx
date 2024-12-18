import { Carousel, Row } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyText from 'ui/MyText';
import BaseUrl from 'utils/baseurl';
import { ContactForm } from './Section5';
import { toast } from "react-toastify"

const Section6 = () => {
    const [testimonialData, setTestimonialData] = useState<TestimonialType[] | null>(null);
    const [showForm, setShowForm] = useState(false);


    const hideForm = () => {
        if (setShowForm) {
            setShowForm(false);

        }
    };

    const submitHandler = async (payload: any) => {

        payload = {
            name: payload.Name,
            phone: payload.Phone,
            email: payload.Email,
            category: "refer-friend"
        }
        payload = JSON.stringify(payload)


        try {
            const response = await axios.post(`${BaseUrl}/userQueryAPI`, payload)
            if (response.status == 200) {
                hideForm()
                toast.success("Message Send Successfully")
            } else {
                toast.error("Please check your details")
            }
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        }

    };

    useEffect(() => {
        axios.get(`${BaseUrl}/fetchtestimonialsAPI`).then((res?: any) => {
            setTestimonialData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className="Section-6">
            <h1 className='text-[2em] text-center font-poppins pt-8'>What our students have to say about us!</h1>
            <Carousel autoplay>
                {
                    testimonialData?.map((data, index) => {
                        if(data.action_status == "0" && data.delete_status != "1")
                        return (
                            <TestimonialCard cardData={data} key={index} />
                        );
                    })
                }
            </Carousel>
            <Row justify={"center"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => { setShowForm(true) }}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Refer Your Friend Now
                    </span>
                </button>
            </Row>
            <ContactForm
                showForm={showForm ?? false}
                hideForm={hideForm}
                submitHandler={submitHandler}
                referFriend={true}
            />
        </div>
    )
}

export default Section6


const TestimonialCard = ({ cardData }: { cardData: TestimonialType }) => {
    const { college_name, name, student_image, feedback } = cardData
        return (
            <div style={{ display: "flex" }}>
                <div className="main-container">
                    <div className="section-6-card" style={{ maxWidth: "540px", textAlign: "center" }}>
                        <div className='flex justify-center items-center mb-4'><img src={student_image} width={80} height={80} className='rounded-full'/></div>
                        <MyText variant="title" style={{ fontSize: "20px" }} >{name}</MyText>
                        <MyText variant="title" style={{ fontSize: "17px" }} >{college_name}</MyText>
                        <p className="feedback">{feedback}</p>
                    </div>
                </div>
            </div>
        );
}