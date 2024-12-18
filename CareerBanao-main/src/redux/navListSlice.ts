import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  data:ApplicationConfigType[] | null,
  admissionList:ApplicationConfigType[] | null,
  counsellingList:ApplicationConfigType[] | null,
}
const initialState:initialStateType = {
  data:null,
  admissionList:null,
  counsellingList:null,
}
const navListSlice = createSlice({
  name:"navList",
  initialState, 
  reducers:{
    setMenulistData:(state:initialStateType,action)=>{
      state.data = action.payload;
      state.admissionList = state.data;
      state.counsellingList = state.data;

      state.admissionList = state.admissionList?.filter((item)=>(
        item.module_name.toLowerCase().includes("admission") && item.status == "0"
      ))!
      state.counsellingList = state.counsellingList?.filter((item)=>(
        item.module_name.toLowerCase().includes("counsling") && item.status == "0"
      ))!
    }
  }
})


export default navListSlice.reducer;
export const {setMenulistData} = navListSlice.actions