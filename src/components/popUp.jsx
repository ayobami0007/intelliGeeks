import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adImage from "../assets/ad.jpeg"; 

const popUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownPopUp = localStorage.getItem("hasShownPopUp");
    if (!hasShownPopUp) {
      const timer = setTimeout(() => {
        setShowPopUp(true);
        localStorage.setItem("hasShownPopUp", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setShowPopUp(false);

  const goToContact = () => {
    navigate("/contact#contact-form");
    setShowPopUp(false);
  };

  if (!showPopUp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white w-150 rounded-lg shadow-lg p-6 text-center relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold rounded-full transition duration-300"
        >
          ×
        </button>
        <img src={adImage} alt="Advertisement" className="w-200 h-200 object-contain rounded-lg" />
        <div className="my-4 text-2xl font-semibold">
          Unlock Your Child’s Potential!
        </div>
        <button
          onClick={goToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition text-xl font-normal"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default popUp;
