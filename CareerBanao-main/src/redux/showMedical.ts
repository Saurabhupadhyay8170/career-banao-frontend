import { createSlice } from "@reduxjs/toolkit";

const showMedicalSlice = createSlice({
  name:"showMedical",
  initialState:{
    show:false
  },
  reducers:{
    setShowMedical:(state,action)=>{
      state.show = action.payload
    }
  }
})


export default showMedicalSlice.reducer;
export const {setShowMedical} = showMedicalSlice.actions