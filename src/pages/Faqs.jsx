import { useState } from "react";
import Background from "../assets/Background.jpg";
import { useNavigate } from "react-router-dom";
const faqs = [
  {
    question: 'What does "Managed IT Services" include?',
    answer:
      "Managed IT Services typically include 24/7 monitoring, helpdesk support, cloud solutions, backups, and IT strategy consulting.",
  },
  {
    question: "How is Kaizen IT Solutions different from other IT providers?",
    answer:
      "Kaizen IT Solutions focuses on personalized IT strategies, proactive support, and long-term partnerships, unlike providers that only offer reactive fixes.",
  },
  {
    question: "Is my business too small to need managed IT?",
    answer:
      "No business is too small. Managed IT ensures efficiency, security, and cost savings regardless of company size.",
  },
  {
    question: "What kind of cybersecurity solutions do you offer?",
    answer:
      "We provide firewalls, endpoint protection, phishing prevention, vulnerability assessments, and compliance consulting.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const nevigate=useNavigate();
  const handleClick=()=>{
    nevigate("/contact");
  }
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-3/4 mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item rounded-lg cursor-pointer p-4 transition-colors bg-gray-200 text-black hover:bg-red-700 hover:text-white"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="faq-answer mt-2 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Faqs;
