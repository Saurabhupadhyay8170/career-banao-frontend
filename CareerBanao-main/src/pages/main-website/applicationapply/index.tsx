import useFetch from "hooks/useFetch";
import ApplyLayout from "components/main-website/applicationapply/ApplyLayout"

import { useLocation, useNavigate, useParams } from "react-router-dom";
import TextSkeleton from "ui/TextSkeleton";
import ImgSkeleton from "src/components/ui/ImgSkeleton";
import { useSelector } from "react-redux";
import { menuConfig } from "src/utils/constants";


function ApplicationApplyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const collegeName = useParams().college
  let api = "";
  let redirectLocation = "/";

  const admlist: ApplicationConfigType[] = useSelector((state: any) => state.navList.admissionList);
  const counslist: ApplicationConfigType[] = useSelector((state: any) => state.navList.counsellingList);

  if (location.pathname.includes("/admissions/engineering") && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admEng)) != -1) {
    api = `/getApplicationDetailsEng?college_name=${collegeName}`;
    redirectLocation = "/admissions/engineering"
  } else if (location.pathname.includes("/admissions/management") && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admManag)) != -1) {
    api = `/getApplicationDetailsManagement?college_name=${collegeName}`;
    redirectLocation = "/admissions/management"
  } else if (location.pathname.includes("/admissions/medical") && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admMed)) != -1) {
    api = `/getApplicationDetailsMed?college_name=${collegeName}`;
    redirectLocation = "/admissions/medical"
  }


  else if (location.pathname.includes("/counselling/engineering") && counslist?.findIndex((item) => item.module_name.includes(menuConfig.counsEng)) != -1) {
    api = `/getCounslingDetails?college_name=${collegeName}`;
    redirectLocation = "/counselling/engineering"
  }
  else if (location.pathname.includes("/counselling/management") && counslist?.findIndex((item) => item.module_name.includes(menuConfig.counsManag)) != -1) {
    api = `/getCounslingDetailsManagement?college_name=${collegeName}`;
    redirectLocation = "/counselling/management"
  }
  else if (location.pathname.includes("/counselling/medical") && counslist?.findIndex((item) => item.module_name.includes(menuConfig.counsMed)) != -1) {
    api = `/getCounslingDetailsMed?college_name=${collegeName}`;
    redirectLocation = "/counselling/management"
  }

  else {
    navigate("/")
  }

  const [data, loading] = useFetch(api);
  if (loading) {

    return (
      <div className="relative top-[80px]">
        <ImgSkeleton />
        <TextSkeleton />
      </div>
    );
  } else {
    if (data) {
      return (
        <div>
          <ApplyLayout data={(data)} location={redirectLocation} />
        </div>
      );
    } else {
      navigate(redirectLocation)
    }
  }
}
export default ApplicationApplyPage



