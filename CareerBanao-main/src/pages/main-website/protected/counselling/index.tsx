import useFetch from "hooks/useFetch";
import CounselingLayout from "components/main-website/counseling/CounselingLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "src/redux/admissionCategorySlice";
import { menuConfig } from "src/utils/constants";


const Counselling = () => {
  const category = useParams().category
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.admissionCategory.data);
  const couslist: ApplicationConfigType[] = useSelector((state: any) => state.navList.counsellingList);
  let url = "";
  if (category === "engineering" && couslist?.findIndex((item) => item.module_name.includes(menuConfig.counsEng)) != -1) {
    url = "/getCounslingDetails"
  }
  else if (category === "management" && couslist?.findIndex((item) => item.module_name.includes(menuConfig.counsManag)) != -1) {
    url = "/getCounslingDetailsManagement"
  }
  else if (category === "medical" && couslist?.findIndex((item) => item.module_name.includes(menuConfig.counsMed)) != -1) {
    url = "/getCounslingDetailsMed"
  }
  else {
    navigate("/")
  }

  const [fetchData, loading] = useFetch(url, category);

  useEffect(() => {
    !loading && dispatch(setData(fetchData));
  }, [fetchData])
  
  return (
    <CounselingLayout data={data} loading={loading} category={category!} />
  );
};

export default Counselling;
