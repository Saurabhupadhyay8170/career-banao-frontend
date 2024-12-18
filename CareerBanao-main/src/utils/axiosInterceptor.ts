import axios, { AxiosResponse } from "axios";
import BaseUrl from "./baseurl";

const baseLink =BaseUrl;

const myAxios = axios.create({
  baseURL: baseLink,
});

myAxios.interceptors.response.use(
  (response): AxiosResponse => response,
  (error) => {
    console.log("something wrong happend in the response", error);
    return {
      success: false,
      error: true,
      data: null,
      errorMessage: error,
    };
  }
);

export { myAxios };
