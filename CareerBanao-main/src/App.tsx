import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import MainLayout from "./layout/MainLayout";
import mainRoutes from "./routes/mainRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";
import { postData } from "./utils/apiService";
import useFetch from "./hooks/useFetch";
import { setMenulistData } from "./redux/navListSlice";
import { getCurrentDate, getIPAddress } from "./utils/services";
import Chatbot from "./components/chatbot/Chatbot";
import WhatsAppBtn from "./components/whatsappbtn/WhatsAppBtn";
import CollegeFoundRoutes from "./routes/CollegeFoundRoutes";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const userDatainLocalStorage = localStorage.getItem("user")
  const userDatainsessionStorage = sessionStorage.getItem("user")
  const [data, apiLoading] = useFetch("/ApplicationConfigStatus")
  if (!apiLoading) {
    dispatch(setMenulistData(data))
  }

  useEffect(() => {
    // setLoading(true)
    if (userDatainLocalStorage) {
      postData("userLogin", { email: JSON.parse(userDatainLocalStorage) })
        .then((resp) => {
          if (resp.success == true && resp?.data == true) {
            dispatch(setUserData(JSON.parse(userDatainLocalStorage)));
          }
        }).finally(() => {
          setTimeout(() => setLoading(false), 500)
        })
    } else if (userDatainsessionStorage) {
      dispatch(setUserData(JSON.parse(userDatainsessionStorage)));
      setTimeout(() => setLoading(false), 500)
    } else {
      setTimeout(() => setLoading(false), 500)
    }
    let payload;
    getIPAddress().then((resp)=>{
      if(resp.success){
        payload = {
          ip_address:resp.ip,
          visit_date:getCurrentDate(),
          category:"Careerbanao"
        }
        postData("visitorAnayltics",payload)
      }
    })
  }, []);



  return loading ? (
    <Loader />
  ) : (
    <MainLayout>
      <Routes>
        {
          mainRoutes.map(({ path, element: Element }, i) => (
            <Route path={path} element={<Element />} key={i} />
          ))
        }
        {
          protectedRoutes.map(({ path, protected: Protected, element: Element }, i) => (
            <Route path={path} element={<Protected Component={Element} />} key={i} />
          ))
        }
        {
          CollegeFoundRoutes.map(({ path, element: Element }, i) => (
            <Route path={path} element={<Element/>} key={i} />
          ))
        }
      </Routes>
      <Chatbot/>
      <WhatsAppBtn/>
    </MainLayout>
  )
}

export default App;
