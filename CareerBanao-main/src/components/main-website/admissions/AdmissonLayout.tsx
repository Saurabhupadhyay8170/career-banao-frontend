import CardSkeleton from "ui/CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import no_data_found from "../../../assets/no_data.gif";
import {
  setDefault,
  setGovernment,
  setPrivate,
} from "../../../redux/admissionCategorySlice";
import { useState } from "react";

import { FunnelIcon } from "@heroicons/react/24/solid";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ExamCard from "./ExamCard";

// import ExamCard from "components/main-website/admissions/ExamCard";

const governBtnBase =
  "rounded-3xl text-sm py-[7px] px-[12px] w-full font-sans transition-all";
const privateBtnBase =
  "rounded-3xl text-sm py-[7px] px-[12px] w-full font-sans transition-all";

const defaultBtnBase =
  "text-gray-800 font-bold underline cursor-pointer transition-colors";

type AdmissionLayoutType = {
  data: AdmissionEngineeringDataType[];
  loading: boolean;
  category: string;
};

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

const cities: { [state: string]: string[] } = {
  Assam: ["Guwahati", "Dibrugarh", "Silchar"],
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Haryana: ["Gurgaon", "Faridabad", "Panipat"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur"],
  Meghalaya: ["Shillong", "Tura", "Nongpoh"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar", "Ferozpur"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  Sikkim: ["Gangtok", "Namchi", "Pelling"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida", "Prayagraj"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh"],
  "West Bengal": ["Kolkata", "Darjeeling", "Howrah"],
  Delhi: ["New Delhi", "South Delhi", "East Delhi"],
};

function AdmissionLayout({ data, loading, category }: AdmissionLayoutType) {
  const dispatch = useDispatch();
  const [displayCount, setDisplayCount] = useState(10);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const filterCategory = useSelector((state: any) => state.admissionCategory);
  let filterData = filterCategory.data;

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 10); // Increase the number of records to display by 10
  };

  const handleResetFilters = () => {
    dispatch(setDefault()); // Reset Redux filters
    setSelectedState(""); // Clear selected state
    setSelectedCity(""); // Clear selected city
  };

  // Filter by category
  if (filterCategory.private) {
    filterData = filterData.filter(
      (item: any) => item.college_category === "Private"
    );
    data = filterData;
  }

  if (filterCategory.government) {
    filterData = filterData.filter(
      (item: any) => item.college_category === "Government"
    );
    data = filterData;
  }

  // Filter by State or City
  if (selectedState) {
    const stateCities = cities[selectedState] || [];

    filterData = filterData.filter((item: any) => {
      const address = item.college_address?.toLowerCase().trim();

      const isInState = stateCities.some((city: string) =>
        address.includes(city.toLowerCase().trim())
      );

      const isInCity = selectedCity
        ? address.includes(selectedCity.toLowerCase().trim())
        : true;

      return isInState && isInCity;
    });

    data = filterData;
  }

  return (
    <div
      className="admissionLayout relative font-popins"
      style={{ backgroundColor: "rgb(237, 237, 233)" }} // Updated background color
    >
      <div className="layout-container min-h-[450px] w-full px-4 py-8 flex flex-col lg:flex-row gap-20 relative top-[80px]">
        {/* Left Filter Section */}
        <div className="layout-container-left w-full lg:w-[15%] flex flex-col gap-5">
          {/* Category Section */}
          <div className="flex justify-between bg-white p-[1rem] text-sm rounded-lg shadow">
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-hoverBtn" />
              <span className="text-gray-800 font-bold font-sans">CATEGORY</span>
            </div>
            <div
              onClick={handleResetFilters}
              className={`${defaultBtnBase} ${
                filterCategory.default
                  ? "text-orange-400 cursor-default"
                  : "hover:text-hoverBtn cursor-pointer"
              }`}
            >
              Default
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex gap-4 lg:flex-col">
            <button
              onClick={() => dispatch(setGovernment())}
              className={`${governBtnBase} ${
                filterCategory.government
                  ? "bg-white text-orange-500 border-2 border-orange-500"
                  : "bg-orange-500 text-white"
              }`}
            >
              GOVERNMENT
            </button>
            <button
              onClick={() => dispatch(setPrivate())}
              className={`${privateBtnBase} ${
                filterCategory.private
                  ? "bg-white text-orange-500 border-2 border-orange-500"
                  : "bg-orange-500 text-white"
              }`}
            >
              PRIVATE
            </button>
          </div>

          {/* Dropdown for States */}
          <div className="dropdown mt-4">
            <label htmlFor="states" className="block text-sm font-semibold">
              <MapIcon className="h-5 w-5 inline-block text-orange-400 mr-2" />
              Select State
            </label>
            <select
              id="states"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity(""); // Reset city selection when state changes
              }}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white p-2 text-black focus:outline-none"
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for Cities */}
          <div className="dropdown mt-4">
            <label htmlFor="cities" className="block text-sm font-semibold">
              <MapPinIcon className="h-5 w-5 inline-block text-orange-400 mr-2" />
              Select City
            </label>
            <select
              id="cities"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white p-2 text-black focus:outline-none"
              disabled={!selectedState}
            >
              <option value="">-- Select City --</option>
              {selectedState &&
                cities[selectedState as keyof typeof cities]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="layout-container-right pb-5 flex flex-col gap-6 w-full min-h-[50vh] lg:w-[78%]">
          {loading ? (
            Array.from({ length: displayCount }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : data?.length > 0 ? (
            data.slice(0, displayCount).map((item, index) => (
              <ExamCard
                key={index}
                data={item}
                category={category}
                isLoading={false}
              />
            ))
          ) : (
            <img
              src={no_data_found}
              className="w-full h-[50%] object-contain mix-blend-multiply"
              alt="No Data Found"
            />
          )}

          {/* Load More Button */}
          {data?.length > displayCount && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLoadMore}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdmissionLayout;