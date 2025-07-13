import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border rounded mb-3 bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between font-medium text-gray-800 px-4 py-4 text-left  hover:bg-blue-50 transition"
      >
        <span className="text-sm md:text-xl">{question}</span>
        <span className="text-blue-600 text-lg">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
