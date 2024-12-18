import PrivacyForm from "components/main-website/privacypolicy/PrivacyForm";
import Section1 from "components/main-website/privacypolicy/Section1";


function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy pt-5 bg-[#f7f7f7]">
      <div className="relative top-[80px]">
        <Section1 />
        <PrivacyForm />
      </div>
    </div>
  )
}

export default PrivacyPolicyPage;
