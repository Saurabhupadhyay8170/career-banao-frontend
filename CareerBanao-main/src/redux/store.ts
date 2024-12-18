import { configureStore} from "@reduxjs/toolkit";
import admissionCategorySlice from "./admissionCategorySlice";
import loginSignUpPopUpSlice from "./loginSignupSlice";
import showFormPopupSlice from "./showFormPopupSlice";
import userSlice from "./userSlice";
import showMedicalSlice from "./showMedical";
import navListSlice from "./navListSlice";



const store = configureStore({
    reducer:{
        admissionCategory:admissionCategorySlice,
        loginSignUpPopUp:loginSignUpPopUpSlice,
        showFormPopup:showFormPopupSlice,
        user:userSlice,
        showMedical:showMedicalSlice,
        navList:navListSlice
       
    },
});

export default store;