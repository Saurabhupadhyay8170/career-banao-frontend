
import NavBar from './NavBar'
import LoginSignUpPopUp from "./loginSignUpForm/LoginSignUpPopUp";
import { useDispatch, useSelector } from 'react-redux';
import { setShowPopUp } from 'src/redux/loginSignupSlice';
import { ToastContainer } from 'react-toastify';
import HomePopUp from 'components/main-website/homePage/HomePopUp';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuConfig } from 'src/utils/constants';

function Header() {
  const isLoginSignUpPopUp = useSelector((state:any)=> state.loginSignUpPopUp);
  const dispatch = useDispatch();
  const [showHomePopup,setShowHomePopup] = useState(false)
  const location = useLocation()
  const closeModal = () => {
    dispatch(setShowPopUp());
  };
  const homepopup:ApplicationConfigType[] = useSelector((state: any) => state.navList.data);

  useEffect(()=>{
    if(location.pathname.split("/")[1] == "" && homepopup?.findIndex((item)=>item.status == "0" && item.module_name == menuConfig.homePopup) != -1){
     setShowHomePopup(true)
    }
  },[])
  return (
    <div>
      <ToastContainer pauseOnHover={false}/>
      {showHomePopup && <HomePopUp/>}
      <NavBar/>
      <LoginSignUpPopUp modalIsOpen={isLoginSignUpPopUp} closeModal={closeModal}/>
    </div>
  )
}

export default Header
