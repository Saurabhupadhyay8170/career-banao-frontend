import { Dispatch, useState, useEffect } from "react";
import FormInput from "ui/FormItems/FormInput";
import MyCol from "ui/MyCol";
import MyForm, { Form } from "ui/MyForm";
import MyModal from "ui/MyModal";
import MyRow from "ui/MyRow";
import MyText from "ui/MyText";
import axios from "axios";
import BaseUrl from "utils/baseurl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

type cardData = {
  image: string;
  title: string;
  description: string;
  type?: string;
  index?: number;
  showForm?: boolean;
  setQueryCategory?: any;
  setShowForm?: Dispatch<React.SetStateAction<boolean>>;
};

type modalProps = {
  showForm: boolean;
  referFriend: boolean;
  hideForm: () => void;
  submitHandler: (values: contactData) => void;
};

export type contactData = {
  name: string;
  phone: string;
  email: string;
  category: string;
};

const Section5 = () => {
  const [showForm, setShowForm] = useState(false);
  const [queryCategory, setQueryCategory] = useState(0);


  const hideForm = () => {
    if (setShowForm) {
      setShowForm(false);
    }
  };
  function errorAlert() {
    toast.error("Something Went Wrong");
  }
  function successAlert() {
    toast.success("Message Send Successfully");
  }

  const submitHandler = async (payload: any) => {
    payload = {
      name: payload.Name,
      phone: payload.Phone,
      email: payload.Email,
      category: queryCategory == 1 ? "video/voice" : "face-session",
    };
    payload = JSON.stringify(payload);

    try {
      const response = await axios.post(`${BaseUrl}/userQueryAPI`, payload);
      if (response.status == 200) {
        successAlert();
        hideForm();
      } else {
        errorAlert();
        hideForm();
      }
    } catch (error) {
      toast.error("Something Went Wrong ");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mt-[5rem] gap-4">
      {items.map((item, index) => (
        <CardItem
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          image={item.image}
          type={item.type}
          showForm={showForm}
          setShowForm={setShowForm}
          setQueryCategory={setQueryCategory}
        />
      ))}
      <ContactForm
        showForm={showForm ?? false}
        hideForm={hideForm}
        submitHandler={submitHandler}
        referFriend={false}
      />
    </div>
  );
};

export default Section5;

const items: cardData[] = [
  {
    title: "WhatsApp Chat",
    description:
      "Chat with our admission expert on WhatsApp for personalized guidance and answers to your admission-related queries.",
    image: "whatsapp",
    type: "ws",
  },
  {
    title: "Voice/Video Call",
    description:
      "Connect with our admission expert for an online face-to-face session to receive personalized guidance.",
    image: "videocalls",
  },
  {
    title: "Face to Face Sessions",
    description:
      "Connect one to one in-person with an expert of your choice.To have a positive or meaningful connection with us.",
    image: "facetoface",
  },
];

const CardItem = ({
  title,
  description,
  image,
  type,
  index,
  setShowForm,
  setQueryCategory,
}: cardData) => {
  const [whatsapp] = useFetch(`${BaseUrl}/getWhatsAppUrl`)
  const handleClick = () => {
    setQueryCategory(index);

    if (setShowForm) {
      setShowForm(true);
    }
  };

  if (type === "ws") {
    return (
      <div className="card-container hover-card w-full lg:w-[35%]">
        <Link
          to={whatsapp ? (whatsapp as any)[0]?.whatsApp_link : ""}
          target="_blank"
          className="flex px-5 py-8 gap-4"
        >
          <div className="card-img w-[20%] flex justify-center items-start ">
            <img
              width={"100%"}
              height={"100%"}
              src={`/icons/home/${image}.png`}
            />
          </div>
          <div className="content w-[80%]">
            <p className="text-[20px] text-primaryBtn font-bold">{title}</p>
            <p className="text-[15px] text-gray-500 fonse">{description}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="card-container hover-card flex px-5 py-8 gap-4 w-full lg:w-[35%]"
        onClick={handleClick}
      >
        <div className="card-img w-[20%] flex justify-center items-start ">
          <img
            width={"100%"}
            height={"100%"}
            src={`/icons/home/${image}.png`}
          />
        </div>
        <div className="content w-[80%]">
          <p className="text-[20px] text-primaryBtn font-bold">{title}</p>
          <p className="text-[15px] text-gray-500 fonse">{description}</p>
        </div>
      </div>
    );
  }
};

export const ContactForm = ({
  showForm,
  hideForm,
  submitHandler,
  referFriend,
}: modalProps) => {
  const [contactForm] = Form.useForm();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const validateHandler = async () => {
    const values = await contactForm.validateFields();
    // if(contactForm.isFieldsValidating()){
    submitHandler(values);
    contactForm.resetFields();
    // }else{
    //   errorAlert();
    // }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the width threshold as needed
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MyModal
      open={showForm}
      cancelHandler={hideForm}
      submitHandler={validateHandler}
    >
      <MyRow>
        <MyCol style={{ marginBottom: "30px", margin: "0 auto" }}>
          <MyText variant="title" level={4} style={{ fontWeight: "630" }}>
            {referFriend
              ? "Refer a Friend, Win Up to ₹1000 Paytm Cashback!"
              : "Shape Your Dreams: Submit Your Details Now."}
          </MyText>
        </MyCol>
        <MyCol span={isSmallScreen ? 24 : 14}>
          <img
            src={`/icons/home/voicecall.png`}
            alt="contactForm"
            style={{
              objectFit: "cover",
              width: "300px",
              height: "200px",
            }}
          />
        </MyCol>
        <MyCol span={isSmallScreen ? 24 : 10}>
          <MyForm form={contactForm} >
            <FormInput name="Name" required={true} type="text" pattern={/^[a-zA-Z\s]*$/}/>
            <FormInput name="Phone" required={true} type="tel" max={10} pattern={/^[0-9]{10}$/} />
            <FormInput name="Email" required={true} type="email" />
            {/* {/* {showMessage && <Alert message="Successfully send" type="success" showIcon />} */}
            {/* { showErrorMessage && <Alert message="Try after Some time" type="error" showIcon />} */}
          </MyForm>
        </MyCol>
      </MyRow>
    </MyModal>
  );
};
