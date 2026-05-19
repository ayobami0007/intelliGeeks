import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-4 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition ${
          open ? "bg-blue-50 text-[#0d1b6e]" : "text-gray-800 hover:bg-gray-50"
        }`}
      >
        <span className="text-base md:text-lg font-medium">{question}</span>
        <span className="text-[#0d1b6e] text-lg">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;