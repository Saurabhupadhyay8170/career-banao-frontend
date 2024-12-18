import AdmissionQues10thPage from 'src/pages/main-website/collegefounder/AdmissionQues10thPage'
import AdmissionQues12thPage from 'src/pages/main-website/collegefounder/AdmissionQues12thPage'
import AdmissionTakenPage from 'src/pages/main-website/collegefounder/AdmissionTakenPage'
import Budget10thPage from 'src/pages/main-website/collegefounder/Budget10thPage'
import BudgetDiplomaPage from 'src/pages/main-website/collegefounder/BudgetDiplomaPage'
import BudgetPage from 'src/pages/main-website/collegefounder/BudgetPage'
import CollegeFounderPage from 'src/pages/main-website/collegefounder/CollegeFounderPage'
import Course10thPage from 'src/pages/main-website/collegefounder/Course10thPage'
import DegreeQuestionPage from 'src/pages/main-website/collegefounder/DegreeQuestionPage'
import DegreeScorePage from 'src/pages/main-website/collegefounder/DegreeScorePage'
import DiplomaDegreeScorePage from 'src/pages/main-website/collegefounder/DiplomaDegreeScore'
import DiplomaHolderPage from 'src/pages/main-website/collegefounder/DiplomaHolderPage'
import DiplomaModePage from 'src/pages/main-website/collegefounder/DiplomaModePage'
import DiplomaQusPage from 'src/pages/main-website/collegefounder/DiplomaQusPage'
import EMIPage from 'src/pages/main-website/collegefounder/EMIPage'
import FormPage from 'src/pages/main-website/collegefounder/FormPage'
import FrndFormPage from 'src/pages/main-website/collegefounder/FrndFormPage'
import ModePage from 'src/pages/main-website/collegefounder/ModePage'
import OnlineModePage from 'src/pages/main-website/collegefounder/OnlineModePage'
import ReffFrndPage from 'src/pages/main-website/collegefounder/ReffFrndPage'
import RegularModePage from 'src/pages/main-website/collegefounder/RegularModePage'
import Score10thPage from 'src/pages/main-website/collegefounder/Score10th'
import Score12thPage from 'src/pages/main-website/collegefounder/Score12thPage'
import ThankuPage from 'src/pages/main-website/collegefounder/ThankuPage'

  const CollegeFoundRoutes = [
    {
      path:"first",
      element:CollegeFounderPage,
    },
    {
      path:"score10th",
      element:Score10thPage,
    },
    {
      path:"score12th",
      element:Score12thPage,
    },
    
    {
      path:"course10th",
      element:Course10thPage,
    },
    {
      path:"question10th",
      element:AdmissionQues10thPage,
    },
    {
      path:"question12th",
      element:AdmissionQues12thPage,
    },
    {
      path:"budget",
      element:BudgetPage,
    },
    {
      path:"emi",
      element:EMIPage,
    },
    {
      path:"formsub",
      element:FormPage,
    },
    {
      path:"regularmode",
      element:RegularModePage,
    },
    {
      path:"diplomacourse",
      element:DiplomaHolderPage,
    },
    {
      path:"diplomamode",
      element:DiplomaModePage,
    },
    {
      path:"diplomaqus",
      element:DiplomaQusPage,
    },
    {
      path:"diplomascore",
      element:DiplomaDegreeScorePage,
    },

    {
      path:"diplomabudget",
      element:BudgetDiplomaPage,
    },
    {
      path:"onlinemode",
      element:OnlineModePage,
    },
    {
      path:"mode",
      element:ModePage,
    },
    {
      path:"degreescore",
      element:DegreeScorePage,
    },
    {
      path:"degreequs",
      element:DegreeQuestionPage,
    },
    {
      path:"adtaken",
      element:AdmissionTakenPage,
    },
    {
      path:"Reff",
      element:ReffFrndPage,
    },
    {
      path:"frndform",
      element:FrndFormPage,
    },
    {
      path:"thanku",
      element:ThankuPage,
    },
    {
      path:"budget10th",
      element:Budget10thPage,
    },
  ]

export default CollegeFoundRoutes