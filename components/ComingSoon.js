import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {FaEnvelope} from "react-icons/fa";

const ComingSoon = () => {

  const [timeLeft, setTimeLeft] = useState(new Date("2025-04-01"));
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
        const difference = +new Date("2025-04-01") - +new Date();
        let timeLeft = {};
        
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
        setTimeLeft(timeLeft)
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const [popupMessage, setPopupMessage] = useState(null);

  const handleSubscribe = async () => {
    if (!email) return setPopupMessage("❌ Please enter your email!");

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    if (result.success) {
      setPopupMessage("✅ You have subscribed!");
      setEmail(""); // Clear input
    } else {
      setPopupMessage("❌ Error sending email!");
    }

    setTimeout(() => setPopupMessage(null), 3000); // Auto-close after 3s
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.h1 
        className="text-5xl font-bold mb-4" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coming Soon 🚀
      </motion.h1>
      <p className="text-lg text-gray-400 mb-6">Launching pulps soon. Stay tuned!</p>
      
      <div className="flex space-x-4 text-3xl font-bold mb-6">
        {Object.keys(timeLeft).length > 0 ? (
          Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center px-4">
              <span className="block text-4xl">{value}</span>
              <span className="text-gray-400 text-sm uppercase">{unit}</span>
            </div>
          ))
        ) : (
          <span className="text-2xl">We will be Live! 🎉</span>
        )}
      </div>
      
      <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg w-full max-w-md">
        <FaEnvelope size={20} />
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-transparent text-white focus:outline-none flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded" onClick={handleSubscribe}>Notify Me</button>
      </div>
      {/* Popup Notification */}
      <AnimatePresence>
        {popupMessage && <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />}
      </AnimatePresence>
    </div>
  );
};

const Popup = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      {message}
      <button className="ml-4 font-bold" onClick={onClose}>
        ✖
      </button>
    </motion.div>
  );
};


export default ComingSoon;
