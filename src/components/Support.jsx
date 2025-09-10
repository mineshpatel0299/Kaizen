import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react"; // icons

const faqs = [
  {
    q: "How can I contact support?",
    a: "You can reach us via email, live chat, or phone. We're available 24/7.",
  },
  {
    q: "What is the response time?",
    a: "Our average response time is under 2 hours during working days.",
  },
  {
    q: "Do you offer technical support?",
    a: "Yes, we provide full technical assistance for all our products.",
  },
];

const Support = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"
      />

      {/* Hero Section */}
      <div className="relative z-10 max-w-3xl text-center mt-20 px-6">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          We’re Here to <span className="text-[#B81616]">Help</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 mb-12"
        >
          Our support team is available 24/7 to assist you with any queries.
        </motion.p>
      </div>

      {/* Contact Options */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-5xl px-6 mb-20">
        {[
          { icon: <Mail className="w-8 h-8 text-blue-600" />, title: "Email Us", desc: "support@kaizen.com" },
          { icon: <MessageCircle className="w-8 h-8 text-green-600" />, title: "Live Chat", desc: "Chat with our agents instantly" },
          { icon: <Phone className="w-8 h-8 text-purple-600" />, title: "Call Us", desc: "+91 9996383734" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white shadow-lg border rounded-2xl p-6 hover:shadow-2xl transition-all"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;