import axios from "axios";
import BaseUrl from "./baseurl";
class ApiService {
    async postData (url:string,payload:object){
      try {
        const resp = await axios.post(BaseUrl+url,JSON.stringify(payload))
        return {success:true,data:resp.data}
      } catch (error) {
        return {success:false}
      }
    }

}

const apiService = new ApiService();
export const {postData} = apiService