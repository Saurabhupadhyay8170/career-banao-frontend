import React, { useState } from 'react';

// Define an interface for FAQ Items
interface FAQItem {
  question: string;
  answer: string;
}

const CounsellingFaq: React.FC = () => {
  // State to track the expanded question index
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Array of questions and answers for counseling section
  const faqs: FAQItem[] = [
    {
      question: "What is career counseling, and how can it help me?",
      answer: "Career counseling is a guidance process that helps individuals understand their skills, interests, and goals to make informed career choices."
    },
    {
      question: "Who can benefit from career counseling?",
      answer: "Career counseling is suitable for students, job seekers, professionals considering a career change, and anyone seeking clarity about their career path."
    },
    {
      question: "How do I book a counseling session?",
      answer: "You can book a session by visiting our 'Counseling' page, filling out the booking form, and choosing a suitable time slot."
    },
    {
      question: "What should I expect during a career counseling session?",
      answer: "Sessions typically include discussions about your skills, interests, goals, and challenges, along with expert advice and actionable steps."
    },
    {
      question: "Are counseling sessions conducted online or in-person?",
      answer: "We offer both online and in-person sessions. You can choose your preferred mode during the booking process."
    },
    {
      question: "How long does a career counseling session last?",
      answer: "Each session typically lasts 45 minutes to 1 hour, depending on your needs and the counselor's recommendations."
    },
    {
      question: "What qualifications do your counselors have?",
      answer: "Our counselors are certified professionals with expertise in psychology, education, and career development."
    },
    {
      question: "How much does a career counseling session cost?",
      answer: "The cost varies depending on the type of counseling and the duration. Visit our 'Pricing' page for detailed information."
    },
    {
      question: "Can I reschedule or cancel my session?",
      answer: "Yes, you can reschedule or cancel your session by logging into your account or contacting our support team at least 24 hours in advance."
    },
    {
      question: "Is the information shared in counseling sessions confidential?",
      answer: "Yes, all discussions during counseling sessions are confidential and are not shared with third parties."
    }
  ];

  // Function to toggle FAQ answers
  const toggleFAQ = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Counseling FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg">
            <button
              className="w-full text-left p-4 text-lg font-semibold bg-gray-100 rounded-t-lg focus:outline-none flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{selectedIndex === index ? '-' : '+'}</span>
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

export default CounsellingFaq;
