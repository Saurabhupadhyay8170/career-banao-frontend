import { useState } from "react";
import GoogleIcon from "assets/google.png";
import { Link } from "react-router-dom";
import { register } from "src/utils/services";
const registerDataInitalState = {
  email: "",
  password: "",
  name: "",
  phone: "",
  collegeName: "",

}
const headerStyle = {
  borderRadius: "8px",
  boxShadow: "5px -5px 10px #fff, 4px 5px 10px rgba(216, 218, 225, 0.7)",
  boder: "1px solid #fff",
}

export default function RegisterForm({ handleGoogleClick, setShowLoginForm, setShowRegisterForm }: any) {
  const [next, setNext] = useState(false);
  const [registerData, setRegisterData] = useState(registerDataInitalState);
  // const [errorMessages, setErrorMessages] = useState({
  //   name: '',
  //   phone: '',
  //   collegeName:"",
  // });

  async function handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      name: registerData.name,
      email: registerData.email,
      phone: registerData.phone,
      collegename: registerData.collegeName,
      password: registerData.password
    }
    if (!next) {
      setNext(true)
      return
    } else {
      const resp = await register(payload)
      if (resp) {
        setShowLoginForm(true)
        setShowRegisterForm(false)
        setNext(false)
        setRegisterData(registerDataInitalState)
      } else {
        setRegisterData(registerDataInitalState)
      }
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    })

  }
  // const handleInvalid = (event:React.FormEvent<HTMLInputElement>, name:string) => {
  //   event.preventDefault();
  //   setErrorMessages({
  //     ...errorMessages,
  //     [name]: 'Please enter a valid value'
  //   });
  // };
  return (
    <div>
      <form className="font-popins w-full" onSubmit={handleSubmit}>
        {!next ?
          <>
            <div className="google-btn w-full h-full mt-5 flex justify-center">
              <div style={headerStyle} onClick={handleGoogleClick} className="google-login w-[90%] hover:cursor-pointer flex gap-5 lg:gap-[3rem] px-2 mt-6 shadow-lg border-[1px]">
                <div className="google-logo lg:w-[20%] w-[10%] flex items-center ml-8 justify-center">
                  <img src={GoogleIcon} width={20} alt="" />
                </div>
                <h2 className="w-[90%] text-blue-600 font-bold">Login With Google</h2>
              </div>
            </div>
            <div className="user-form">
              <div className="form-middle mt-5 lg:px-5">
                <p className="text-center mt-8 lg:mt-[4rem] text-xs text-slate-500">or use your email address</p>
                <div className="user-login-form mt-10">
                  <MyInput
                    placeholder="Your Email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}
                    type="email"
                    required

                  />
                  <MyInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange}
                    required

                  />
                </div>
              </div>
              <div className="form-footer mt-8 lg:px-5">
                <div className="submit-btn w-full flex justify-center">
                  <button type="submit" className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 ">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className="user-form my-[5rem]">
              <div className="form-middle mt-5 lg:px-5">
                <div className="user-login-form mt-10">
                  <MyInput placeholder="Full Name"
                    name="name"
                    value={registerData.name}
                    onChange={handleChange}
                    required
                    pattern="^[a-zA-Z\s]*$"
                    title="please enter valid name"
                  />
                  <MyInput placeholder="Mobile No"
                    type="tel"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="^[0-9]{10}$"
                    title="please enter valid number"
                  />
                  <MyInput placeholder="College Name"
                    name="collegeName"
                    value={registerData.collegeName}
                    onChange={handleChange}
                    required
                    pattern="^[a-zA-Z\s]*$"
                    title="Please enter valid college name"
                    
                  />
                </div>
              </div>
              <div className="form-footer mt-8 lg:px-5">
                <div className="mx-2">
                  <p className="text-xs text-slate-600">By submitting this form , you accept and agree to our <Link to={"/terms-and-conditions"}><span className="text-xs text-blue-600">terms and conditions</span></Link></p>
                </div>
                <div className="submit-btn w-full mt-8 flex justify-center">
                  <button type="submit" className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 ">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>}
      </form>

    </div>

  )
}

function MyInput({ type = "text", placeholder, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div className="mb-4">
      <input {...props} className="shadow appearance-none border h-[2.5rem] rounded-[5px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder} />
    </div>
  );
}