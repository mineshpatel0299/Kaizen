import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';

const chatbotMessages = [
  {
    id: 1,
    text: "Hi there! I'm Kaizen Bot, your virtual assistant. How can I help you today?",
    sender: 'bot',
  },
  {
    id: 2,
    text: "Here are some common questions you might have:",
    sender: 'bot',
  },
  {
    id: 3,
    text: "1. What services does Kaizen IT Solutions offer?",
    sender: 'bot',
    isQuestion: true,
  },
  {
    id: 4,
    text: "2. What kind of IT solutions do you provide?",
    sender: 'bot',
    isQuestion: true,
  },
  {
    id: 5,
    text: "3. Why should I choose Kaizen IT Solutions?",
    sender: 'bot',
    isQuestion: true,
  },
  {
    id: 6,
    text: "4. How can I contact Kaizen IT Solutions?",
    sender: 'bot',
    isQuestion: true,
  },
  {
    id: 7,
    text: "5. Do you offer 24/7 support?",
    sender: 'bot',
    isQuestion: true,
  },
];

const predefinedAnswers = {
  "1": "We offer IT Solution Design & Implementation, IT Services & Consulting, IT Network Operations, Support Services, and Managed Services. We provide end-to-end IT management solutions.",
  "2": "Our solutions include IT Infrastructure, Cloud & Virtualization, Backup Solutions, Server & Storage, Network & Security, Data Center Solutions, Structured Cabling, Video Surveillance, and ELV (Extra Low Voltage) solutions.",
  "3": "We are a trusted and reliable partner, fast and focused on keeping your business running smoothly, and offer proactive IT care. We deliver tailored IT services and solutions that drive continuous improvement and peak performance.",
  "4": "You can reach us by phone at 0506766895, email us at info@kaizenitsolutionsllc.com, or visit our website at www.kaizenitsolutionsllc.com.",
  "5": "Yes, our support team is available 24/7 to assist you with any queries, and we offer 24/7 monitoring and management of your IT networks.",
};

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState(chatbotMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (questionNumber = null) => {
    let userMessageText = input;
    if (questionNumber) {
      userMessageText = `Question ${questionNumber}`;
    }

    if (!userMessageText.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: userMessageText,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponseText = "I'm sorry, I don't understand that. Please try asking one of the numbered questions or rephrase your query.";
      if (questionNumber && predefinedAnswers[questionNumber]) {
        botResponseText = predefinedAnswers[questionNumber];
      } else if (userMessageText.toLowerCase().includes("services")) {
        botResponseText = predefinedAnswers["1"];
      } else if (userMessageText.toLowerCase().includes("solutions")) {
        botResponseText = predefinedAnswers["2"];
      } else if (userMessageText.toLowerCase().includes("why choose us") || userMessageText.toLowerCase().includes("why kaizen")) {
        botResponseText = predefinedAnswers["3"];
      } else if (userMessageText.toLowerCase().includes("contact")) {
        botResponseText = predefinedAnswers["4"];
      } else if (userMessageText.toLowerCase().includes("24/7 support") || userMessageText.toLowerCase().includes("support hours")) {
        botResponseText = predefinedAnswers["5"];
      }

      const newBotMessage = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    }, 500);
  };

  const handleQuestionClick = (questionNumber) => {
    handleSendMessage(questionNumber);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50 border border-gray-200"
        >
          <div className="flex justify-between items-center p-4 bg-[#B81616] text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">Kaizen Chatbot</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg break-words ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } ${msg.isQuestion ? 'cursor-pointer hover:bg-gray-300' : ''}`}
                  onClick={msg.isQuestion ? () => handleQuestionClick(msg.text.split('.')[0]) : null}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#B81616]"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-2 p-2 bg-[#B81616] text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
