import "./layout.css";
import { Link } from "react-router-dom";
import {
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined, 
} from "@ant-design/icons";

const Footer = () => {
  return (
      

    <div className="footer text-white">
      <div className="pg-footer">
        <footer className="footer">
        <div>
              <svg
                className="footer-wave-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
              >
                <path
                  className="footer-wave-path"
                  d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
                ></path>
              </svg>
            </div>
          <div className="footer-content">
            
            <div className="footer-content-column">
              <div className="footer-logo flex gap-2">
              <img src="./logo/Untitled design.png" className="h-[50px] mt-2"></img>
                <Link to={"/"} className="footer-logo-link">
                  <h2 className="footer-logo text-white">CareerBanao</h2>
                </Link>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">Contact info</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <PhoneOutlined
                      style={{
                        transform: "rotate(90deg)",
                        fontSize: "18px",
                        marginRight: "3px",
                        marginTop: "13px",
                      }}
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                    <Link to={""}>+91 8750092628</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    {<EnvironmentOutlined style={{ fontSize: "18px" }}
                     onPointerEnterCapture={() => {}}
                     onPointerLeaveCapture={() => {}} />}
                    <Link to="#">
                      Spring Meadows Business Park, Sector 63, Noida, Uttar
                      Pradesh 201301 <br />
                      India
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    {
                      <MailOutlined
                        style={{ fontSize: "18px", marginTop: "13px" }}
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      />
                    }
                    <Link to="mailto:careerbanao20@gmail.com">
                      infocareerbanao@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">Experts From</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    DELHI NCR
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    BANGALORE
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    PUNE
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    PUNJAB
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    UTTAR PRADESH
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    BIHAR
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    JHARKHAND
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link
                      to="https://drcc.careerbanao.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Drcc Admission{" "}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/career"}>Join Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description">
                  {" "}
                  Have a question?
                </p>

                <Link
                  to="/contact"
                  className="footer-call-to-action-button bg-primaryBtn hover:bg-hoverBtn shadow-[] hover:text-white text-white py-[12px] px-[30px] rounded-[45px]"
                  target="_self"
                >
                  {" "}
                  Get in Touch{" "}
                </Link>
              </div>
              <div className="footer-call-to-action mt-3">
                <h2 className="footer-call-to-action-title"> Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                  {" "}
                  <Link
                    className="footer-call-to-action-link]"
                    to="tel:0124-64XXXX"
                    target="_self"
                  >
                    {" "}
                    +91 8750092628{" "}
                  </Link>
                </p>
              </div>
            </div>

            <div className="footer-social-links flex items-center">
              <svg
                className="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              >
                <path
                  className="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                ></path>
              </svg>
              <Link
                className="footer-social-link linkedin mr-4"
                to="https://www.linkedin.com/company/careerbanao1/"
                target="_blank"
              >
                <LinkedinOutlined className="footer-icons"  
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}} />
              </Link>
              <Link
                className="footer-social-link twitter"
                to="https://www.instagram.com/careerbanao20/"
                target="_blank"
              >
                <InstagramOutlined className="footer-icons" 
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}} 
                />
              </Link>
              <Link
                className="footer-social-link youtube"
                to=" https://youtube.com/c/CareerBanao"
                target="_blank"
              >
                <YoutubeOutlined className="footer-icons"  
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}} 
                />
              </Link>
              <Link
                className="footer-social-link github"
                to="https://www.facebook.com/careerbanao/"
                target="_blank"
              >
                <FacebookOutlined className="footer-icons fb-icon" 
                   onPointerEnterCapture={() => {}}
                   onPointerLeaveCapture={() => {}}
                />
              </Link>
            </div>
          </div>
          <div className="footer-copyright ">
            <div className="footer-copyright-wrapper">
              <div className="footer-copyright-text">
                <div className="footer-copyright-link">
                  {" "}
                  Since ©2022 | Design & Developed By:
                  <span style={{ color: "white" }}>
                    {" "}
                    CareerBanao{" "}
                  </span>{" "}
                  <Link to="#" style={{ color: "white" }} target="blank"></Link> |
                  All Rights Reserved.{" "}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
