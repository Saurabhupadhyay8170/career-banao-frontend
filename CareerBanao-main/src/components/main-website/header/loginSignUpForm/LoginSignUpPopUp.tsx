import { useState } from "react";
import { auth, provider } from "src/firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { Modal,Button } from "antd";
import { setUserData } from "src/redux/userSlice";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


export default function LoginSignUpPopUp({ modalIsOpen, closeModal }: any) {

  const [isHovered, setIsHovered] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [value, setValue] = useState(null);
  const [isForgot, setIsForgot] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setIsForgot(false)
    if (showRegisterForm == true) {
      setShowRegisterForm(!showRegisterForm);
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    if (showLoginForm == true) {
      setShowLoginForm(!showLoginForm);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    closeModal();
  };
  const Forgot = () => {
    setIsForgot(!isForgot);
  };
  const handleGoogleClick = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        setValue(result.user.email);

        // /-------------------- store data in session and redux user state----------
        const userData = {
          email: result.user.email,
          photoUrl: result.user.photoURL,
          uid: result.user.uid
        }
        sessionStorage.setItem("user", JSON.stringify(userData));
        dispatch(setUserData(userData));
        closeModal();
        // console.log("Authentication successful:", result);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        className="loginModal"
        width="auto"
        style={{ padding: "24px", maxWidth: "30rem" }}
      >
        <div className="HeadingPop">
          <Button
            onClick={handleLoginClick}
            className="popUpheadin "
            style={{
              borderBottom: showLoginForm ? "2px solid blue" : "none",
              color: "black",
              textSizeAdjust: "auto"
            }}
          >
            Login
          </Button>
          <Button
            onClick={handleRegisterClick}
            className="popUpheadin2"
            style={{
              borderBottom: showRegisterForm ? "2px solid blue" : "none",
              color: "black",
              textSizeAdjust: "auto"
            }}
          >
            Register
          </Button>
        </div>

        {showLoginForm && (
          <LoginForm handleSubmit={handleSubmit} closeModal={closeModal} forgotPassword={Forgot} isForgot={isForgot} value={value} isHovered={isHovered} handleGoogleClick={handleGoogleClick} setIsHovered={setIsHovered} />
        )}
        {showRegisterForm && (
          <RegisterForm handleGoogleClick={handleGoogleClick} setShowLoginForm={setShowLoginForm} setShowRegisterForm={setShowRegisterForm}/>
        )}


      </Modal >

    </div>

  );
}

