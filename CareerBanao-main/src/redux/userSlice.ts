import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        data:null
    },
    reducers:{
        setUserData:(state,action)=>{
            state.data = action.payload;
        },
    }
})

export default userSlice.reducer;
export const {setUserData} = userSlice.actions