import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const HomeFaq: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is CareerBanao, and how can it help me with admissions?",
      answer: "CareerBanao is an online admission platform that simplifies the application process for students by providing direct admission assistance, course guidance, and partnerships with top universities across India.",
    },
    {
      question: "Which universities and courses do you offer admissions for?",
      answer: "We partner with a wide range of universities offering undergraduate, postgraduate, and professional courses such as online MBAs, engineering, law, and more. Contact us to know the latest offerings.",
    },
    {
      question: "How can I apply for admission through CareerBanao?",
      answer: "You can apply by visiting our website, selecting your desired course, and filling out the application form. Our team will guide you through the process.",
    },
    {
      question: "Do I need to meet specific eligibility criteria to apply?",
      answer: "Yes, eligibility criteria vary based on the university and course. We provide detailed eligibility information for each program on our website.",
    },
    {
      question: "Is there a fee for using CareerBanao's services?",
      answer: "Our guidance services are free for students. However, you may need to pay application or admission fees directly to the university.",
    },
    {
      question: "What are the payment options available for application or admission fees?",
      answer: "We support multiple payment options, including online payment gateways, net banking, and UPI.",
    },
    {
      question: "Can I get a refund if I decide to cancel my application?",
      answer: "Refund policies depend on the university's terms and conditions. Please check the specific university's refund policy or contact our support team for assistance.",
    },
    {
      question: "How long does the admission process take?",
      answer: "The timeline varies based on the course and university. Typically, the process takes 1-3 weeks after submitting your application.",
    },
    {
      question: "Do you provide support after admission?",
      answer: "Yes, we assist students with post-admission services like document submission, fee payments, and resolving any queries with the university.",
    },
    {
      question: "How can I contact CareerBanao for more information?",
      answer: "You can reach out to us via our contact page, WhatsApp, or call our customer support team. Details are available on the website.",
    }
  ];

  const toggleFAQ = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-poppins text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg font-poppins rounded-lg">
            <button
              className="w-full text-left p-4 text-lg bg-gray-100 rounded-t-lg focus:outline-none flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">+</span> {/* Plus Icon */}
            </button>
            {selectedIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700 rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFaq;
