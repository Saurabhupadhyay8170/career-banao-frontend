import Admissions from "pages/main-website/admissions";
import ApplicationApplyPage from "pages/main-website/applicationapply";
import Career from "pages/main-website/career";
import CareerForm from "pages/main-website/career/CareerForm";
import ContactPage from "pages/main-website/contact";
import HomePage from "pages/main-website/home";
import PrivacyPolicyPage from "pages/main-website/privacypolicy";
import TermsAndConditionsPage from "pages/main-website/termsconditions";

const mainRoutes = [
  {
    path:"/",
    element:HomePage,
  },
  {
    path:"/admissions/:category",
    element:Admissions,
  },
  {
    path:"/admissions/:category/apply/:college",
    element:ApplicationApplyPage,
  },
  {
    path:"/contact",
    element:ContactPage,
  },
  {
    path:"/career",
    element:Career,
  },
  {
    path:"/career/jobapply/:job_id",
    element:CareerForm,
  },
  {
    path:"/privacy-policy",
    element:PrivacyPolicyPage,
  },
  {
    path:"/terms-and-conditions",
    element:TermsAndConditionsPage,
  },
  {
    path:"*",
    element:HomePage,
  },
]



export default mainRoutes;