// src/components/AdmissionFaq.tsx
import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What courses does Career Banao offer admission guidance for?",
    answer: "Career Banao offers admission guidance for various engineering, medical, and management courses. We provide expert counseling and assistance for undergraduate and postgraduate admissions.",
  },
  {
    question: "How can I apply for admission through Career Banao?",
    answer: "To apply for admission through Career Banao, you can fill out the online application form on our website, or directly contact us for personalized assistance with the application process.",
  },
  {
    question: "Which colleges can I get admission into through Career Banao's services?",
    answer: "Career Banao helps you get admission into top medical and engineering colleges in India, including private colleges, government colleges, and deemed universities.",
  },
  {
    question: "What documents are required for admission counseling?",
    answer: "You will need to provide basic documents such as marksheets, ID proof, entrance exam scores (if any), and passport-size photographs. Specific documents may vary depending on the course and college.",
  },
  {
    question: "Can Career Banao assist with admission to foreign universities?",
    answer: "Yes, Career Banao also provides counseling and guidance for students who wish to pursue their studies at foreign universities. We help with course selection, application procedures, visa assistance, and more.",
  },
  {
    question: "Do I need to have an entrance exam score for admission?",
    answer: "Entrance exam scores may be required for certain courses like NEET (for medical), JEE (for engineering), or other specific entrance exams. However, we also provide guidance for direct admissions in private colleges that do not require entrance exams.",
  },
  {
    question: "What are the eligibility criteria for admission to medical/engineering courses?",
    answer: "The eligibility criteria vary depending on the course and college. Generally, for medical courses (MBBS), you need to have completed your 12th grade with PCB (Physics, Chemistry, Biology), while for engineering courses (B.Tech), 12th grade with PCM (Physics, Chemistry, Mathematics) is required. Please contact us for specific eligibility details.",
  },
  {
    question: "How can I get information about scholarship options for admission?",
    answer: "Career Banao provides detailed information about scholarships and financial aid options available for various courses and colleges. You can contact us directly or visit our Scholarship Assistance page for more details.",
  },
  {
    question: "What is the admission process for private colleges?",
    answer: "The admission process for private colleges typically involves direct counseling and interview sessions. We assist you with the entire process, including college selection, documentation, fees, and seat allotment.",
  },
  {
    question: "When does the admission process begin?",
    answer: "The admission process for most courses begins after the entrance exam results are announced, usually around May to July for engineering and medical courses. For private colleges, admissions may begin earlier. We suggest staying updated through our Admission Alerts for the latest timelines.",
  },
];

const AdmissionFaq: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <>
   
   <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Admission FAQs
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-3 px-4 text-lg font-medium text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              {faq.question}
              <span className="text-xl">+</span> {/* Plus Icon */}
            </button>
            {selectedIndex === index && (
              <p className="py-3 px-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default AdmissionFaq;
