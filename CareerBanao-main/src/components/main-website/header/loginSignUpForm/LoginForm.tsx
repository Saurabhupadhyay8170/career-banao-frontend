import { useState } from "react";
import GoogleIcon from "assets/google.png";
import { useDispatch } from "react-redux";
import { setUserData } from "src/redux/userSlice";
import { login } from "src/utils/services";


const loginIntialState = {
  email: "",
  password: "",
}

const headerStyle = {
  borderRadius: "8px",
  boxShadow: "5px -5px 10px #fff, 4px 5px 10px rgba(216, 218, 225, 0.7)",
  boder: "1px solid #fff",
}
export default function LoginForm({ isForgot, forgotPassword, handleGoogleClick, closeModal }: any) {
  const [loginData, setLoginData] = useState(loginIntialState)
  const dispatch = useDispatch();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      email:loginData.email, 
      password:loginData.password
    }
    const resp = await login(payload)
    if (resp) {
      dispatch(setUserData(loginData.email));
      setLoginData(loginIntialState)
      closeModal();
    }else{
      setLoginData(loginIntialState)
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    })

  }


  return (
    <form className="font-popins w-full" onSubmit={handleSubmit}>
      <div className="google-btn w-full h-full mt-5 flex justify-center">
        <div style={headerStyle} onClick={handleGoogleClick} className="google-login w-[90%] hover:cursor-pointer flex gap-5 lg:gap-[3rem] px-2 mt-6 shadow-lg border-[1px]">
          <div className="google-logo lg:w-[20%] w-[10%] flex items-center ml-8 justify-center">
            <img src={GoogleIcon} width={20} alt="" />
          </div>
          <h2 className="w-[90%] text-blue-600 font-bold">Login With Google</h2>
        </div>
      </div>
      {!isForgot ?
        <div className="user-form">
          <div className="form-middle mt-5 lg:px-5">
            <p className="text-center mt-8 lg:mt-[4rem] text-xs text-slate-500">or use your email address</p>
            <div className="user-login-form mt-10">
              <MyInput
                placeholder="Your Email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                type="email"
                required

              />
              <MyInput
                placeholder="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-footer mt-8 lg:px-5">
            <p className="text-center mb-5 text-blue-600 font-bold text-xs cursor-pointer" onClick={forgotPassword}>Forgot your password ?</p>
            <div className="submit-btn w-full flex justify-center">
              <button className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 " type="submit">
                Sign In
              </button>
            </div>
          </div>
        </div>
        :
        <div className="user-form">
          <div className="form-middle mt-10 lg:px-5">
            <p className="text-center mt-10 lg:mt-[4rem] text-xs text-slate-500">or enter email for verification link</p>
            <div className="user-login-form mt-10">
              <MyInput
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="form-footer mt-10 lg:px-5">
            <div className="submit-btn w-full flex justify-center">
              <button className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 " type="submit">
                Send Email
              </button>
            </div>
          </div>
        </div>
      }
    </form>

  )
}

function MyInput({ type = "text", placeholder, ...props }: any) {
  return (
    <div className="mb-4">
      <input  {...props} className="shadow appearance-none border h-[2.5rem] rounded-[5px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder} />
    </div>
  );
}