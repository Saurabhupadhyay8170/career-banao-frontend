import PrivacyForm from "components/main-website/privacypolicy/PrivacyForm"
import TermsAndConditions from "components/main-website/termsconditions/TermsAndConditions";
 

function TermsAndConditionsPage() {
  return (
    <div className="bg-[#f7f7f7]">
      <TermsAndConditions/>
      <PrivacyForm/>
    </div>
  );
}

export default TermsAndConditionsPage;
