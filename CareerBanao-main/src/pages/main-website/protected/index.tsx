import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setShowPopUp } from 'src/redux/loginSignupSlice'
import HomePage from 'pages/main-website/home'

function ProtectedRoutes({ Component }: any) {
    const user = useSelector((state: any) => state.user.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    if (user == null) {
        navigate("/")
        dispatch(setShowPopUp());
    }
    return (
        <div>
            {user ? <Component /> : <HomePage />}
        </div>
    )
}

export default ProtectedRoutes
