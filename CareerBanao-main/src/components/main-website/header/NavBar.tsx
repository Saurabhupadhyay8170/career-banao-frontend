import { MenuOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopUp } from "src/redux/loginSignupSlice"
import { setUserData } from "src/redux/userSlice";
import no_user_img from "assets/avatar.jpg"
import { logout } from "src/utils/services";
import { menuConfig } from "src/utils/constants";

let admissonItems= [
  {
    key: "1",
    label: <Link to={"/admissions/engineering"}>Engineering</Link>,
    title:menuConfig.admEng
  },
  {
    key: "2",
    label: <Link to={"/admissions/management"}>Management</Link>,
    title:menuConfig.admManag
  },
  {
    key: "3",
    label: <Link to={"/admissions/medical"}>Medical</Link>,
    title:menuConfig.admMed
  },
]
// let counsellingItems= [
//   {
//     key: "1",
//     label: <Link to={"/counselling/engineering"}>Engineering</Link>,
//     title:menuConfig.counsEng
//   },
//   {
//     key: "2",
//     label: <Link to={"/counselling/management"}>Management</Link>,
//     title:menuConfig.counsManag
//   },
//   {
//     key: "3",
//     label: <Link to={"/counselling/medical"}>Medical</Link>,
//     title:menuConfig.counsMed
//   },
// ]


const NavBar = () => {
  const user = useSelector((state: any) => state.user.data);
  const admlist = useSelector((state: any) => state.navList.admissionList);
  const couslist = useSelector((state: any) => state.navList.counsellingList);

  // if(admlist){
  //   admissonItems = admissonItems?.filter((item)=>(
  //     admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
  //   ))
  // }
  // if(couslist){
  //   counsellingItems = counsellingItems?.filter((item)=>(
  //     couslist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
  //   ))
  // }
  const [navbar, setNavbar] = useState(false);
  const [showNavSlider, setShowNavSlider] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  const changeBackgroundColor = () => {
    if (window.scrollY > 100) setShowNavSlider(false)
    if (window.scrollY >= 14) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  async function handleLogout() {
    const resp = await logout()
    if (resp) {
      dispatch(setUserData(null));
      navigate("/");
    }
  }


  window.addEventListener("scroll", changeBackgroundColor);


  function handleNavSlider() {
    window.scroll(0, 0);
    setShowNavSlider(!showNavSlider);
  }

  return (
    <div className="header relative">
      <div className={navbar ? "navbar navactive flex w-full px-[5rem] py-3 fixed z-[999]" : "navbar flex w-full px-[5rem] py-3 fixed z-[999]"}>
        <div className="navbar-left w-1/3 lg:w-[40%] flex items-center">
          <div className=" flex gap-2 nav-logo-name text-[32px] font-semibold text-primaryNavText">
            <img src="./logo/Untitled design.png" className="h-[50px]"></img>
            <Link className="text-primaryNavText" to={"/"}>
              CareerBanao
            </Link>
          </div>
        </div>
        <div className="navbar-right w-full lg:w-[60%] flex items-center">
          <ul className="navlinks hidden lg:flex w-full font-semibold justify-around text-[18px] items-center text-primaryNavText">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {/* <Dropdown placement="bottom" menu={{ items: admissonItems }}> */}
                <Link to={'/admissions/:category'}><button>Admission</button></Link>
              {/* </Dropdown> */}
            </li>
            <li>
              {/* <Dropdown placement="bottom" menu={{ items: counsellingItems }}> */}
                <button>Counselling</button>
              {/* </Dropdown> */}
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {user == null ?
              <li>
                <button
                  onClick={() => { dispatch(setShowPopUp()) }}
                  type="button"
                  className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
                >
                  Login
                </button>
              </li>
              :
              <>
                <li className="rounded-full bg-[#edede9]"><img src={user.photoUrl ? user.photoUrl : no_user_img} width={40} className="rounded-full mix-blend-multiply" alt="" /></li>
                <li>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
                  >
                    Logout
                  </button>
                </li>
              </>
            }


          </ul>
          <div className="hamburger-menu w-full text-right text-2xl cursor-pointer lg:hidden ">
            <MenuOutlined onClick={handleNavSlider} 
               onPointerEnterCapture={() => {}}
               onPointerLeaveCapture={() => {}}/>
          </div>
        </div>
      </div>
      {showNavSlider && <NavSlider user={user} handleLogout={handleLogout} handleNavSlider={handleNavSlider} dispatch={dispatch} />}
    </div>
  );
};


export default NavBar;

function NavSlider({ handleNavSlider, handleLogout, dispatch, user }: any) {
  const admlist = useSelector((state: any) => state.navList.admissionList);
  const couslist = useSelector((state: any) => state.navList.counsellingList);
  let admissonItems = [
    {
      key: "1",
      label: (
        <Link to={"admissions/engineering"} onClick={handleNavSlider}>
          Engineering
        </Link>
      ),
      title:menuConfig.admEng
    },
    {
      key: "2",
      label: (
        <Link to={"admissions/management"} onClick={handleNavSlider}>
          Management
        </Link>
      ),
      title:menuConfig.admManag
    },
    {
      key: "3",
      label: (
        <Link to={"admissions/medical"} onClick={handleNavSlider}>
          Medical
        </Link>
      ),
      title:menuConfig.admMed
    },
  ];
  let counsellingItems = [
    {
      key: "1",
      label: (
        <Link to={"/counselling/engineering"} onClick={handleNavSlider}>
          Engineering
        </Link>
      ),
      title:menuConfig.counsEng
    },
    {
      key: "2",
      label: (
        <Link to={"/counselling/management"} onClick={handleNavSlider}>
          Management
        </Link>
      ),
      title:menuConfig.counsManag
    },
    {
      key: "3",
      label: (
        <Link to={"/counselling/medical"} onClick={handleNavSlider}>
          Medical
        </Link>
      ),
      title:menuConfig.counsMed
    },
  ]
  if(admlist){
    admissonItems = admissonItems?.filter((item)=>(
      admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
    ))
  }
  if(couslist){
    counsellingItems = counsellingItems?.filter((item)=>(
      couslist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
    ))
  }
  return (
    <div className="navslider h-[50vh] bg-primaryNavBackground relative top-[80px] lg:hidden">
      <ul className="text-white text-[18px] flex flex-col gap-4 p-5 h-full">
        <li>
          <Link to={"/"} onClick={handleNavSlider}>
            Home
          </Link>
        </li>
        <li>
          <Dropdown placement="bottomRight" menu={{ items: admissonItems }}>
            <button>Admission</button>
          </Dropdown>
        </li>
        <li>
          <Dropdown placement="bottom" menu={{ items: counsellingItems }}>
            <button>Counselling</button>
          </Dropdown>
        </li>
        <li>
          <Link to={"/contact"} onClick={handleNavSlider}>
            Contact
          </Link>
        </li>
        {user == null ?
          <li>
            <button
              onClick={() => { dispatch(setShowPopUp()) }}
              type="button"
              className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
            >
              Login
            </button>
          </li>
          :
          <li>
            <button
              onClick={handleLogout}
              type="button"
              className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
            >
              Logout
            </button>
          </li>
        }
      </ul>
    </div>
  );
}


// import { MenuOutlined } from "@ant-design/icons";
// import { Dropdown } from "antd";
// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setShowPopUp } from "src/redux/loginSignupSlice";
// import { setUserData } from "src/redux/userSlice";
// import no_user_img from "assets/avatar.jpg";
// import { logout } from "src/utils/services";
// import { menuConfig } from "src/utils/constants";

// let admissonItems = [
//   {
//     key: "1",
//     label: <Link to={"/admissions/engineering"}>Engineering</Link>,
//     title: menuConfig.admEng,
//   },
//   {
//     key: "2",
//     label: <Link to={"/admissions/management"}>Management</Link>,
//     title: menuConfig.admManag,
//   },
//   {
//     key: "3",
//     label: <Link to={"/admissions/medical"}>Medical</Link>,
//     title: menuConfig.admMed,
//   },
// ];
// let counsellingItems = [
//   {
//     key: "1",
//     label: <Link to={"/counselling/engineering"}>Engineering</Link>,
//     title: menuConfig.counsEng,
//   },
//   {
//     key: "2",
//     label: <Link to={"/counselling/management"}>Management</Link>,
//     title: menuConfig.counsManag,
//   },
//   {
//     key: "3",
//     label: <Link to={"/counselling/medical"}>Medical</Link>,
//     title: menuConfig.counsMed,
//   },
// ];

// const Header = () => {
//   const user = useSelector((state: any) => state.user.data);
//   const admlist = useSelector((state: any) => state.navList.admissionList);
//   const couslist = useSelector((state: any) => state.navList.counsellingList);

//   if (admlist) {
//     admissonItems = admissonItems?.filter(
//       (item) =>
//         admlist?.find(
//           (listItem: ApplicationConfigType) => item.title == listItem.module_name
//         )
//     );
//   }
//   if (couslist) {
//     counsellingItems = counsellingItems?.filter(
//       (item) =>
//         couslist?.find(
//           (listItem: ApplicationConfigType) => item.title == listItem.module_name
//         )
//     );
//   }

//   const [navbar, setNavbar] = useState(false);
//   const [showNavSlider, setShowNavSlider] = useState(false);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scroll(0, 0);
//   }, [location]);

//   const changeBackgroundColor = () => {
//     if (window.scrollY > 100) setShowNavSlider(false);
//     if (window.scrollY >= 14) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   async function handleLogout() {
//     const resp = await logout();
//     if (resp) {
//       dispatch(setUserData(null));
//       navigate("/");
//     }
//   }

//   window.addEventListener("scroll", changeBackgroundColor);

//   function handleNavSlider() {
//     window.scroll(0, 0);
//     setShowNavSlider(!showNavSlider);
//   }

//   return (
//     <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-5 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">
//           <Link className="text-white" to={"/"}>
//             CareerBanao
//           </Link>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           <a href="#" className="text-white hover:text-gray-200 transition">
//             Home
//           </a>

//           {/* Animated Button */}
//           <a
//             href="#"
//             className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 animate-pulse"
//           >
//             College Finder
//           </a>

//           <Dropdown placement="bottom" menu={{ items: admissonItems }}>
//             <button className="text-white hover:text-gray-200 transition">
//               Admission
//             </button>
//           </Dropdown>

//           <Dropdown placement="bottom" menu={{ items: counsellingItems }}>
//             <button className="text-white hover:text-gray-200 transition">
//               Counselling
//             </button>
//           </Dropdown>

//           <a href="#" className="text-white hover:text-gray-200 transition">
//             Contact Us
//           </a>

//           {user == null ? (
//             <button
//               onClick={() => {
//                 dispatch(setShowPopUp());
//               }}
//               type="button"
//               className="text-white bg-purple-600 hover:bg-purple-800 outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//             >
//               Login
//             </button>
//           ) : (
//             <>
//               <li className="rounded-full bg-[#edede9]">
//                 <img
//                   src={user.photoUrl ? user.photoUrl : no_user_img}
//                   width={40}
//                   className="rounded-full mix-blend-multiply"
//                   alt=""
//                 />
//               </li>
//               <button
//                 onClick={handleLogout}
//                 type="button"
//                 className="text-white bg-purple-600 hover:bg-purple-800 outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setShowNavSlider(!showNavSlider)}
//         >
//           <MenuOutlined className="w-6 h-6" />
//         </button>

//         {/* Mobile Dropdown Menu */}
//         {showNavSlider && (
//           <div className="navslider h-[50vh] bg-purple-600 relative top-[80px] md:hidden">
//             <ul className="text-white text-[18px] flex flex-col gap-4 p-5 h-full">
//               <li>
//                 <Link to={"/"} onClick={handleNavSlider}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Dropdown placement="bottomRight" menu={{ items: admissonItems }}>
//                   <button>Admission</button>
//                 </Dropdown>
//               </li>
//               <li>
//                 <Dropdown placement="bottom" menu={{ items: counsellingItems }}>
//                   <button>Counselling</button>
//                 </Dropdown>
//               </li>
//               <li>
//                 <Link to={"/contact"} onClick={handleNavSlider}>
//                   Contact
//                 </Link>
//               </li>
//               {user == null ? (
//                 <li>
//                   <button
//                     onClick={() => {
//                       dispatch(setShowPopUp());
//                     }}
//                     type="button"
//                     className="text-white bg-purple-600 hover:bg-purple-800 outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//                   >
//                     Login
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <button
//                     onClick={handleLogout}
//                     type="button"
//                     className="text-white bg-purple-600 hover:bg-purple-800 outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
