import { myAxios } from "../utils/axiosInterceptor";
import { useState,useEffect } from "react";


export default function useFetch(api:string,dependenci?:string){
  const [data,setData] = useState<any | null>();
  const [loading,setLoading] = useState<boolean>(false);


  async function fetchData(apiEndpoint:string) {
    try {
      setLoading(true);
      const response = await myAxios.get(apiEndpoint);
       setData(response.data);

    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(api)
  }, [dependenci])
  


  return [data,loading];
}