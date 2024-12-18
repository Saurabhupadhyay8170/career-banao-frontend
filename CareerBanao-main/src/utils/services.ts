import { toast } from "react-toastify";
import { postData } from "./apiService";
import axios from "axios";

class Services {
 // login via email and password
 async login(payload: LoginPayloadType) {
  const resp = await postData("userLogin", payload);
  if (resp.success != true) {
   toast.error("Something went wrong");
   return false;
  }
  if (resp.data != true) {
   toast.error("please check your details");
   return false;
  }
  localStorage.setItem("user", JSON.stringify(payload.email));
  toast.success("Login Successfully");
  return true;
 }

 // register new user
 async register(payload: RegisterPayloadType) {
  const resp = await postData("userRegister", payload);
  if (resp.success != true) {
   toast.error("Something went wrong");
   return false;
  }
  if (resp.data != "200") {
   toast.error("please check your details");
   return false;
  }
  toast.success("Register Successfully");
  return true;
 }
 async logout() {
  let confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
   localStorage.removeItem("user");
   sessionStorage.removeItem("user");
   toast.success("Logout Successfully");
   return true;
  }
  return false;
 }
 getCurrentUser() {}
 async getIPAddress() {
  try {
    const resp = (await axios.get('https://api.ipify.org?format=json')).data;
    return {success:true,ip:resp.ip};
  } catch (error:any) {
    console.log(error.message, 'error while getting the ip');
    return {success:false,ip:null};
  }
}
}
export function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  // const hours = String(now.getHours()).padStart(2, '0');
  // const minutes = String(now.getMinutes()).padStart(2, '0');
  // const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const services = new Services();
export const { login, register, getCurrentUser, logout,getIPAddress } = services;
