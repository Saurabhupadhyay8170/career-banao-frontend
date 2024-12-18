import { createSlice } from "@reduxjs/toolkit";

const loginSignUpPopUpSlice = createSlice({
    name:"loginSignUpPopUp",
    initialState:false,
    reducers:{
        setShowPopUp:(state)=>{
          return  state = !state 
        }
    }
})

export default loginSignUpPopUpSlice.reducer;
export const {setShowPopUp} = loginSignUpPopUpSlice.actions