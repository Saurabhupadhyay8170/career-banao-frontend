import { createSlice } from "@reduxjs/toolkit";

const showFormPopupSlice = createSlice({
    name:"showFormPopup",
    initialState:false,
    reducers:{
        setShowFormPopup:(state)=>{
          return  state = !state 
        }
    }
})

export default showFormPopupSlice.reducer;
export const {setShowFormPopup} = showFormPopupSlice.actions